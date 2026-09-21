/* Scroll colour is independent of decorative Canvas motion and its pause control. */
(() => {
  'use strict';
  const palette = document.getElementById('scroll-palette');
  const warm = palette?.querySelector('.palette-red');
  if (!warm) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const root = document.documentElement;
  // Most of the blend tracks distance directly, so the first and last page
  // sections visibly change colour; retain a little of the existing easing.
  const LINEAR_WEIGHT = .75;
  palette.dataset.blend = 'linear75-eased25';
  let frame = 0, range = 1, measureDirty = true, previous = -1;
  // Invert the X coordinate of the existing --ease-in-out cubic Bézier.
  // The table is built once; scroll updates interpolate between its samples.
  const xAt = t => 3*(1-t)*(1-t)*t*.77 + 3*(1-t)*t*t*.175 + t*t*t;
  const easing = Float32Array.from({length:257}, (_,i) => {
    if (i === 0 || i === 256) return i/256;
    let lo = 0, hi = 1;
    for (let j=0; j<18; j++) {
      const t = (lo+hi)/2;
      if (xAt(t) < i/256) lo=t; else hi=t;
    }
    const t = (lo+hi)/2;
    return t*t*(3-2*t);
  });
  function update() {
    frame = 0;
    if (document.hidden) return;
    // Read geometry before the compositor-only opacity write.
    if (measureDirty) {
      range=Math.max(1,root.scrollHeight-innerHeight);
      measureDirty=false;
    }
    const progress = Math.max(0,Math.min(1,scrollY/range));
    const position = progress*256;
    const index = Math.min(255,Math.floor(position));
    const eased = easing[index]+(easing[index+1]-easing[index])*(position-index);
    const mix = progress*LINEAR_WEIGHT + eased*(1-LINEAR_WEIGHT);
    if (Math.abs(mix-previous)<.0001) return;
    previous = mix;
    warm.style.opacity = mix.toFixed(4);
    palette.dataset.mix = mix.toFixed(4);
    palette.dataset.progress = progress.toFixed(4);
    document.dispatchEvent(new CustomEvent('a2:palette',{detail:{mix}}));
  }
  function schedule(measure=false) {
    measureDirty ||= measure;
    if (document.hidden) return;
    if (reduced.matches) { if (frame) cancelAnimationFrame(frame); frame=0; update(); }
    else if (!frame) frame=requestAnimationFrame(update);
  }
  addEventListener('scroll',()=>schedule(),{passive:true});
  addEventListener('resize',()=>schedule(true),{passive:true});
  addEventListener('pageshow',()=>schedule(true));
  document.addEventListener('toggle',()=>schedule(true),true);
  document.addEventListener('visibilitychange',()=>{
    if (document.hidden) { if (frame) cancelAnimationFrame(frame); frame=0; }
    else schedule(true);
  });
  reduced.addEventListener('change',()=>schedule());
  if ('ResizeObserver' in window) new ResizeObserver(()=>schedule(true)).observe(document.body);
  schedule(true);
})();
