$(function () {
	const $navi = $('.slides-navigation>li>a');
	const $slides = $('.slides-container');

	let nowIdx = 0;

	const move = () => {
		$navi.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
		$slides.animate({ left: -100 * nowIdx + '%' }, 600, 'easeOutSine');
	};

	$navi.on('click', function (evt) {
		evt.preventDefault();

		nowIdx = $navi.index(this);

		// $slides.animate({ left: -100 * nowIdx + '%' }, 600, 'easeOutSine');
		// $navi.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
		// console.log(nowIdx);
		move();
	});
	$('.slide-prev').on('click', function (evt) {
		evt.preventDefault();

		/* 0 ->5, 1 2 3 4 5 -> -1  */

		if (nowIdx > 0) {
			nowIdx--;
		} else {
			nowIdx = 5;
		}

		move();
	});

	$('.slide-next').on('click', function (evt) {
		evt.preventDefault();

		/* 0 1 2 3 4 -> +1, 5->0  */
		if (nowIdx < 5) {
			nowIdx++;
		} else {
			nowIdx = 0;
		}

		move();
	});
});
