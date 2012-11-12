// remap jQuery to $
(function($){})(window.jQuery);


/* trigger when page is ready */
$(document).ready(function (){
   
      var arrayData = ['blog', 'github', 'contact'];

		$(".boxes").each(function(i){
   		$(this).simpletip({    
   		showEffect: 'slide',
   		hideEffect: 'fade',
   		fixed: true,
   		position: ["0", "0"],
   		content: arrayData[i] });
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