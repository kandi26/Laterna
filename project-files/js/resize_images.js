// Funktion Resize Images
function resizeImages () {

	var div = $('.mainpicture');
	var divHeight = div.height();
	var divWidth = div.width();
	var ratio = 1.7;

	var img_width = divWidth;
	var img_height = divWidth/ratio;
	var img_margin = 0;

	// IMG-Höhe mit DIV-Höhe vergleichen
	if (img_height < divHeight) {
		img_height = divHeight;
		img_width = divHeight*ratio;
		margin = (img_width - divWidth)/2;
	}

	// Werte setzen
	$('.mainpicture img').each(function() {
        $(this).css("height", img_height);
        $(this).css("width", img_width);
        $(this).css('margin-left', '-' + img_margin + 'px')

    });
}

// Ausführen
$(document).ready(function(){
	$(window).resize(function(){resizeImages();});
	resizeImages();
});
