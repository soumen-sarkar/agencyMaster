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

    // $(".menus li").click(function () {
    //     $('.menus li > ul').not($(this).children("ul").toggle()).hide();
        
    // });

    $(".menus li").click(function () {
        $('.menus li').removeClass('active')
        $(this).addClass('active')
    });

       function reportSize() {
            var browserHeight = $( window ).outerHeight();
            var headerHeight = $('#header').outerHeight();
            var footerHeight = $('#footer').outerHeight();
            var buttonFooterHeight = $('#bottomFooter').outerHeight();
            var clientEntryHeader = $('#clientEntryHeader').outerHeight();

            var contactTable = $('.tableContent').outerHeight();
            var contactFormHeader = $('.contact_information_head').outerHeight();
            // console.log('On load', browserHeight, headerHeight, footerHeight, buttonFooterHeight, clientEntryHeader);
            var clientEntryScrollHeight = browserHeight - headerHeight - footerHeight - buttonFooterHeight - clientEntryHeader - 25;
            var contactEntryScrollHeight = browserHeight - headerHeight - footerHeight - buttonFooterHeight - contactTable - contactFormHeader - 70;
            $(".clientEntryScroll").css("height", clientEntryScrollHeight);
            $(".contactEntryScroll").css("height", contactEntryScrollHeight);
            
        }
        reportSize()
        $(window).resize(function(){
            reportSize()
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


