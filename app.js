'use strict';
const projects = window.portfolioProjects;
const tabs = [...document.querySelectorAll('[data-project]')];
const safe = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let currentProject = null;
const player = document.getElementById('project-video');
function evidenceImage(p, file, alt, title, caption, fullFile) {
  return `<img src="${p.base}${file}" alt="${safe(alt)}" loading="lazy" decoding="async" data-preview-title="${safe(p.title+' · '+title)}" data-preview-caption="${safe(caption)}"${fullFile ? ` data-preview-src="${p.base}${fullFile}"` : ''}>`;
}
function processMarkup(p) {
  const overview = p.workflowPrefix;
  const sections = p.workflowSections || [['inputs','Inputs & models'],['sampling','Sampling & refinement'],['export',p.hasApi?'Audio & export':'Decode & export']];
  return `<div class="process-grid evidence-grid">
    <figure class="workflow-slot">
      <div class="slot-heading"><span>PRODUCTION WORKFLOW</span><span class="slot-code">ENGLISH NODES</span></div>
      <div class="workflow-image">${evidenceImage(p,overview+'.webp',p.title+' saved production workflow overview','Workflow overview','Offline rendering / Click for full resolution',overview+'.png')}</div>
      <figcaption><strong>${safe(p.workflowTitle || 'The saved generation graph')}</strong><span>${safe(p.workflowNote)}</span></figcaption>
      <div class="workflow-sections">${sections.map(([id,label])=>`<figure>${evidenceImage(p,'workflow-'+id+'.webp',p.title+' workflow: '+label,label,'Offline workflow detail / Full resolution','workflow-'+id+'.png')}<figcaption>${label}</figcaption></figure>`).join('')}</div>
      <p class="slot-footnote">Select an image to read the nodes at full resolution.</p>
    </figure>
    <div class="storyboard-slots evidence-frames${p.characterStudy?' character-frames':''}">${p.frames.map((f,i)=>`<figure class="shot-slot">${evidenceImage(p,f.file,f.description,f.title,'Actual video frame / '+f.time)}<figcaption><span class="frame-time">FRAME ${i?'B':'A'} / ${f.time}</span><strong>${safe(f.title)}</strong><p>${safe(f.description)}</p></figcaption></figure>`).join('')}</div>
  </div>
  <div class="production-summary"><div><p class="section-kicker">THE BRIEF</p><p>${safe(p.brief)}</p></div><dl class="production-specs">${p.specs.map(([label,value])=>`<div><dt>${safe(label)}</dt><dd>${safe(value)}</dd></div>`).join('')}</dl></div>
  ${p.selectionNote?`<div class="selection-note"><h3>Why I kept V2</h3><p>${safe(p.selectionNote)}</p></div>`:''}
  ${p.artwork?`<div class="artwork-credit"><h3>Source reference</h3><div class="credit-links">${p.artwork.sources.map(([label,url])=>`<a href="${safe(url)}">${safe(label)} ↗</a>`).join('')}</div></div>`:''}
  <details class="record-details"><summary><span>Read the production and selection record</span><span class="detail-sign" aria-hidden="true">+</span></summary><div class="record-body">${p.record.map(t=>`<p>${safe(t)}</p>`).join('')}<div class="evidence-downloads"><a href="${p.base}ui.json" download>Download workflow</a>${p.hasApi?`<a href="${p.base}api.json" download>API workflow</a>`:''}<a href="assets/projects/source-notes.md" target="_blank" rel="noopener">Media credits & provenance ↗</a></div></div></details>
  <details class="record-details prompt-details"><summary><span>Read the original English prompt</span><span class="detail-sign" aria-hidden="true">+</span></summary><div class="record-body"><p class="small-note">The saved generation prompt, reproduced without rewriting. It describes the intended result.</p><pre class="prompt-copy">${safe(p.prompt)}</pre><a class="text-link" href="${p.base}prompt.txt" download>Download prompt ↓</a></div></details>`;
}
function selectProject(key, focus=false) {
  const p=projects[key];
  if (!p) return;
  tabs.forEach(tab=>{const active=tab.dataset.project===key;tab.classList.toggle('active',active);tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1;if(active&&focus)tab.focus();});
  if (currentProject===key) return;
  currentProject=key;
  player.pause();
  // Reserve this film's ratio before its poster and video metadata load.
  player.width=p.width;
  player.height=p.height;
  player.poster=p.base+'poster.webp';
  player.src=p.base+'video.mp4';
  player.setAttribute('aria-label',p.title+' video');
  player.load();
  document.getElementById('project-panel').setAttribute('aria-labelledby',`tab-${key}`);
  document.getElementById('project-media').dataset.theme=key;
  document.getElementById('project-media').setAttribute('aria-label',p.title+' video player');
  const fields={'frame-label':`STUDY ${p.number} / ${p.title.toUpperCase()}`,'frame-number':p.number,'media-duration':p.duration,'project-status':p.status,'project-title':p.title,'project-summary':p.summary,'process-project':p.title,'project-contribution':p.contribution,'playback-note':p.playback,'frame-status':p.badge};
  Object.entries(fields).forEach(([id,text])=>document.getElementById(id).textContent=text);
  document.getElementById('download-video').href=p.base+p.original;
  document.getElementById('process-content').innerHTML=processMarkup(p);
  document.getElementById('video-error').hidden=true;
}
tabs.forEach((tab,i)=>{
  tab.addEventListener('click',()=>selectProject(tab.dataset.project));
  tab.addEventListener('keydown',event=>{
    let index;
    if(event.key==='ArrowDown'||event.key==='ArrowRight')index=(i+1)%tabs.length;
    if(event.key==='ArrowUp'||event.key==='ArrowLeft')index=(i-1+tabs.length)%tabs.length;
    if(event.key==='Home')index=0;
    if(event.key==='End')index=tabs.length-1;
    if(index!==undefined){event.preventDefault();selectProject(tabs[index].dataset.project,true);}
  });
});
player.addEventListener('error',()=>{document.getElementById('video-error').hidden=false;});
document.addEventListener('visibilitychange',()=>{if(document.hidden)player.pause();});
selectProject('tide');

// Content images open this shared viewer automatically, including later additions.
// data-no-preview on an image or ancestor opts out; data-preview-src supplies a full-size file.
// Optional metadata: data-preview-title, data-preview-caption, data-preview-source,
// data-preview-source-label. A button can use data-preview-target="image-element-id".
(() => {
  const dialog = document.getElementById('image-dialog');
  const preview = document.getElementById('preview-image');
  const stage = document.getElementById('image-preview-stage');
  const title = document.getElementById('image-dialog-title');
  const caption = document.getElementById('image-dialog-caption');
  const sourceLine = document.getElementById('image-preview-source');
  const sourceLink = document.getElementById('image-source-link');
  const original = document.getElementById('image-original');
  const status = document.getElementById('image-preview-status');
  const closeButton = document.getElementById('close-image');
  const scaleButtons = [...dialog.querySelectorAll('[data-image-scale]')];
  const managedImages = new WeakMap();
  let returnFocus = null;
  let backdropPress = false;

  function isPreviewable(image) {
    return image instanceof HTMLImageElement && Boolean(image.closest('main')) &&
      !image.closest('dialog,[data-no-preview],[aria-hidden="true"]') &&
      image.getAttribute('alt') !== '' && !['presentation', 'none'].includes(image.getAttribute('role'));
  }

  function prepareImage(image) {
    if (!(image instanceof HTMLImageElement)) return;
    if (!isPreviewable(image)) {
      const previous = managedImages.get(image);
      if (previous) {
        for (const [name, value] of Object.entries(previous)) {
          if (value === null) image.removeAttribute(name); else image.setAttribute(name, value);
        }
        image.classList.remove('previewable-image');
        managedImages.delete(image);
      }
      return;
    }
    // An existing wrapping control already provides keyboard access.
    if (image.closest('a,button')) return;
    if (!managedImages.has(image)) {
      const previous = {};
      for (const name of ['tabindex', 'role', 'aria-haspopup', 'aria-controls', 'aria-label']) previous[name] = image.getAttribute(name);
      managedImages.set(image, previous);
      image.classList.add('previewable-image');
      image.tabIndex = 0;
      image.setAttribute('role', 'button');
      image.setAttribute('aria-haspopup', 'dialog');
      image.setAttribute('aria-controls', 'image-dialog');
    }
    const label = `Preview image: ${image.dataset.previewTitle || image.alt || 'Portfolio image'}`;
    if (image.getAttribute('aria-label') !== label) image.setAttribute('aria-label', label);
  }

  function prepareWithin(node) {
    if (!(node instanceof Element)) return;
    prepareImage(node);
    node.querySelectorAll('img').forEach(prepareImage);
  }

  function setScale(scale, preservePosition = false) {
    const x = (stage.scrollLeft + stage.clientWidth / 2) / Math.max(1, stage.scrollWidth);
    const y = (stage.scrollTop + stage.clientHeight / 2) / Math.max(1, stage.scrollHeight);
    stage.dataset.scale = scale;
    preview.style.width = scale === 'actual' && preview.naturalWidth ? `${preview.naturalWidth}px` : '';
    scaleButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.imageScale === scale)));
    if (preservePosition) {
      stage.scrollLeft = x * stage.scrollWidth - stage.clientWidth / 2;
      stage.scrollTop = y * stage.scrollHeight - stage.clientHeight / 2;
    } else stage.scrollTo(0, 0);
  }

  function openImage(image, trigger) {
    if (!isPreviewable(image)) return;
    const src = image.dataset.previewSrc || image.currentSrc || image.getAttribute('src');
    if (!src) return;
    returnFocus = trigger;
    title.textContent = image.dataset.previewTitle || image.alt || 'Image preview';
    caption.textContent = image.dataset.previewCaption || 'Image preview';
    preview.alt = image.alt || image.dataset.previewTitle || 'Portfolio image';
    preview.hidden = false;
    status.hidden = true;
    status.textContent = '';
    original.href = src;
    const source = image.dataset.previewSource;
    sourceLine.hidden = !source;
    if (source) {
      sourceLink.href = source;
      sourceLink.textContent = image.dataset.previewSourceLabel || 'Original source';
    } else sourceLink.removeAttribute('href');
    preview.src = src;
    setScale('fit');
    if (!dialog.open) dialog.showModal();
    stage.scrollTo(0, 0);
    closeButton.focus({preventScroll: true});
  }

  function imageForTarget(target) {
    if (!(target instanceof Element)) return null;
    const control = target.closest('[data-preview-target]');
    if (control) return {image: document.getElementById(control.dataset.previewTarget), trigger: control};
    const image = target.closest('img') || target.closest('a,button')?.querySelector('img');
    return image ? {image, trigger: image.closest('a,button') || image} : null;
  }

  document.addEventListener('click', event => {
    if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const target = imageForTarget(event.target);
    if (target && isPreviewable(target.image)) {
      event.preventDefault();
      openImage(target.image, target.trigger);
    }
  });
  document.addEventListener('keydown', event => {
    if (event.defaultPrevented || !['Enter', ' '].includes(event.key) || !isPreviewable(event.target)) return;
    event.preventDefault();
    openImage(event.target, event.target);
  });
  closeButton.addEventListener('click', () => dialog.close());
  scaleButtons.forEach(button => button.addEventListener('click', () => setScale(button.dataset.imageScale, true)));
  preview.addEventListener('load', () => {
    status.hidden = true;
    if (stage.dataset.scale === 'actual') setScale('actual');
  });
  preview.addEventListener('error', () => {
    status.textContent = 'This image could not be loaded. Try opening the original file.';
    status.hidden = false;
    preview.hidden = true;
  });
  // Only a press and release on the backdrop closes it; dragging a large image does not.
  function outsideDialog(event) {
    const rect = dialog.getBoundingClientRect();
    return event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom);
  }
  dialog.addEventListener('pointerdown', event => { backdropPress = event.button === 0 && outsideDialog(event); });
  dialog.addEventListener('click', event => {
    if (backdropPress && outsideDialog(event)) dialog.close();
    backdropPress = false;
  });
  dialog.addEventListener('close', () => {
    if (returnFocus?.isConnected) returnFocus.focus({preventScroll: true});
    returnFocus = null;
    backdropPress = false;
  });

  prepareWithin(document.querySelector('main'));
  new MutationObserver(records => {
    for (const record of records) {
      if (record.type === 'childList') record.addedNodes.forEach(prepareWithin);
      else prepareWithin(record.target);
    }
  }).observe(document.querySelector('main'), {
    subtree: true, childList: true, attributes: true,
    attributeFilter: ['alt', 'data-no-preview', 'aria-hidden', 'data-preview-title']
  });
})();
