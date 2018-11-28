// Bilderaustausch entsprechend der Fensterbreite
function setPictureResponsive() {

    var screenwidth = $(window).width();
    var o = 'landscape';
    if (screenwidth>768){
        o = 'landscape';
    }
    else {o = 'portrait';}

    $('img.picture').each(function() {
        var $this = $(this);
        var img_src = $this.data(o);
        this.src = img_src;

    });
}

$(document).ready(function(){setPictureResponsive();});
$(window).resize(setPictureResponsive);

// Videoaustausch entsprechend der Fensterbreite
function setVideoResponsive() {

    var screenwidth = $(window).width();
    var o = 'landscape';
    if (screenwidth>768){
        o = 'landscape';
    }
    else {o = 'portrait';}

    $('video').each(function() {
        var $this = $(this);
        var video_src = $this.data(o);
        this.src = video_src;

    });
}

$(document).ready(function(){setVideoResponsive();});
$(window).resize(setVideoResponsive);
