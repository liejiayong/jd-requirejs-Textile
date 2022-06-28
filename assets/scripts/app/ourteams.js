define(['jquery'],function(){
	var public = {
		initialise: function() {

			var $timeline = $("#our-teams");
			var $contents = $timeline.find(".content");
			var onResizeHandler = function(){
				if (window.innerWidth < 769) {
					$timeline.find(".brand_block").css({
						"height": "",
						"min-height": ""
					});
				} else {
					var maxHeight = -1;
					
					$timeline.find(".brand_block").css("height", "initial");
					//console.log ($content.length);
					for (i=0; i<$contents.length; i++) {
						var $content = $contents.eq(i);
						if ($content.height() > maxHeight) {
							maxHeight = $content.height();
						}
					}
					//console.log(maxHeight);
					$timeline.find(".brand_block").css({
						"height": maxHeight,
						"min-height": "325px"
					});
				}
			};
			onResizeHandler();
			$(window).resize(function(){
				onResizeHandler();
				
			});

		}
	};
	return public;
});