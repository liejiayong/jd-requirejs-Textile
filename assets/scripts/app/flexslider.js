define(['jquery','flexslider'], function($){
	var public = {
		initialise: function(){
			$('.flexslider').flexslider({
				animation: "slide",
				directionNav: false,
				slideshowSpeed: 5000
			});

			var $timeline = $("#hero");

			$(window).resize(function(){
				onResizeHandler();
			});

			var onResizeHandler = function(){
				$timeline.find(".banner").css({
					"height": window.innerHeight,
					"min-height": "550px"
				});

				$timeline.find(".banner__image").css({
					"height": window.innerHeight,
					"min-height": "550px"
				});
			};
			
			onResizeHandler();
		}
	};
	return public;
});