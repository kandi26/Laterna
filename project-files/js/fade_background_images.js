function fadeImagesByScrolling() {

    /* Check the location of each desired element */
    $('.slide').each( function(i){
        var screenwidth = $(window).width();

        var image_nr = $(this).data('slide') + 1;
        if (screenwidth>768){
            var objectBottom = $(this).offset().top + $(this).outerHeight() + $(this).height() - 300;
        }
        if (screenwidth>1680){
            var objectBottom = $(this).offset().top + $(this).outerHeight() + $(this).height() - 100;
        }
        else {var objectBottom = $(this).offset().top + $(this).outerHeight() + 200;}


        var windowBottom = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it */
        if (objectBottom < windowBottom) {
          if ($('.main_picture' + image_nr).css('opacity')==0) {$('.main_picture' + image_nr).fadeTo(500,1);}
        } else {
          if ($('.main_picture' + image_nr).css('opacity')==1) {$('.main_picture' + image_nr).fadeTo(500,0);}
        }

    });
}

$(document).ready(function() {
    fadeImagesByScrolling();
    $(window).scroll( function(){
        fadeImagesByScrolling();
    });

});
