$(function(){

    
   if( $(".owl-carousel").length ) {
        $(".owl-carousel").owlCarousel({
        items: 1,
//        animateOut: 'slideOutDown',
//        animateIn: 'flipInX',
        animateOut: 'fadeOut',
        animateIn: 'zoomIn',
        loop:true,
        dots: true,
        nav:true,
        navText: [''],
        autoplay: true,
        autoWidth:false,
        autoplayTimeout:4500,
        smartSpeed:500,
        autoplayHoverPause:true,
        lazyLoad:true
        });
    }
    
      
    $('.mail-form').submit(function(){
          var form   = $(this);
            //console.log($(form));
          var msg   = $(form).serialize();
            $.ajax({
              type: 'POST',
              url: 'http://panoramacomp.ru/services/post.php',
              data: msg,
              success: function(data) {
                $(form).find(".result").html(data);
                $(form).find('button[type="submit"]').hide();
              },
              error:  function(xhr, str){
            console.log('Возникла ошибка: ' + xhr.responseCode);
              }
            });
    });

});


$( window ).on( "load", function() {
    var hTop = $("#top-in-nav").height();
    
    var hScroll = $(this).scrollTop();
    var hMenu = $("#slick-menu").height();
    
        
    if (hScroll >= hTop) {
            $('#slick-menu').addClass('navbar-fixed-top');
            $("main").css("margin-top", hMenu );
            $(".navbar-brand.logotipe").css("visibility","visible");
    }
        
    $(window).scroll(function() {
        hScroll = $(this).scrollTop();
        hMenu = $("#slick-menu").height();
        
        if (hScroll >= hTop) {
            $('#slick-menu').addClass('navbar-fixed-top');
            $("main").css("margin-top", hMenu );
            $(".navbar-brand.logotipe").css("visibility","visible");
        }
        else {
            $('#slick-menu').removeClass('navbar-fixed-top');
            $("main").css("margin-top", 0 );
            $(".navbar-brand.logotipe").css("visibility","hidden");
        }
        
        $('.anim').each(function(){
            if ($(this).offset().top < ($(window).scrollTop() + $(window).height()) ) {
            $(this).addClass('animated bounceInUp');
            }
        });
    });
    
    $(window).scroll(function() {
        $('.animated').each(function(){
          if ($(this).offset().top < $(window).scrollTop()+500 ) {
            $(this).addClass('fadeInRight');
          }
        });
    });
    

});
