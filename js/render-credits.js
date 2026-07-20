function creditMeta(c) {
  var loc = c.company ? c.location + " | " + c.company : c.location;
  return c.type ? c.type + " — " + loc : loc;
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
    '<div class="slate">' +
      '<div class="slate-year">' + c.date + '</div>' +
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
    html += '<div class="year-heading">' + year + '</div>';
    CREDITS.filter(function (c) { return c.year === year; })
      .sort(function (a, b) { return b.month - a.month; })
      .forEach(function (c) {
        html += slateHTML(c);
      });
  });
  container.innerHTML = html;

  var countEl = document.getElementById("credits-count");
  if (countEl) countEl.textContent = CREDITS.length + " productions";
});
