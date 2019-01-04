function nav() {
	$(".nav").stick_in_parent();

	if ($('.nav').length > 0) {
		var $menu = $(".nav__menu");
		var $menuOffset = $menu.offset().top;
		var $current = $menu.find(".nav__menu-item.active");
		var $currentOffset = $current.offset().top - $menuOffset;

		var $currentWidth = $current.height();
		var $underline = $menu.find(".nav__item-bullet");

		function slider() {
			$underline.css({
				top: $currentOffset,
				height: $currentWidth
			});
		};
		slider();

		$menu.find('.nav__menu-item').hover(
			function () {
				$underline.css({
					top: $(this).offset().top - $menuOffset,
					height: $(this).height()
				});
			},
			function () {
				slider();
			}
		);
	}


}