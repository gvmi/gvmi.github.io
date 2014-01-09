// remap jQuery to $
(function($){})(window.jQuery);


/* trigger when page is ready */
$(document).ready(function (){ 
   /*
      $(".teatime").simpletip({
         content: 'hello',
         showEffect: 'slide',
         hideEffect: 'fade',
         fixed: true,
         position: ["-68","0"]
      });
   */

  	$('.flexslider').flexslider({
    	animation: "slide",
    	slideshow: false
  	});

});


/* optional triggers

$(window).load(function() {
   
});

$(window).resize(function() {
   
});

*/