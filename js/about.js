
$(function(){
    
    if( $("#slider_about.owl-carousel").length ) {
        $("#slider_about.owl-carousel").owlCarousel({
               items: 1,
               loop:true,
               dots: true,
               nav:true,
               navText: [''],
               autoplay: true,
               autoWidth:false,
               autoplayTimeout:4500,
               smartSpeed:500,
               autoplayHoverPause:true,
               lazyLoad:true,
           });   
    }
    
    if( $("#slider_srtf.owl-carousel").length ) {
        $("#slider_srtf.owl-carousel").owlCarousel({
               items: 1,
               loop:true,
               dots: true,
               nav:true,
               navText: [''],
               autoplay: true,
               autoWidth:false,
               autoplayTimeout:4500,
               smartSpeed:500,
               autoplayHoverPause:true,
               lazyLoad:true,
           });   
    }
    
});

