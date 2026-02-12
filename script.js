$(document).ready(function () {
  $("#book").turn({
    width: 2000,
    height: 600,
    autoCenter: true,
    gradients: true, //enable page fold gradients
    acceleration: true // smoother animations
  });

  // Delay 1s so user sees the cover
  setTimeout(function() {
    $("#book").turn("page", 2, 1000); // normal flip
  }, 2000);

});

