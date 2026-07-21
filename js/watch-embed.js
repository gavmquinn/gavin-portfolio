(function(){
  function getYouTubeId(href){
    var url;
    try{ url = new URL(href); }catch(e){ return null; }
    if(url.hostname === 'youtu.be'){
      return url.pathname.slice(1) || null;
    }
    if(url.hostname.indexOf('youtube.com') !== -1){
      return url.searchParams.get('v');
    }
    return null;
  }

  function isDesktop(){
    return window.matchMedia('(min-width: 721px)').matches;
  }

  function collapse(slate){
    var badge = slate.querySelector('.title-badge.active');
    if(badge){
      badge.classList.remove('active');
      badge.lastChild.textContent = ' Watch Now';
    }
    slate.classList.remove('slate-expanded');
    var panel = slate.nextElementSibling;
    if(panel && panel.classList.contains('slate-video')){
      panel.classList.remove('open');
      setTimeout(function(){
        if(panel.parentNode) panel.remove();
      }, 400);
    }
  }

  function collapseAll(){
    document.querySelectorAll('.slate.slate-expanded').forEach(collapse);
  }

  function expand(slate, badge, videoId){
    badge.classList.add('active');
    badge.lastChild.textContent = ' Hide Video';

    var panel = document.createElement('div');
    panel.className = 'slate-video';
    panel.innerHTML =
      '<div class="slate-video-inner">' +
        '<div class="slate-video-embed">' +
          '<iframe src="https://www.youtube-nocookie.com/embed/' + videoId + '?autoplay=1" ' +
          'title="YouTube video player" frameborder="0" ' +
          'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ' +
          'allowfullscreen></iframe>' +
        '</div>' +
      '</div>';
    slate.insertAdjacentElement('afterend', panel);
    slate.classList.add('slate-expanded');
    requestAnimationFrame(function(){
      requestAnimationFrame(function(){
        panel.classList.add('open');
      });
    });
  }

  document.addEventListener('click', function(e){
    if(e.target.closest('.filter-btn')){
      collapseAll();
      return;
    }

    var badge = e.target.closest('.title-badge');
    if(!badge) return;

    var videoId = getYouTubeId(badge.href);
    if(!videoId) return;

    if(!isDesktop()) return;

    e.preventDefault();

    var slate = badge.closest('.slate');
    if(!slate) return;

    var wasOpen = slate.classList.contains('slate-expanded');
    collapseAll();
    if(!wasOpen){
      expand(slate, badge, videoId);
    }
  });
})();
