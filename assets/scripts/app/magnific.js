define(['jquery', 'magnific'], function($) {
    var public = {
        initialise: function() {
            if (typeof window.hidePopup === "undefined") {
                window.hidePopup = function() {
                    $.magnificPopup.close();
                }
            }

            if (typeof window.showPopup === "undefined") {
                window.showPopup = function(id, callbacks) {
                    //for the callback available, please visit http://dimsemenov.com/plugins/magnific-popup/documentation.html for details
                    callbacks = callbacks || {};
                    $.magnificPopup.open({
                        items: {
                            src: id
                        },
                        type: 'inline',
                        removalDelay: 300,
                        mainClass: 'mfp-fade',
                        showCloseBtn: false,
                        fixedContentPos: true,
                        callbacks: callbacks,
                        closeOnBgClick: $(id).data("lock") != true
                    }, 0);
                }
            }

            var $mobilemenu = $("#mobilemenu");
            var $mobileheader = $("#mobileheader");
            var $logo = $mobileheader.find(".logo");
            var $hamburger = $mobileheader.find(".hamburger");
            var afterCloseHandler = function(){
            	$mobilemenu.data("isShown", false);
        		$hamburger.removeClass("selected");
            }
            $logo.find("a").click(function(){
                hidePopup();
            });
            $mobilemenu.find("a").click(function(){
            	hidePopup();
            });
            $hamburger.click(function()
            {
            	if($mobilemenu.data("isShown") != true)
            	{
	            	$mobilemenu.data("isShown", true);
	            	$hamburger.addClass("selected");
	            	showPopup("#mobilemenu", {
	            		afterClose: function(){
	            			afterCloseHandler();
	            		}
	            	});
            	}
            	else
            	{
	            	// afterCloseHandler();
            		hidePopup();
            	}
            });

        }
    };
    return public;
});