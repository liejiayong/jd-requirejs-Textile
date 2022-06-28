define(['jquery'], function($){
	var public = {
		initialise: function(){
			$('a[href*="#"]:not([href="#"])').click(function() {
				if ((location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')) && (location.hostname == this.hostname)) {
		  			var target = $(this.hash);
		  			target = target.length ? target : $('#' + this.hash.slice(1));
		  			var click = this.hash.slice(1);
		  			if(typeof ga !== "undefined"){
			  			ga('send', {
							hitType: 'event',
							eventCategory: 'navigation-sc',
							eventAction: 'click',
							eventLabel: click
						});
					}
		  			if (target.length) {
		  				var top = target.offset().top;
		  				if(top != 0) {
		  					top -= 50;
		  				}
		    			$('html, body').animate({
		      				scrollTop: top + 2
		    			}, 1000);
		    			return false;
		  			}
		  			
				}

				
			});
		}
	};
	return public;
});