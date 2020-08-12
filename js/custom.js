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

    $(".menus li").click(function () {
        $('.menus li').removeClass('active')
        $(this).addClass('active')
    });

    function reportSize() {
        var browserWidth = $( window ).outerWidth();
        var browserHeight = $( window ).outerHeight();
        var headerHeight = $('#header').outerHeight();
        var footerHeight = $('#footer').outerHeight();
        var buttonFooterHeight = $('#bottomFooter').outerHeight();
        var clientEntryHeader = $('#clientEntryHeader').outerHeight();

        var contactTable = $('.tableContent').outerHeight();
        var contactFormHeader = $('.contact_information_head').outerHeight();
        // console.log('On load', browserWidth, browserHeight, headerHeight, footerHeight, buttonFooterHeight, clientEntryHeader);
        var clientEntryScrollHeight = browserHeight - headerHeight - footerHeight - buttonFooterHeight - clientEntryHeader - 25;
        var contactEntryScrollHeight = browserHeight - headerHeight - footerHeight - buttonFooterHeight - contactTable - contactFormHeader - 70;
        var leftSideBarHeight = browserHeight - headerHeight - footerHeight - 25;
        var contactTableBodyHeight = Math.round((browserHeight - headerHeight - footerHeight - buttonFooterHeight - 60) / 2) ;
                    
        if(browserWidth >= 768){
            $(".clientEntryScroll").css("height", clientEntryScrollHeight);
            $(".contactEntryScroll").css("height", contactEntryScrollHeight);
            $(".contact_table tbody").css("height", contactTableBodyHeight);
        }else {
            $(".clientEntryScroll").css("height", 'auto');
            $(".contactEntryScroll").css("height", 'auto');
            $(".contact_table tbody").css("height", 'auto');
        }

        if(browserHeight <= 768){
            $(".left_side_bar").css("height", leftSideBarHeight);
        }else {
            $(".left_side_bar").css("height", 'auto');
        }
    }
    reportSize()
    // $(window).resize(function(){
    //     reportSize()
    // });
    $(window).resize(function() {
        if(screen.width == window.innerWidth || screen.width > window.innerWidth || screen.width < window.innerWidth){
            reportSize()
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


