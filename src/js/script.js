$( document ).ready(function() {
    $('.news__a1').on('click', function(e) {
        e.preventDefault();
    })
    
    $('.navigation__menu').on('click', function() {
        $('.menu').fadeIn();
    })    

    $('.menu__close').on('click', function() {
        $('.menu').fadeOut();
    })

    $('.menu__a').on('click', function() {
        $('.menu').fadeOut();
    })   



    $("body").on('click', '[href*="#"]', function(e){
		var fixed_offset = 100;
		$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
		e.preventDefault();
	  });
});