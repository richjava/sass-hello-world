let intro = document.querySelector(".info__intro");
let device = document.querySelector(".info__device");
let title = document.querySelector(".peekaboo__title");

// Waypoints

var waypoint1 = new Waypoint({
  element: document.querySelector(".info"),
  handler: function(direction) {
    if (direction === "down") {
      intro.classList.add("fade-in-left");
      setTimeout(function() {
        device.classList.add("fade-in-up");
      }, 500);
    }
  }
});

new Waypoint({
  element: document.querySelector(".peekaboo"),
  handler: function(direction) {
    if (direction === "down") {
      title.classList.add("fadeInLeft")
      title.style.display = 'block'
    }
  }
});
