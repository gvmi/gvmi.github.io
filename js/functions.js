// remap jQuery to $
(function($){})(window.jQuery);


/* trigger when page is ready */
$(document).ready(function (){
   
		$(".blog").simpletip({
   		content: 'blog',
   		showEffect: 'slide',
   		hideEffect: 'fade',
   		fixed: true,
   		position: 'bottom'
		});   
   
		$(".github").simpletip({
   		content: 'github',
   		showEffect: 'slide',
   		hideEffect: 'fade',
   		fixed: true,
   		position: 'bottom'
		});
		
		$(".contact").simpletip({
   		content: 'contact',
   		showEffect: 'slide',
   		hideEffect: 'fade',
   		fixed: true,
   		position: 'bottom'
		});	

   
		$(".home").simpletip({
   		content: 'home',
   		showEffect: 'slide',
   		hideEffect: 'fade',
   		fixed: true,
   		position: 'left'
		});

});


/* optional triggers

$(window).load(function() {
	
});

$(window).resize(function() {
	
});

*/