$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

$(window).load(function() {
	new WOW().init();
	var chechMenuButton = 0;
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

	$(".button-menu").on("click", function(event){
		if(chechMenuButton == 0){
			$(".header-menu").css({'display':'flex'});
			chechMenuButton = 1;
		}else{
			$(".header-menu").css({'display':'none'});
			chechMenuButton = 0;
		}
	});
	$(".slider-2").slick({
		dots: true,
		infinite: true,
		variableWidth: true,
		autoplay: true,
		autoplaySpeed: 3000
	});
	//---------//
});
