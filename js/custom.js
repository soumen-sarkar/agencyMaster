// JavaScript Document


   $(document).ready(function(){
       var a = false;
       $("#menu").click(function(){
           if(a == false){
            $(".left_side_bar").addClass("show");
               a = true;
           }
           else{
               $(".left_side_bar").removeClass("show");
               a = false;
           }
           
       });
   });


$(window).scroll(function(){
  var sticky = $('.header_main'),
      scroll = $(window).scrollTop();

  if (scroll >= 20) {
      sticky.addClass('fixed');
  }
    
  else {
      sticky.removeClass('fixed');
  }
});


