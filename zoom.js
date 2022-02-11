$(document).ready(function () {
  var zoom = 1;
  $(".zoomIn").click(function () {
    if (zoom < 10) {
      zoom += 0.5;
      $("#bagImageZoom").css("transform", "scale(" + zoom + ")");
    }
  });


  $(".zoomOut").click(function () {
    if (zoom > 1) {
      zoom -= 0.5;
      $("#bagImageZoom").css("transform", "scale(" + zoom + ")");
    }
  });
});
