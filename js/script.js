light = document.getElementById("light");

// follow mouse
document.addEventListener("mousemove", function (event) {
  x = event.clientX;
  y = event.clientY;
  light.animate({
    left: x + "px",
    top: y + "px"
  }, { duration: 3000, fill: "forwards" })
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
    width: 50 + "vh",
    height: 40 + "vh"
  }, { duration: 500, fill: "forwards" })
})

// remove light
document.addEventListener("mouseleave", function (event) {
  light.animate({
    width: 0 + "vh",
    height: 0 + "vh",
  }, { duration: 500, fill: "forwards" })
})
