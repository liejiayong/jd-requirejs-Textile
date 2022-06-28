define(['jquery'],function(){
	var public = {
		initialise: function() {
			if(typeof ga !== "undefined"){
				$('.career').click(function() {
					ga('send', {
						hitType: 'event',
						eventCategory: 'contact-us-sc',
						eventAction: 'click',
						eventLabel: 'career-email-sc'
					});
				});

				$('.connect').click(function() {
					ga('send', {
						hitType: 'event',
						eventCategory: 'contact-us-sc',
						eventAction: 'click',
						eventLabel: 'connect-email-sc'
					});
				});
			}

		}
	};
	return public;
});