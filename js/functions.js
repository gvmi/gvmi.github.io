// remap jQuery to $
(function($){})(window.jQuery);


/* trigger when page is ready */
$(document).ready(function (){ 

	$(window).resize(function(){

	    $('.wrapper').css({
	        position:'absolute',
	        left: ($(window).width() - $('.wrapper').outerWidth())/2,
	        top: ($(window).height() - $('.wrapper').outerHeight())/2
	    });

	});

	$(window).resize();

});