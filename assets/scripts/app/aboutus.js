define(["jquery"], function () {
  var public = {
    initialise: function () {
      var $timeline = $("#about-us");
      var $contents = $timeline.find(".content");
      var onResizeHandler = function () {
        if (window.innerWidth < 575) {
          $timeline.find(".image").css("height", "");
        } else {
          var maxHeight = -1;

          $timeline.find(".image").css("height", "initial");
          //console.log ($content.length);
          for (i = 0; i < $contents.length; i++) {
            var $content = $contents.eq(i);
            if ($content.height() > maxHeight) {
              maxHeight = $content.height();
            }
          }
          //console.log(maxHeight);
          $timeline.find(".image").css("height", maxHeight);
        }
      };
      onResizeHandler();
      $(window).resize(function () {
        onResizeHandler();
      });
    },
  };
  return public;
});
