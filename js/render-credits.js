function creditMeta(c) {
  var loc = c.company ? c.location + " | " + c.company : c.location;
  return c.type ? c.type + " — " + loc : loc;
}

function slateHTML(c) {
  var imdb = c.imdb
    ? '<a class="imdb-link" href="https://www.imdb.com/title/' + c.imdb + '/" target="_blank" rel="noopener">IMDb</a>'
    : "";
  return (
    '<div class="slate">' +
      '<div class="slate-year">' + c.date + '</div>' +
      '<div>' +
        '<div class="slate-title">' + c.title + '</div>' +
        '<div class="slate-meta">' + creditMeta(c) + '</div>' +
      '</div>' +
      '<div class="slate-side">' +
        '<div class="slate-tag">' + c.role + '</div>' +
        imdb +
      '</div>' +
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
    CREDITS.filter(function (c) { return c.year === year; }).forEach(function (c) {
      html += slateHTML(c);
    });
  });
  container.innerHTML = html;

  var countEl = document.getElementById("credits-count");
  if (countEl) countEl.textContent = CREDITS.length + " productions";
});
