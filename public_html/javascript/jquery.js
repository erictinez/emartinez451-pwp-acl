

$('#logo').click(function() {
	$(this).css({
		'transform': 'rotate(360deg) scale(10) translate(5vw, 5vh)',
		'border': 'none',
		'transition': 'width 2s, height 2s, transform 1s'
	})
		.delay(2000)
		.fadeOut(1000);
	setTimeout(function() {
		$('#logo').removeAttr('style');
	}, 4000);
});

