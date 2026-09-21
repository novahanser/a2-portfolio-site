/* Decorative motion only. Portfolio content and controls work independently. */
(() => {
  'use strict';
  const canvas = document.getElementById('particle-field');
  const ctx = canvas?.getContext('2d', { alpha: true });
  const toggle = document.getElementById('motion-toggle');
  if (!ctx || !toggle) return;

  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  const trailCanvas = document.getElementById('pointer-trail');
  const trailCtx = trailCanvas?.getContext('2d', { alpha:true });
  const glassBackdrop = document.querySelector('.ambient-glass');
  const topology = document.querySelector('.ambient-topology');
  const scaleBackground = document.querySelector('.scale-background');
  const heroSculpture = document.querySelector('.glass-sculpture');
  const storageKey = 'a2-background-motion-paused';
  const spring = { mass: 1, stiffness: 100, damping: 10 };
  let manuallyPaused = false;
  try { manuallyPaused = localStorage.getItem(storageKey) === 'true'; } catch { /* Local-file privacy modes may deny storage. */ }
  let width = 0, height = 0, pixelRatio = 1, frameId = 0, lastFrame = 0, time = 0;
  let paletteMix = 0, dotColor = '#b5e2ee', modalOpen = false;
  const spriteCache = new Map();
  let running = false, focused = document.hasFocus();
  let facets = [], scrollPaths = [];
  let lastPathDepth = NaN, resizeFrame = 0;
  const pointer = { x: 0, y: 0, active: false, vx:0, vy:0, stamp:0 };
  // Fixed budgets: at most 115 desktop particles, including the denser trail and click burst.
  const AMBIENT_DESKTOP=72, AMBIENT_COMPACT=50, TRAIL_CAPACITY=35, CLICK_CAPACITY=8;
  const MIN_FACET_SIZE=1.5, MAX_FACET_SIZE=96;
  const POINTER_START_SCALE=1.5, POINTER_END_SCALE=.08;
  const trailPool=Array.from({length:TRAIL_CAPACITY},()=>({born:-Infinity,kind:'trail'}));
  const clickPool=Array.from({length:CLICK_CAPACITY},()=>({born:-Infinity,kind:'click'}));
  const pointerPool=[...trailPool,...clickPool];
  const trailBounds={x:0,y:0,w:0,h:0};
  let trailHead=0,trailCount=0,clickCount=0,trailCredit=0,trailAnchorX=0,trailAnchorY=0;
  let press=null;
  const scrollDepth = { x:0,y:Math.max(0,scrollY),vx:0,vy:0 };
  let scrollTarget=scrollDepth.y, lastBackdropShift=NaN;
  let scrollRange=1, patternTravel=160, topologyTravel=96;
  let lastPatternShift=NaN,lastTopologyShift=NaN;
  let randomSeed = 9182026;
  const random = () => { randomSeed = (randomSeed * 1664525 + 1013904223) >>> 0; return randomSeed / 4294967296; };

  function syncPointerCounts() {
    if(!trailCanvas) return;
    const counts={activeCount:trailCount+clickCount,trailCount,clickCount};
    for(const [key,value] of Object.entries(counts)){
      if(trailCanvas.dataset[key]!==String(value)) trailCanvas.dataset[key]=String(value);
    }
  }
  function clearTrail() {
    for(const p of pointerPool) p.born=-Infinity;
    trailCount=clickCount=trailCredit=0;press=null;
    syncPointerCounts();
    if(trailCtx) trailCtx.clearRect(trailBounds.x,trailBounds.y,trailBounds.w,trailBounds.h);
    trailBounds.w=trailBounds.h=0;
  }
  function setShard(p,radius,stamp,life) {
    const angle=random()*Math.PI*2,cos=Math.cos(angle),sin=Math.sin(angle);
    p.life=life;p.born=stamp/1000;p.radius=radius;
    p.ax=cos*radius;p.ay=sin*radius;
    p.bx=(-.40*cos-.72*sin)*radius;p.by=(-.40*sin+.72*cos)*radius;
    p.cx=(-.62*cos+.58*sin)*radius;p.cy=(-.62*sin-.58*cos)*radius;
  }
  function emitTrail(x,y,seconds,stamp) {
    if(!trailCtx) return;
    const dx=x-trailAnchorX,dy=y-trailAnchorY,distance=Math.hypot(dx,dy);
    // Allow the longer life to finish: do not recycle still-visible trail shards.
    trailCredit=Math.min(2,trailCredit+seconds*22);
    if(distance<10||trailCredit<1) return;
    const count=Math.min(2,Math.floor(trailCredit),Math.ceil(distance/18));
    // Long pointer jumps seed only the newest part of the path, not a cross-page streak.
    const span=Math.min(distance,54),nx=dx/distance,ny=dy/distance;
    for(let i=0;i<count;i++){
      let p=null;
      for(let slot=0;slot<TRAIL_CAPACITY;slot++){
        const candidate=trailPool[trailHead];trailHead=(trailHead+1)%TRAIL_CAPACITY;
        if(candidate.born===-Infinity){p=candidate;break;}
      }
      if(!p) break;
      trailCount++;
      const offset=span*(1-(i+1)/count);
      setShard(p,5+random()*7,stamp,1.05+random()*.50);
      p.x=x-nx*(offset+9)+(random()-.5)*4;p.y=y-ny*(offset+9)+(random()-.5)*4;
      p.vx=-nx*(8+random()*8)+(random()-.5)*9;
      p.vy=-ny*(8+random()*8)+(random()-.5)*9;
      p.filled=random()<.65;
      p.opacity=.40+random()*.25;
    }
    trailCredit-=count;trailAnchorX=x;trailAnchorY=y;
    syncPointerCounts();
  }
  function emitClick(x,y,stamp) {
    if(!trailCtx) return;
    // Repeated clicks replace this eight-slot burst instead of growing the pool.
    const phase=random()*Math.PI*2;
    for(let i=0;i<CLICK_CAPACITY;i++){
      const p=clickPool[i],angle=phase+(i+(random()-.5)*.35)*Math.PI*2/CLICK_CAPACITY;
      const speed=120+random()*90;
      setShard(p,5+random()*7,stamp,.55+random()*.30);
      p.x=x+Math.cos(angle)*3;p.y=y+Math.sin(angle)*3;
      p.vx=Math.cos(angle)*speed;p.vy=Math.sin(angle)*speed;
      p.filled=random()<.8;p.opacity=.55+random()*.20;
    }
    clickCount=CLICK_CAPACITY;
    syncPointerCounts();
  }
  function drawTrail(now) {
    if(!trailCtx||(!trailCount&&!clickCount&&!trailBounds.w)) return;
    trailCtx.clearRect(trailBounds.x,trailBounds.y,trailBounds.w,trailBounds.h);
    let minX=Infinity,minY=Infinity,maxX=-Infinity,maxY=-Infinity;
    trailCtx.strokeStyle=trailCtx.fillStyle=dotColor;trailCtx.lineWidth=.8;
    for(const p of pointerPool){
      if(p.born===-Infinity) continue;
      const age=Math.max(0,now/1000-p.born);
      if(age>=p.life){p.born=-Infinity;if(p.kind==='click')clickCount--;else trailCount--;continue;}
      // Begin at 150% of the previous radius, then continuously shrink and fade.
      const remaining=1-age/p.life,scale=POINTER_END_SCALE+(POINTER_START_SCALE-POINTER_END_SCALE)*remaining;
      const travel=p.kind==='click'?(1-Math.exp(-5*age))/5:age;
      const x=p.x+p.vx*travel,y=p.y+p.vy*travel,r=p.radius*POINTER_START_SCALE+2;
      trailCtx.globalAlpha=Math.min(1,age/.025)*remaining*p.opacity;
      trailCtx.beginPath();trailCtx.moveTo(x+p.ax*scale,y+p.ay*scale);
      trailCtx.lineTo(x+p.bx*scale,y+p.by*scale);trailCtx.lineTo(x+p.cx*scale,y+p.cy*scale);trailCtx.closePath();
      if(p.filled) trailCtx.fill();else trailCtx.stroke();
      minX=Math.min(minX,x-r);minY=Math.min(minY,y-r);maxX=Math.max(maxX,x+r);maxY=Math.max(maxY,y+r);
    }
    trailCtx.globalAlpha=1;
    syncPointerCounts();
    if(Number.isFinite(minX)){
      trailBounds.x=Math.floor(minX);trailBounds.y=Math.floor(minY);
      trailBounds.w=Math.ceil(maxX)-trailBounds.x;trailBounds.h=Math.ceil(maxY)-trailBounds.y;
    }else trailBounds.w=trailBounds.h=0;
  }

  function springStep(state, x, y, dt) {
    state.vx += ((x - state.x) * spring.stiffness - state.vx * spring.damping) / spring.mass * dt;
    state.vy += ((y - state.y) * spring.stiffness - state.vy * spring.damping) / spring.mass * dt;
    state.x += state.vx * dt;
    state.y += state.vy * dt;
  }

  function integrate(state, x, y, dt) {
    if(Math.abs(state.x-x)+Math.abs(state.y-y)+Math.abs(state.vx)+Math.abs(state.vy)<.002){
      state.x=x;state.y=y;state.vx=state.vy=0;return;
    }
    const steps=Math.max(1,Math.ceil(dt/(1/60)));
    for (let i=0;i<steps;i++) springStep(state,x,y,dt/steps);
  }

  function facetSprite(size,tint,outline,warm) {
    const key=[size,tint,outline,warm].join(':');
    if (spriteCache.has(key)) return spriteCache.get(key);
    const extent=Math.ceil(size*1.5+6), scale=2;
    const bitmap=document.createElement('canvas');
    bitmap.width=bitmap.height=Math.ceil(extent*scale);
    const paint=bitmap.getContext('2d');
    paint.setTransform(scale,0,0,scale,bitmap.width/2,bitmap.height/2);
    const color=warm ? (tint===2?'245,145,153':'224,170,180') : (tint===2?'204,109,159':(tint===1?'169,216,228':'112,147,170'));
    const gradient=paint.createLinearGradient(-size*.5,-size*.4,size*.4,size*.4);
    const fill=tint===2?.45:(outline?.045:.24);
    gradient.addColorStop(0,`rgba(${color},${fill})`);
    gradient.addColorStop(1,`rgba(${color},${fill*.18})`);
    paint.beginPath();paint.moveTo(-size*.56,size*.39);paint.lineTo(size*.49,size*.20);paint.lineTo(size*.1,-size*.66);paint.closePath();
    paint.fillStyle=gradient;paint.fill();
    paint.strokeStyle=`rgba(${color},${tint===2?.56:.40})`;paint.lineWidth=.8;paint.stroke();
    const sprite={bitmap,extent};spriteCache.set(key,sprite);return sprite;
  }

  const wrap=(position,span,margin)=>((position+margin)%(span+margin*2)+(span+margin*2))%(span+margin*2)-margin;
  const freeFlow=()=>({flowX:0,flowY:0,flowVX:0,flowVY:0,targetVX:(random()-.5)*2,targetVY:(random()-.5)*2,nextTurn:time+5+random()*8});
  function wander(p,dt,speed,blend) {
    if(time>=p.nextTurn){
      p.targetVX=(random()-.5)*speed;p.targetVY=(random()-.5)*speed;
      p.nextTurn=time+7+random()*9;
    }
    // A random target changes only occasionally; velocity blends continuously.
    // Integrate the exponential velocity blend over elapsed time, independent of refresh rate.
    p.flowX+=p.targetVX*dt+(p.flowVX-p.targetVX)*blend/.65;
    p.flowY+=p.targetVY*dt+(p.flowVY-p.targetVY)*blend/.65;
    p.flowVX+=(p.targetVX-p.flowVX)*blend;p.flowVY+=(p.targetVY-p.flowVY)*blend;
  }
  function scrollPath(free,compact,strength=1) {
    if(free) return null;
    // Each path is seeded once: reversible scroll motion, without random jitter.
    const angle=random()*Math.PI*2, cos=Math.cos(angle), sin=Math.sin(angle);
    const gain=(.026+random()*.069)*(compact?.62:1)*strength;
    const bend=(12+random()*35)*(compact?.65:1)*strength;
    const phase=random()*Math.PI*2;
    const path={rateX:cos*gain,rateY:sin*gain,bendX:-sin*bend,bendY:cos*bend,
      frequency:1/(340+random()*650),phase,origin:Math.sin(phase),x:0,y:0};
    scrollPaths.push(path);
    return path;
  }
  function updateScrollPaths() {
    const depth=Math.max(0,scrollDepth.y);
    if(Number.isFinite(lastPathDepth)&&Math.abs(depth-lastPathDepth)<.025) return;
    for(const path of scrollPaths){
      const wave=Math.sin(depth*path.frequency+path.phase)-path.origin;
      path.x=depth*path.rateX+wave*path.bendX;
      path.y=depth*path.rateY+wave*path.bendY;
    }
    lastPathDepth=depth;
  }
  function setPatternShift(shift) {
    if (shift === lastPatternShift) return;
    lastPatternShift = shift;
    if (!scaleBackground) return;
    const shiftY = -shift;
    scaleBackground.style.transform = `translate3d(0,${shiftY}px,0)`;
    scaleBackground.dataset.parallaxShift = String(shiftY);
    // Keep pointer coordinates aligned with the moving pattern without layout reads.
    document.dispatchEvent(new CustomEvent('a2:background-parallax', { detail: { shiftY } }));
  }
  function updateScrollMetrics() {
    // Read layout only when content or viewport dimensions change, never in the frame loop.
    scrollRange=Math.max(1,Math.max(document.documentElement.scrollHeight,document.body.scrollHeight)-innerHeight);
    const compact=innerWidth<=700;
    patternTravel=compact?96:160;topologyTravel=compact?56:96;
    if(scaleBackground) scaleBackground.dataset.parallaxTravel=String(patternTravel);
    if(topology) topology.dataset.parallaxTravel=String(topologyTravel);
    // A paused desktop scene resized to mobile must still fit the smaller overscan.
    if(lastPatternShift>patternTravel){
      setPatternShift(patternTravel);
    }
    if(lastTopologyShift>topologyTravel){
      lastTopologyShift=topologyTravel;
      if(topology) topology.style.transform=`translate3d(0,${-lastTopologyShift}px,0)`;
    }
  }
  function updateDepth(dt,snap=false) {
    if(snap){scrollDepth.y=scrollTarget;scrollDepth.vx=scrollDepth.vy=0;}
    else integrate(scrollDepth,0,scrollTarget,dt);
    const shift=Math.max(0,Math.min(44,scrollDepth.y*.008));
    if(snap||!Number.isFinite(lastBackdropShift)||Math.abs(shift-lastBackdropShift)>.05){
      glassBackdrop.style.transform=`translate3d(0,${-shift}px,0)`;
      lastBackdropShift=shift;
    }
    // Different travel distances keep both geometric layers moving gently across the full page.
    const progress=Math.max(0,Math.min(1,scrollDepth.y/scrollRange));
    const patternShift=progress*patternTravel,topologyShift=progress*topologyTravel;
    const atEnd=progress===0||progress===1;
    if(snap||!Number.isFinite(lastPatternShift)||Math.abs(patternShift-lastPatternShift)>.025||(atEnd&&patternShift!==lastPatternShift)){
      setPatternShift(patternShift);
    }
    if(snap||!Number.isFinite(lastTopologyShift)||Math.abs(topologyShift-lastTopologyShift)>.025||(atEnd&&topologyShift!==lastTopologyShift)){
      if(topology) topology.style.transform=`translate3d(0,${-topologyShift}px,0)`;
      lastTopologyShift=topologyShift;
    }
  }
  function syncPalette(mix) {
    paletteMix=mix;
    dotColor=`rgb(${Math.round(181+paletteMix*53)},${Math.round(226-paletteMix*45)},${Math.round(238-paletteMix*48)})`;
    if (width && !running && !document.hidden && focused) draw(0,false);
  }
  document.addEventListener('a2:palette',event=>syncPalette(event.detail.mix));
  syncPalette(Number(document.getElementById('scroll-palette')?.dataset.mix)||0);

  function resize() {
    width = document.documentElement.clientWidth;
    height = innerHeight;
    updateScrollMetrics();
    // Keep at least one backing pixel per CSS pixel; use extra detail on HiDPI displays.
    const dpr = Math.max(1,Math.min(devicePixelRatio || 1,2,Math.sqrt(4000000 / Math.max(width * height,1))));
    pixelRatio=dpr;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='high';
    canvas.dataset.pixelRatio=dpr.toFixed(3);canvas.dataset.spriteResolution='2';
    if(trailCtx){
      const trailDpr=Math.max(1,Math.min(devicePixelRatio||1,2,Math.sqrt(2000000/Math.max(width*height,1))));
      trailCanvas.width=Math.round(width*trailDpr);trailCanvas.height=Math.round(height*trailDpr);
      trailCtx.setTransform(trailDpr,0,0,trailDpr,0,0);
      trailCtx.imageSmoothingEnabled=true;trailCtx.imageSmoothingQuality='high';
      trailCanvas.dataset.capacity=String(TRAIL_CAPACITY);
      trailCanvas.dataset.clickCapacity=String(CLICK_CAPACITY);
      trailCanvas.dataset.totalCapacity=String(TRAIL_CAPACITY+CLICK_CAPACITY);
      trailCanvas.dataset.minLifeMs='1050';trailCanvas.dataset.maxLifeMs='1550';
      trailCanvas.dataset.clickMaxLifeMs='850';
      trailCanvas.dataset.startScale=String(POINTER_START_SCALE);
      trailCanvas.dataset.endScale=String(POINTER_END_SCALE);
    }
    const compact = width < 700;
    spriteCache.clear();
    scrollPaths=[];
    lastPathDepth=NaN;
    const facetCount=compact?AMBIENT_COMPACT:AMBIENT_DESKTOP;
    canvas.dataset.particleCount=String(facetCount);
    canvas.dataset.sizeMode='mixed';
    canvas.dataset.frameRate='display';
    if(trailCanvas) trailCanvas.dataset.frameRate='display';
    randomSeed = 9182026;
    // Randomize once per layout. Quantized sprites still share cached bitmaps.
    const sizeFactor=compact?.7:1;
    canvas.dataset.minSize=String(MIN_FACET_SIZE*sizeFactor);
    canvas.dataset.maxSize=String(MAX_FACET_SIZE*sizeFactor);
    facets = Array.from({length:facetCount}, (_,i) => {
      const peripheral=i%4!==0;
      const band=random()*(compact?.14:.20);
      const u=peripheral?(i%2===0?band:1-band):.2+random()*.6;
      const v=(i+random()*.65)/facetCount;
      // Permuted random strata span the full range without clustering at medium sizes.
      const sizeSample=((i*29)%facetCount+random())/facetCount;
      const rawSize=MIN_FACET_SIZE+(MAX_FACET_SIZE-MIN_FACET_SIZE)*Math.pow(sizeSample,2.1);
      const size=(peripheral?rawSize:MIN_FACET_SIZE+(rawSize-MIN_FACET_SIZE)*.6)*sizeFactor;
      const spriteSize=Math.max(4,Math.ceil(size/4)*4),spriteScale=size/spriteSize;
      const tint=i%7===0?2:(i%3===0?1:0),angle=(random()-.5)*Math.PI*2;
      return {u,v,size,spriteScale,angle,tint,phase:random()*Math.PI*2,depth:.3+random()*.45,
        opacity:peripheral?.48+random()*.30:.18+random()*.16,
        driftX:(random()-.5)*.6,driftY:(random()-.5)*.6,
        free:i%3===1,path:scrollPath(i%3===1,compact,.25),...freeFlow(),
        cool:facetSprite(spriteSize,tint,i%3===0,false),warm:facetSprite(spriteSize,tint,i%3===0,true),
        x:0,y:0,vx:0,vy:0};
    });
    canvas.dataset.actualMinSize=String(Math.round(Math.min(...facets.map(f=>f.size))*10)/10);
    canvas.dataset.actualMaxSize=String(Math.round(Math.max(...facets.map(f=>f.size))*10)/10);
    modalOpen=Boolean(document.querySelector('dialog[open]'));
    scrollTarget=Math.max(0,scrollY);
    if(!reduced.matches&&!manuallyPaused&&!document.hidden&&focused&&!modalOpen) updateDepth(0,true);
    clearPointer();
    draw(0, false);
  }

  function clearPointer() {
    pointer.active = false;
    pointer.vx = pointer.vy = 0;
    clearTrail();
  }

  function draw(dt, animated) {
    ctx.setTransform(pixelRatio,0,0,pixelRatio,0,0);
    ctx.clearRect(0, 0, width, height);
    updateScrollPaths();
    const wanderBlend=animated?1-Math.exp(-dt*.65):0;
    const responsive = animated && pointer.active && finePointer.matches;
    const radius = 200;
    for (const f of facets) {
      if(animated&&f.free) wander(f,dt,1.2,wanderBlend);
      const bx = wrap(f.u*width+(f.free?f.flowX:time*f.driftX)+(Math.sin(time*.14+f.phase)*18+Math.cos(time*.075+f.phase*1.7)*6)*f.depth+(f.path?.x||0),width,f.size+36);
      const by = wrap(f.v*height+(f.free?f.flowY:time*f.driftY)+(Math.cos(time*.115+f.phase)*24+Math.sin(time*.21+f.phase*.7)*5)*f.depth+(f.path?.y||0),height,f.size+36);
      const dx = bx - pointer.x, dy = by - pointer.y;
      const distance = responsive && dx*dx+dy*dy<radius*radius ? Math.hypot(dx,dy) : radius;
      const proximity = responsive ? Math.max(0, 1 - distance / radius) : 0;
      const displacement = proximity * 26 * f.depth;
      const tx = (distance > .1 ? dx / distance * displacement : 0) + pointer.vx*proximity*.012;
      const ty = (distance > .1 ? dy / distance * displacement : 0) + pointer.vy*proximity*.012;
      if (animated) integrate(f, tx, ty, dt);
      else f.x = f.y = f.vx = f.vy = 0;
      const screenX=bx+f.x,screenY=by+f.y,extent=f.cool.extent*f.spriteScale*.72;
      if(screenX+extent<0||screenX-extent>width||screenY+extent<0||screenY-extent>height) continue;
      const tilt = f.angle + Math.sin(time * .11 + f.phase) * .18 + f.x * .003;
      // A shallow changing aspect implies a turning plane without a full spin.
      const aspect=.82+Math.sin(time*.08+f.phase)*.12,cos=Math.cos(tilt)*pixelRatio,sin=Math.sin(tilt)*pixelRatio;
      // Compose the same HiDPI translation / rotation / scale in one canvas call.
      ctx.setTransform(cos*aspect,sin*aspect,-sin,cos,screenX*pixelRatio,screenY*pixelRatio);
      const size=f.cool.extent*f.spriteScale,alpha=Math.min(1,f.opacity+proximity*.16);
      if(paletteMix<.999){ctx.globalAlpha=(1-paletteMix)*alpha;ctx.drawImage(f.cool.bitmap,-size/2,-size/2,size,size);}
      if(paletteMix>.001){ctx.globalAlpha=paletteMix*alpha;ctx.drawImage(f.warm.bitmap,-size/2,-size/2,size,size);}
    }
    ctx.setTransform(pixelRatio,0,0,pixelRatio,0,0);
    ctx.globalAlpha=1;
  }

  // One draw per browser frame; elapsed time controls speed and particle lifetimes.
  function tick(now) {
    if (!running) return;
    frameId = requestAnimationFrame(tick);
    const elapsed=Math.max(0,(now-lastFrame)/1000);
    lastFrame = now;
    time += elapsed;
    updateDepth(Math.min(elapsed,1/30));
    const decay=Math.exp(-7*elapsed);
    pointer.vx*=decay;pointer.vy*=decay;
    drawTrail(now);
    draw(Math.min(elapsed,.1),true);
  }

  function updateMode() {
    if (frameId) cancelAnimationFrame(frameId);
    frameId = 0;
    const allowed = !reduced.matches && !manuallyPaused;
    running = allowed && !document.hidden && focused && !modalOpen;
    document.body.dataset.motion = allowed ? 'running' : 'paused';
    document.body.dataset.sceneMotion = running ? 'running' : 'paused';
    toggle.hidden = false;
    toggle.disabled = reduced.matches;
    toggle.setAttribute('aria-pressed', String(!allowed));
    toggle.setAttribute('aria-label', reduced.matches ? 'Background animation reduced by system preference' : (allowed ? 'Pause background animation' : 'Resume background animation'));
    toggle.querySelector('span').textContent = reduced.matches ? 'Motion reduced' : (allowed ? 'Motion on' : 'Motion off');
    toggle.title = reduced.matches ? 'Your system requests reduced motion.' : (allowed ? 'Pause ambient animation' : 'Resume ambient animation');
    clearPointer();
    if (running) { scrollTarget=Math.max(0,scrollY);updateDepth(0,true);lastFrame = performance.now(); frameId = requestAnimationFrame(tick); }
    else draw(0, false);
  }

  toggle.addEventListener('click', () => {
    if (reduced.matches) return;
    manuallyPaused = !manuallyPaused;
    try { localStorage.setItem(storageKey, String(manuallyPaused)); } catch { /* Optional preference. */ }
    updateMode();
  });
  window.addEventListener('pointermove', event => {
    if (!running || !finePointer.matches || event.pointerType === 'touch') return;
    // Keep input controls and long-form reading surfaces free from foreground shards.
    if (modalOpen || event.target.closest?.('a,button,input,textarea,select,[contenteditable],.reflection,.identity-grid,.criteria-list')) { clearPointer(); return; }
    const stamp = performance.now();
    if (!pointer.active) {
      trailAnchorX=event.clientX;trailAnchorY=event.clientY;trailCredit=1;
    }
    else {
      const seconds=Math.max(0,(stamp-pointer.stamp)/1000);
      pointer.vx = Math.max(-320,Math.min(320,(event.clientX-pointer.x)/Math.max(seconds,.008)));
      pointer.vy = Math.max(-320,Math.min(320,(event.clientY-pointer.y)/Math.max(seconds,.008)));
      emitTrail(event.clientX,event.clientY,seconds,stamp);
    }
    pointer.stamp = stamp;
    pointer.x = event.clientX;pointer.y = event.clientY;pointer.active = true;
  }, { passive:true });
  const blocksClickEffect=target=>target.closest?.('a,button,input,textarea,select,summary,video,audio,.media-player,[role="button"],[role="tab"],[contenteditable],[data-preview-target],.ad-preview,dialog');
  window.addEventListener('pointerdown',event=>{
    press=null;
    if(!running||!finePointer.matches||event.pointerType!=='mouse'||event.button!==0||!event.isPrimary||modalOpen||blocksClickEffect(event.target)) return;
    press={id:event.pointerId,x:event.clientX,y:event.clientY,target:event.target};
  },{passive:true});
  window.addEventListener('pointerup',event=>{
    const start=press;press=null;
    if(!start||!running||!finePointer.matches||event.pointerType!=='mouse'||event.button!==0||!event.isPrimary||modalOpen||blocksClickEffect(event.target)) return;
    if(event.pointerId!==start.id||event.target!==start.target||Math.hypot(event.clientX-start.x,event.clientY-start.y)>8) return;
    if(window.getSelection()?.toString()) return;
    emitClick(event.clientX,event.clientY,performance.now());
  },{passive:true});
  window.addEventListener('pointercancel', clearPointer);
  window.addEventListener('keydown', clearPointer);
  document.documentElement.addEventListener('pointerleave', clearPointer);
  window.addEventListener('scroll',()=>{scrollTarget=Math.max(0,scrollY);clearPointer();}, { passive:true });
  document.addEventListener('toggle', event => {
    if (event.target.matches?.('dialog')) { modalOpen=event.target.open; updateMode(); }
  }, true);
  window.addEventListener('resize',()=>{
    if(!resizeFrame) resizeFrame=requestAnimationFrame(()=>{resizeFrame=0;resize();});
  }, { passive:true });
  document.addEventListener('visibilitychange', updateMode);
  window.addEventListener('blur', () => { focused = false; updateMode(); });
  window.addEventListener('focus', () => { focused = true; updateMode(); });
  window.addEventListener('pagehide', () => { focused = false; updateMode(); });
  window.addEventListener('pageshow', () => { focused = document.hasFocus(); updateMode(); });
  reduced.addEventListener('change', updateMode);
  finePointer.addEventListener('change', updateMode);
  // One visibility observer gates both decorative CSS scenes independently.
  const sceneObserver=new IntersectionObserver(entries=>{
    for(const entry of entries) entry.target.dataset.inView=String(entry.isIntersecting);
  });
  for(const scene of [heroSculpture,document.querySelector('.site-header')]){
    if(scene){scene.dataset.inView='false';sceneObserver.observe(scene);}
  }
  if(typeof ResizeObserver==='function'){
    const contentObserver=new ResizeObserver(updateScrollMetrics);
    contentObserver.observe(document.body);contentObserver.observe(document.documentElement);
  }
  resize();
  updateMode();
})();
