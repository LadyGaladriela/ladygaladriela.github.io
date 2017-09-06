var current = 1;

function slide1() {
  $("#wallpaper1").fadeIn();
  $("#wallpaper2").fadeOut();
  current = 2;
}

function slide2() {
  $("#wallpaper1").fadeOut();
  $("#wallpaper2").fadeIn();
  current = 1;
}

setInterval(function() {
  if (current === 1) {
    slide1();
  } else {
    slide2();
  }
}, 3000);
