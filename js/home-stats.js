document.addEventListener("DOMContentLoaded", function () {
  var el = document.getElementById("productions-stat");
  if (!el || typeof CREDITS === "undefined") return;

  var count = CREDITS.length;
  var tier = Math.floor((count - 1) / 5) * 5;
  el.textContent = tier + "+";
});
