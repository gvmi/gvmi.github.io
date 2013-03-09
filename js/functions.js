// remap jQuery to $
(function($){})(window.jQuery);


/* trigger when page is ready */
$(document).ready(function (){
   
      $(".info").simpletip({
         content: 'info',
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
      
      $(".flickr").simpletip({
         content: 'flickr',
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
         position: ["-68","0"]
      });

});


/* optional triggers

$(window).load(function() {
   
});

$(window).resize(function() {
   
});

*/