$(document).ready(function() {

	$('.wcm-layouttab-container').find('.tab-navigation-items:first').addClass('state-active tab-active');

	$('.wcm-layouttab-container .wcm-layouttab-section').first().addClass('is-open').show();

	$('.tab-navigation-items').on('click', function() {

		if (!$(this).hasClass('state-active')) {
			$('.wcm-layouttab-section.is-open').removeClass('is-open').hide();
			$('.wcm-layouttab-section:eq(' + $(this).index() + ')').addClass('is-open').toggle();
			$('.wcm-layouttab-container').find('.state-active').removeClass('state-active tab-active');
			$(this).addClass('state-active tab-active');
		}

		$(window).resize();

		return false;
	});
});