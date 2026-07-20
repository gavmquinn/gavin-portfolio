var CATEGORY_ORDER = ["Movie", "TV Show", "Short Film", "Documentary", "Commercial", "Music Video", "Social"];

function creditMeta(c) {
  return c.company ? c.location + " | " + c.company : c.location;
}

var PLAY_ICON = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="5" width="22" height="14" rx="4" stroke="currentColor" stroke-width="1.6"/><path d="M10 9l6 3-6 3V9z" fill="currentColor"/></svg>';

function slateHTML(c) {
  var badges = "";
  if (c.imdb) {
    badges += '<a class="title-badge" href="https://www.imdb.com/title/' + c.imdb + '/" target="_blank" rel="noopener">IMDb</a>';
  }
  if (c.video) {
    badges += '<a class="title-badge" href="' + c.video + '" target="_blank" rel="noopener">' + PLAY_ICON + ' Watch Now</a>';
  }
  return (
    '<div class="slate" data-category="' + c.category + '">' +
      '<div class="slate-year">' +
        c.date +
        '<div class="slate-category">' + c.category + '</div>' +
      '</div>' +
      '<div>' +
        '<div class="slate-title-row">' +
          '<div class="slate-title">' + c.title + '</div>' +
          badges +
        '</div>' +
        '<div class="slate-meta">' + creditMeta(c) + '</div>' +
      '</div>' +
      '<div class="slate-tag">' + c.role + '</div>' +
    '</div>'
  );
}

document.addEventListener("DOMContentLoaded", function () {
  var container = document.getElementById("credits-list");
  if (!container) return;

  var years = [];
  CREDITS.forEach(function (c) {
    if (years.indexOf(c.year) === -1) years.push(c.year);
  });
  years.sort(function (a, b) { return b - a; });

  var html = "";
  years.forEach(function (year) {
    html += '<div class="year-block" data-year="' + year + '">';
    html += '<div class="year-heading">' + year + '</div>';
    CREDITS.filter(function (c) { return c.year === year; })
      .sort(function (a, b) { return b.month - a.month; })
      .forEach(function (c) {
        html += slateHTML(c);
      });
    html += '</div>';
  });
  container.innerHTML = html;

  var categories = CATEGORY_ORDER.filter(function (cat) {
    return CREDITS.some(function (c) { return c.category === cat; });
  });

  var filterBar = document.getElementById("filter-bar");
  var countEl = document.getElementById("credits-count");

  function setCount(n) {
    if (countEl) countEl.textContent = n + " production" + (n === 1 ? "" : "s");
  }

  function applyFilter(category) {
    var visible = 0;
    container.querySelectorAll(".year-block").forEach(function (block) {
      var blockVisible = 0;
      block.querySelectorAll(".slate").forEach(function (slate) {
        var match = category === "All" || slate.dataset.category === category;
        slate.style.display = match ? "" : "none";
        if (match) { blockVisible++; visible++; }
      });
      block.style.display = blockVisible > 0 ? "" : "none";
    });
    setCount(visible);
  }

  if (filterBar) {
    var buttonsHTML = '<button class="filter-btn active" data-filter="All">All</button>';
    categories.forEach(function (cat) {
      buttonsHTML += '<button class="filter-btn" data-filter="' + cat + '">' + cat + '</button>';
    });
    filterBar.innerHTML = buttonsHTML;

    filterBar.addEventListener("click", function (e) {
      var btn = e.target.closest(".filter-btn");
      if (!btn) return;
      filterBar.querySelectorAll(".filter-btn").forEach(function (b) {
        b.classList.toggle("active", b === btn);
      });
      applyFilter(btn.dataset.filter);
    });
  }

  setCount(CREDITS.length);
});
