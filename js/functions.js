// remap jQuery to $
(function($){})(window.jQuery);


/* trigger when page is ready */
$(document).ready(function (){
   
      $(".twitter").simpletip({
         content: 'twitter',
         showEffect: 'slide',
         hideEffect: 'fade',
         fixed: true,
         position: ["0","58"]
      });   
      $(".instagram").simpletip({
         content: 'instagram',
         showEffect: 'slide',
         hideEffect: 'fade',
         fixed: true,
         position: ["0","58"]
      });   
      $(".github").simpletip({
         content: 'github',
         showEffect: 'slide',
         hideEffect: 'fade',
         fixed: true,
         position: ["0","58"]
      });
      
      $(".flickr").simpletip({
         content: 'flickr',
         showEffect: 'slide',
         hideEffect: 'fade',
         fixed: true,
         position: ["0","58"]
      });   

      $(".tumblr").simpletip({
         content: 'tumblr',
         showEffect: 'slide',
         hideEffect: 'fade',
         fixed: true,
         position: ["0","58"]
      });   
      $(".linkedin").simpletip({
         content: 'linkedin',
         showEffect: 'slide',
         hideEffect: 'fade',
         fixed: true,
         position: ["0","58"]
      }); 
      $(".facebook").simpletip({
         content: 'facebook',
         showEffect: 'slide',
         hideEffect: 'fade',
         fixed: true,
         position: ["0","58"]
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