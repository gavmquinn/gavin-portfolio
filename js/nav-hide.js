(function(){
  const nav = document.querySelector('nav');
  if(!nav) return;

  // Phones in portrait (existing 720px breakpoint) and landscape (wide but short)
  const mq = window.matchMedia('(max-width:720px), (max-height:500px)');
  const threshold = 6;
  let lastY = Math.max(0, window.scrollY);
  let ticking = false;

  function show(){ nav.classList.remove('nav-hidden'); }

  function update(){
    ticking = false;
    const y = Math.max(0, window.scrollY);

    if(!mq.matches || y <= nav.offsetHeight){
      show();
      lastY = y;
      return;
    }

    if(y - lastY > threshold){
      nav.classList.add('nav-hidden');
      lastY = y;
    } else if(lastY - y > threshold){
      show();
      lastY = y;
    }
  }

  window.addEventListener('scroll', () => {
    if(!ticking){
      ticking = true;
      requestAnimationFrame(update);
    }
  }, {passive:true});

  mq.addEventListener('change', show);
  nav.addEventListener('focusin', show);
})();
