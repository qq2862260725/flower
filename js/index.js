$(window).scroll(function () {
	var st = $(this).scrollTop();
	console.log(st);

	if (st > 180 ) {
		$('.head').css('background-color','#fff');
		$('.head').css('box-shadow','0 2px 2px rgba(0, 0, 0, 0.1)');
		$('.logo').css('background-image','url(../img/3.svg)');
		$('.search').show();
		$('.search').css('border','1px solid #dedfe0');
		$('.black').css('color','#333');
		$('.login').css('border','1px solid #333');
	} else {
		$('.head').css('background','none');
		$('.search').hide();
		$('.head').css('box-shadow','none');
		$('.logo').css('background-image','url(../img/6.svg)');
		$('.black').css('color','#fff');
		$('.login').css('border','1px solid #fff');
	}
});