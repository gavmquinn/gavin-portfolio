document.addEventListener("DOMContentLoaded", function () {
  if (typeof CREDITS === "undefined") return;
  var count = CREDITS.length;

  var statEl = document.getElementById("productions-stat");
  if (statEl) {
    var tier = Math.floor((count - 1) / 5) * 5;
    statEl.textContent = tier + "+";
  }

  var seeAllEl = document.getElementById("see-all-link");
  if (seeAllEl) {
    seeAllEl.textContent = "See all " + count + " credits";
  }
});
