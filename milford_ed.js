$(document).ready(function () {
	$('figure').on('click', function() {
		$(this).closest('article').find('.changein').removeClass("changein");
		$(this).closest('article').find('figure:first').last().addClass("changeout");
		$(this).closest('article').find('figure').last().addClass("changeout");
		$(this).next().addClass("changein");
		$(this).closest('article').find('figure:last').on('click', function () {
				$(this).closest('article').find('figure:first').addClass("changein");
		});
	
	});
});