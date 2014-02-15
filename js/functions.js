// remap jQuery to $
(function($){})(window.jQuery);


/* trigger when page is ready */
$(document).ready(function (){ 
   
      $("").simpletip({
         content: 'UI/UX DESIGNER',
         showEffect: 'fade',
         hideEffect: 'fade',
         showTime: 1200,
         hideTime: 1200,
         fixed: true,
         position: ["-100","0"]
      });

});