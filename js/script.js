light = document.getElementById("light");

// follow mouse
document.addEventListener("mousemove", function (event) {
  x = event.clientX;
  y = event.clientY;
  light.style.left = x + "px";
  light.style.top = y + "px";
})

// initialize light
document.addEventListener("mouseenter", function (event) {
  light.style.width = 40 + "vh";
  light.style.height = 40 + "vh";
})

// remove light
document.addEventListener("mouseleave", function (event) {
  light.style.width = 0 + "vh";
  light.style.height = 0 + "vh";
})
