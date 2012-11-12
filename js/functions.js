// remap jQuery to $
(function($){})(window.jQuery);


/* trigger when page is ready */
$(document).ready(function (){
   
		$(".blogico").simpletip({
   		content: 'blog',
   		showEffect: 'slide',
   		hideEffect: 'fade',
   		fixed: true,
   		position: ["0","0"]
		});   
   
		$(".github").simpletip({
   		content: 'github',
   		showEffect: 'slide',
   		hideEffect: 'fade',
   		fixed: true,
   		position: ["0","0"]
		});
		
		$(".contact").simpletip({
   		content: 'contact',
   		showEffect: 'slide',
   		hideEffect: 'fade',
   		fixed: true,
   		position: ["0","0"]
		});	

   
		$(".home").simpletip({
   		content: 'home',
   		showEffect: 'slide',
   		hideEffect: 'fade',
   		fixed: true,
   		position: ["-65","0"]
		});

});


/* optional triggers

$(window).load(function() {
	
});

$(window).resize(function() {
	
});

*/