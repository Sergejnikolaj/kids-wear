$(document).ready(function(){
					
	$('.materials, .categories').click(function(){
		$(this).next().toggle();
		$(this).toggleClass('opened');
	});
					
	$(".m_wrapper").mCustomScrollbar();
					
	$('select').styler();
					
	$('.single-slide').slick({
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 768,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						dots: true
					}
			},
			{
				breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
			}
		]
	});
					
});
				