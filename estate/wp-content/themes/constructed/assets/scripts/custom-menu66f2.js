;(function ($, window, document, undefined) {
	"use strict";

	$('.custom-menu-type select').on('change',function(){
		showField( $(this) );
	});

	function showField( $this ){
		var $select = $this,
			$detailed = $select.closest('.menu-item-settings').find('.custom-post-type-detailed');
			
		if( $select.val() != 'default' ) {
			$detailed.show();
		} else {
			$detailed.hide();
		}
	}

	$(window).load(function(){
		if( $('.custom-menu-type select').length ) {
			$('.custom-menu-type select').each(function(){
				showField( $(this) );
			});
		}
	});

})(jQuery, window, document);