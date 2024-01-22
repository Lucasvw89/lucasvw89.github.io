light = document.getElementById("light");
button = document.querySelector(".menu_button");

// follow mouse
document.addEventListener("mousemove", function (event) {
  x = event.clientX;
  y = event.clientY;
  light.animate({
    left: x + "px",
    top: y + "px"
  }, { duration: 5000, fill: "forwards" })
})

// initialize light
document.addEventListener("mouseenter", function (event) {
  x = event.clientX;
  y = event.clientY;
  light.animate({
    left: x + "px",
    top: y + "px"
  }, { duration: 0, fill: "forwards"})
  light.animate({
    width: 40 + "vmax",
    height: 36 + "vmax"
  }, { duration: 500, fill: "forwards" })
})

// remove light
document.addEventListener("mouseleave", function (event) {
  light.animate({
    width: 0,
    height: 0,
  }, { duration: 500, fill: "forwards" })
})

button.addEventListener("mouseenter", function (event) {
  light.animate({
    width: 0,
    height: 0,
  }, { duration: 400, fill: "forwards" })
})

button.addEventListener("mouseleave", function (event) {
  light.animate({
    width: 40 + "vmax",
    height: 36 + "vmax",
  }, { duration: 400, fill: "forwards" })
})
