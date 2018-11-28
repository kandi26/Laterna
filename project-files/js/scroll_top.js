// Scroll Top
$(window).scroll(function(){
    if ($(this).scrollTop() > 140) {
        $('.scrollicon').fadeIn();
    } else {
        $('.scrollicon').fadeOut();
    }
});
