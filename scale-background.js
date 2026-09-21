/* Pointer-local pressure: independent tile springs; static when settled. */
(() => {
  'use strict';
  const layer = document.querySelector('.scale-background');
  const canvas = document.querySelector('.scale-background .weave-field');
  const ctx = canvas?.getContext('2d', { alpha: true });
  if (!ctx) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const hiddenPattern = [
    matchMedia('(prefers-reduced-transparency: reduce)'),
    matchMedia('(prefers-contrast: more)'),
    matchMedia('(forced-colors: active)')
  ];
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  const cache = document.createElement('canvas');
  const cacheCtx = cache.getContext('2d', { alpha: true });
  const sprites = new Map(), buckets = new Map();
  const BLOCK = 128, MASS = 1, STIFFNESS = 100, DAMPING = 10;
  const decayRate = DAMPING / (2 * MASS);
  const frequency = Math.sqrt(STIFFNESS / MASS - decayRate * decayRate);
  let width = 0, height = 0, dpr = 1, cellWidth = 0, cellHeight = 0;
  let baseLeft = 0, baseTop = 0, shiftY = 0, radius = 220;
  let cells = [], blocks = [], blockCols = 0, blockRows = 0;
  let moving = new Set(), pressed = new Set(), dirty = new Set();
  let frame = 0, frames = 0, lastFrame = 0, resizeTimer = 0, targetsDirty = false;
  const pointer = { active: false, x: 0, y: 0 };
  function allowed() {
    return document.body.dataset.sceneMotion === 'running' && !document.hidden &&
      document.hasFocus() && finePointer.matches && !reduced.matches &&
      !hiddenPattern.some(query => query.matches) && !document.querySelector('dialog[open]');
  }
  function diagnostics() {
    canvas.dataset.pointerActive = String(pointer.active);
    canvas.dataset.pressureActive = String(moving.size > 0 || pressed.size > 0);
    canvas.dataset.activeCells = String(moving.size);
    canvas.dataset.pressedCells = String(pressed.size);
    canvas.dataset.frameScheduled = String(Boolean(frame));
  }

  // Coordinate-based seeds keep the pattern varied but stable during redraws and resize.
  function sample(row, col, salt) {
    let n = Math.imul(row, 374761393) ^ Math.imul(col, 668265263) ^ salt;
    n = Math.imul(n ^ (n >>> 13), 1274126177);
    return ((n ^ (n >>> 16)) >>> 0) / 4294967296;
  }

  function sprite(up, row, col) {
    const variation = sample(row, col, 8191);
    const tone = (4 + Math.floor(sample(row, col, 131071) * 6) * 2) / 100;
    const hue = sample(row, col, 524287) < .3 ? '150,165,191' : '137,187,194';
    const type = variation < .16 ? 'dark' : variation < .34 ? 'light' : variation < .44 ? 'outline' : 'fill';
    const direction = sample(row, col, 1048573) < .5 ? 30 : 145;
    const key = `${up}:${type}:${hue}:${tone}:${direction}`;
    if (sprites.has(key)) return sprites.get(key);
    const bitmap = document.createElement('canvas');
    const w = cellWidth + 2, h = cellHeight + 2;
    bitmap.width = Math.ceil(w * dpr); bitmap.height = Math.ceil(h * dpr);
    const paint = bitmap.getContext('2d');
    paint.setTransform(dpr, 0, 0, dpr, 1 * dpr, 1 * dpr);
    if (type === 'dark') paint.fillStyle = 'rgba(4,12,23,.20)';
    else {
      const angle = direction * Math.PI / 180;
      const dx = Math.sin(angle), dy = -Math.cos(angle);
      const reach = (Math.abs(dx) * cellWidth + Math.abs(dy) * cellHeight) / 2;
      const gradient = paint.createLinearGradient(cellWidth/2 - dx*reach, cellHeight/2 - dy*reach,
        cellWidth/2 + dx*reach, cellHeight/2 + dy*reach);
      gradient.addColorStop(0, type === 'light' ? 'rgba(121,161,180,.17)' : `rgba(${hue},${tone})`);
      gradient.addColorStop(1, type === 'light' ? 'rgba(96,131,156,.018)' : 'rgba(143,178,191,.018)');
      paint.fillStyle = gradient;
    }
    paint.beginPath();
    if (up) { paint.moveTo(cellWidth/2, 0); paint.lineTo(cellWidth, cellHeight); paint.lineTo(0, cellHeight); }
    else { paint.moveTo(0, 0); paint.lineTo(cellWidth, 0); paint.lineTo(cellWidth/2, cellHeight); }
    paint.closePath();
    if (type === 'outline') {
      paint.strokeStyle = `rgba(${hue},.10)`;
      paint.lineWidth = .65; paint.stroke();
    } else paint.fill();
    const result = { bitmap, w, h }; sprites.set(key, result); return result;
  }

  function drawCell(target, cell) {
    const strength = Math.max(0, Math.min(1, cell.strength));
    const scale = 1 - .2 * strength, { bitmap, w, h } = cell.sprite;
    target.globalAlpha = .72 + .14 * strength;
    target.drawImage(bitmap, cell.x - w*scale/2, cell.y - h*scale/2, w*scale, h*scale);
  }
  function staticFrame() {
    // Copy matching backing pixels; never resample the cached resting image.
    ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.globalAlpha = 1;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(cache, 0, 0);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  function stop() {
    if (frame) cancelAnimationFrame(frame);
    frame = 0; pointer.active = false; targetsDirty = false;
    for (const index of new Set([...moving, ...pressed])) {
      const cell = cells[index]; cell.strength = cell.velocity = cell.target = 0;
    }
    const changed = moving.size || pressed.size;
    moving.clear(); pressed.clear(); dirty.clear();
    if (width && changed) staticFrame();
    canvas.dataset.dirtyBlocks = '0';
    diagnostics();
  }
  function wake() {
    if (!frame && allowed() && (targetsDirty || moving.size)) {
      lastFrame = performance.now(); frame = requestAnimationFrame(draw);
    }
    diagnostics();
  }
  function resize() {
    const resumePointer = pointer.active && allowed();
    stop();
    const bounds = canvas.getBoundingClientRect();
    shiftY = Number(layer?.dataset.parallaxShift) || 0;
    baseLeft = bounds.left; baseTop = bounds.top - shiftY;
    width = Math.max(1, bounds.width); height = Math.max(1, bounds.height);
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    radius = innerWidth <= 700 ? 180 : 220;
    const basisWidth = Math.max(innerWidth * 1.10, innerHeight * 1.38);
    cellWidth = basisWidth * .1407 * .20 * 1.35;
    cellHeight = cellWidth * Math.sqrt(3) / 2;
    const stepX = cellWidth / 2, stepY = cellHeight;
    const startX = -cellWidth, startY = -cellHeight;
    for (const surface of [canvas, cache]) {
      surface.width = Math.ceil(width * dpr); surface.height = Math.ceil(height * dpr);
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); cacheCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    sprites.clear(); buckets.clear(); cells = [];
    blockCols = Math.ceil(width / BLOCK); blockRows = Math.ceil(height / BLOCK);
    blocks = Array.from({ length: blockCols * blockRows }, (_, index) => {
      const col = index % blockCols, row = Math.floor(index / blockCols);
      const px = Math.round(col*BLOCK*dpr), py = Math.round(row*BLOCK*dpr);
      const pw = Math.min(canvas.width, Math.round((col+1)*BLOCK*dpr))-px;
      const ph = Math.min(canvas.height, Math.round((row+1)*BLOCK*dpr))-py;
      // Pixel-aligned boundaries avoid clipped half-pixels at fractional display scales.
      return { px, py, pw, ph, x: px/dpr, y: py/dpr, w: pw/dpr, h: ph/dpr, cells: [] };
    });
    const firstCol = Math.floor((-cellWidth - startX) / stepX), lastCol = Math.ceil((width - startX) / stepX);
    const firstRow = Math.floor((-cellHeight - startY) / stepY), lastRow = Math.ceil((height - startY) / stepY);
    for (let row = firstRow; row <= lastRow; row++) {
      for (let col = firstCol; col <= lastCol; col++) {
        if (sample(row, col, 65537) < .12) continue;
        const cell = { x: startX + col*stepX + cellWidth/2, y: startY + row*stepY + cellHeight/2,
          sprite: sprite(Math.abs(col + row) % 2 === 0, row, col), strength: 0, velocity: 0, target: 0, blocks: [] };
        const index = cells.length;
        cells.push(cell); drawCell(cacheCtx, cell);
        const key = `${Math.floor(cell.x/BLOCK)},${Math.floor(cell.y/BLOCK)}`;
        if (!buckets.has(key)) buckets.set(key, []);
        buckets.get(key).push(index);
        // Include every sprite that can touch a block, including outlines and antialiasing.
        const halfW = cell.sprite.w/2 + 1, halfH = cell.sprite.h/2 + 1;
        const left = Math.max(0, Math.floor((cell.x-halfW)/BLOCK));
        const right = Math.min(blockCols-1, Math.floor((cell.x+halfW)/BLOCK));
        const top = Math.max(0, Math.floor((cell.y-halfH)/BLOCK));
        const bottom = Math.min(blockRows-1, Math.floor((cell.y+halfH)/BLOCK));
        for (let by = top; by <= bottom; by++) for (let bx = left; bx <= right; bx++) {
          const block = by*blockCols+bx;
          cell.blocks.push(block); blocks[block].cells.push(index);
        }
      }
    }
    cacheCtx.globalAlpha = 1;
    Object.assign(canvas.dataset, {
      cellWidth: cellWidth.toFixed(3), cellHeight: cellHeight.toFixed(3), cellCount: String(cells.length),
      sizeRatio: '0.27', scaleFromV23: '1.35', geometry: 'equilateral', pattern: 'seeded-mixed',
      frameRate: 'display', rendering: 'dirty-blocks', interaction: 'pointer-pressure',
      pressureRadius: String(radius), frameCount: String(frames), dirtyBlocks: '0', drawnCells: '0'
    });
    staticFrame();
    if (resumePointer) { pointer.active = true; targetsDirty = true; wake(); }
    else diagnostics();
  }
  function retarget() {
    targetsDirty = false;
    const next = new Set();
    if (pointer.active) {
      // The target follows the latest pointer immediately; only individual tiles have springs.
      const x = pointer.x-baseLeft, y = pointer.y-baseTop-shiftY;
      Object.assign(canvas.dataset, { lastClientX: pointer.x.toFixed(2), lastClientY: pointer.y.toFixed(2),
        lastLocalX: x.toFixed(2), lastLocalY: y.toFixed(2) });
      const left = Math.floor((x-radius)/BLOCK), right = Math.floor((x+radius)/BLOCK);
      const top = Math.floor((y-radius)/BLOCK), bottom = Math.floor((y+radius)/BLOCK);
      for (let by = top; by <= bottom; by++) for (let bx = left; bx <= right; bx++) {
        const nearby = buckets.get(`${bx},${by}`);
        if (!nearby) continue;
        for (const index of nearby) {
          const cell = cells[index], dx = cell.x-x, dy = cell.y-y;
          const falloff = Math.max(0, 1-(dx*dx+dy*dy)/(radius*radius));
          const target = falloff * falloff;
          if (target <= .001) continue;
          next.add(index);
          if (Math.abs(cell.target-target) > .00001) { cell.target = target; moving.add(index); }
        }
      }
    }
    for (const index of pressed) if (!next.has(index)) {
      cells[index].target = 0; moving.add(index);
    }
    pressed = next;
  }
  function paintBlocks() {
    let drawn = 0;
    for (const index of dirty) {
      const block = blocks[index];
      if (!block.cells.some(cellIndex => cells[cellIndex].strength !== 0)) {
        // Exact restoration also preserves low-alpha compositing and rounding from the baseline.
        ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.globalAlpha = 1;
        ctx.clearRect(block.px, block.py, block.pw, block.ph);
        ctx.drawImage(cache, block.px, block.py, block.pw, block.ph,
          block.px, block.py, block.pw, block.ph);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        continue;
      }
      ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.beginPath(); ctx.rect(block.px, block.py, block.pw, block.ph); ctx.clip();
      ctx.clearRect(block.px, block.py, block.pw, block.ph);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Redraw all intersecting neighbors in their original order so shrinking leaves no fragments.
      for (const cellIndex of block.cells) { drawCell(ctx, cells[cellIndex]); drawn++; }
      ctx.restore();
    }
    ctx.globalAlpha = 1;
    canvas.dataset.drawnCells = String(drawn); canvas.dataset.dirtyBlocks = String(dirty.size);
    if (dirty.size) canvas.dataset.frameCount = String(++frames);
    dirty.clear();
  }
  function draw(now) {
    frame = 0;
    if (!allowed()) { stop(); return; }
    if (targetsDirty) retarget();
    const dt = Math.min(.08, Math.max(0, (now-lastFrame)/1000)); lastFrame = now;
    // Exact damped-spring integration keeps the same response at 60, 120 and 144 Hz.
    const decay = Math.exp(-decayRate*dt), cos = Math.cos(frequency*dt), sin = Math.sin(frequency*dt);
    for (const index of moving) {
      const cell = cells[index], error = cell.strength-cell.target, velocity = cell.velocity;
      cell.strength = cell.target + decay*(error*cos+(velocity+decayRate*error)/frequency*sin);
      cell.velocity = decay*(velocity*cos-(decayRate*velocity+STIFFNESS/MASS*error)/frequency*sin);
      if (Math.abs(cell.strength-cell.target) < .001 && Math.abs(cell.velocity) < .004) {
        cell.strength = cell.target; cell.velocity = 0; moving.delete(index);
      }
      for (const block of cell.blocks) dirty.add(block);
    }
    paintBlocks();
    if (moving.size || targetsDirty) frame = requestAnimationFrame(draw);
    diagnostics();
  }
  function releasePointer() {
    if (!pointer.active) return;
    pointer.active = false; targetsDirty = true;
    if (allowed()) wake(); else stop();
  }
  window.addEventListener('pointermove', event => {
    if (event.pointerType !== 'mouse') return;
    if (!allowed()) { stop(); return; }
    if (pointer.active && pointer.x === event.clientX && pointer.y === event.clientY) return;
    pointer.active = true; pointer.x = event.clientX; pointer.y = event.clientY;
    targetsDirty = true; wake();
  }, { passive: true });
  document.documentElement.addEventListener('pointerleave', releasePointer, { passive: true });
  window.addEventListener('pointerout', event => { if (!event.relatedTarget) releasePointer(); }, { passive: true });
  window.addEventListener('pointercancel', releasePointer, { passive: true });
  document.addEventListener('a2:background-parallax', event => {
    if (!Number.isFinite(event.detail?.shiftY) || event.detail.shiftY === shiftY) return;
    shiftY = event.detail.shiftY;
    if (pointer.active && allowed()) { targetsDirty = true; wake(); }
  });
  const clearWhenBlocked = () => { if (!allowed()) stop(); };
  new MutationObserver(clearWhenBlocked).observe(document.body, {
    attributes: true, subtree: true, attributeFilter: ['data-scene-motion', 'open']
  });
  [reduced, finePointer, ...hiddenPattern].forEach(query => query.addEventListener('change', () => {
    stop();
    if (!hiddenPattern.some(preference => preference.matches)) resize();
  }));
  document.addEventListener('visibilitychange', clearWhenBlocked);
  window.addEventListener('blur', stop);
  window.addEventListener('pagehide', stop);
  window.addEventListener('pageshow', resize);
  window.addEventListener('resize', () => {
    stop(); clearTimeout(resizeTimer); resizeTimer = setTimeout(resize, 100);
  }, { passive: true });
  resize();
})();
