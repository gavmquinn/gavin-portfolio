(function(){
  const items = Array.from(document.querySelectorAll('.gallery-item'));
  if(!items.length) return;

  const captions = [
    "Mixing sound for 'The Memory Keeper' (2025)",
    "On set of 'Move In' (2024)",
    'On the set for the FOX World Series pregame special interviews. (2025)',
    'Placing a plant mic to capture every sound possible.',
    "Capturing clean dialogue for 'Thank you for coming'. (2026)",
    "Out in the bush capturing a scene for 'Most of the time we are just waiting' (2021)"
  ];

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const btnClose = document.getElementById('lightbox-close');
  const btnPrev = document.getElementById('lightbox-prev');
  const btnNext = document.getElementById('lightbox-next');

  let currentIndex = 0;

  function show(index){
    currentIndex = (index + items.length) % items.length;
    const img = items[currentIndex].querySelector('img');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = captions[currentIndex] || img.alt;
  }

  function open(index){
    show(index);
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close(){
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  items.forEach((item, index) => {
    item.addEventListener('click', () => open(index));
  });

  btnClose.addEventListener('click', close);
  btnPrev.addEventListener('click', () => show(currentIndex - 1));
  btnNext.addEventListener('click', () => show(currentIndex + 1));

  lightbox.addEventListener('click', (e) => {
    if(e.target === lightbox) close();
  });

  document.addEventListener('keydown', (e) => {
    if(!lightbox.classList.contains('active')) return;
    if(e.key === 'Escape') close();
    if(e.key === 'ArrowLeft') show(currentIndex - 1);
    if(e.key === 'ArrowRight') show(currentIndex + 1);
  });
})();
