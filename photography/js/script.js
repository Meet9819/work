/*------------------------------------------------------------------
[Master Scripts]

Project:    CropIt template
Version:    1.0

[Table of contents]

[Components]
	- Preloader
	- Full scren slider
	- Full screen section
	- Review slider
	- Instagram carousel
	- Info section
	- Header search
	- Fixed header
	- Mobile menu
	- Tabs
	- Icon box auto height
	- Team grig
	- Open side panel
	- Close side panel
	- Content filter
	- Height icon box 2
	- Pricing height 
	- Horisontal gallery
	- Animation
	
-------------------------------------------------------------------*/

/*------------------------------------------------------------------
[ Preloader ]
*/
jQuery(window).on('load', function () {
    var $preloader = jQuery('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});

jQuery(document).ready(function(jQuery) {
	"use strict";

	function equalHeight(group) {
        if(jQuery(window).width() > '768') {
			var tallest = 0;
	       	jQuery(group).each(function() {
	            var thisHeight = jQuery(this).css('height', "").height();
	            if(thisHeight > tallest) {
	                tallest = thisHeight;
	            }
	        });
	        jQuery(group).height(tallest);
	    } else {
	    	jQuery(group).height('auto');
	    }
    }

    /*------------------------------------------------------------------
	[ Full scren slider ]
	*/

	if(jQuery('.full-screen-slider').length > 0){
		jQuery('.full-screen-slider').owlCarousel({
			loop:true,
			items:1,
			nav: true,
			dots: false,
			autoplay: true,
			autoplayTimeout: 5000,
			//autoplayHoverPause: true,
			navClass: ['owl-prev icon-font icon-back-5','owl-next icon-font icon-next-7'],
			navText: false,
			responsive:{
				0:{
					nav: false
				},
				990:{
					nav: true
				},
			}
		});
		jQuery(window).on("load resize", function(){
			jQuery('.full-screen-slider .item').css('height', jQuery(window).outerHeight());
		});
	}

	/*------------------------------------------------------------------
	[ Full screen section ]
	*/

	jQuery(window).on("load resize", function(){
		jQuery('.full-screen:not(.fixed-height)').css('height', jQuery(window).outerHeight());
	});

	/*------------------------------------------------------------------
	[ Review slider ]
	*/
	
	if(jQuery('.reviews-slider').length > 0){
		jQuery('.reviews-slider').owlCarousel({
			loop:true,
			items:1,
			nav: true,
			dots: true,
			//autoplay: true,
			autoplayTimeout: 5000,
			autoplayHoverPause: true,
			navClass: ['owl-prev icon-font icon-back-5','owl-next icon-font icon-next-7'],
			navText: false,
			responsive:{
				0:{
					nav: false
				},
				768:{
					nav: true
				},
			}
		});
	}

	/*------------------------------------------------------------------
	[ Instagram carousel ]
	*/
	
	if(jQuery('.ig-carousel').length > 0){
		jQuery('.ig-carousel').owlCarousel({
			loop:true,
			items:4,
			nav: false,
			dots: false,
			smartSpeed: 5000,
			autoplay: true,
			autoplayTimeout: 100,
			autoplayHoverPause: true,
			responsive:{
				0:{
					items:2
				},
				768:{
					items:2
				},
				990:{
					items:3
				},
				1024:{
					items:4
				}
			}
		});
	}
	
	/*------------------------------------------------------------------
	[ Info section ]
	*/
	
	jQuery(window).on("load resize", function(){
	    equalHeight('.info-section .is-col');
    });

    /*------------------------------------------------------------------
	[ Header search ]
	*/
	
    jQuery('.st-button').on("click", function(){
    	var wrap = jQuery(this).parents('.search-top');
    	var input = wrap.find('.input');
		if (wrap.hasClass('open') && input.val() == "") {
			input.fadeOut('500');
			if(jQuery(window).width() > '450') {
				wrap.removeClass('open').parent().find('.navigation').delay('500').fadeIn('500');
			} else {
				wrap.removeClass('open').parents().find('.logo-area').delay('500').fadeIn('500');
			}
			return false;
		} if(input.val() != "") {
			return true;
		} else {
			if(jQuery(window).width() > '450') {
				wrap.addClass('open').parent().find('.navigation').fadeOut('500');
			} else {
				wrap.addClass('open').parents().find('.logo-area').fadeOut('500');
			}
			input.delay('500').fadeIn('500');
			return false;
		};
	});

	/*------------------------------------------------------------------
	[ Fixed header ]
	*/
	
	if(jQuery('.header').hasClass('dark-bg')){
		var h_class = 'dark';
	}
	jQuery(window).on("load resize scroll", function(){
		if(jQuery(window).width() > '990') {
			if ( jQuery(document).scrollTop() > 0 ) {
				jQuery('.header').addClass('fixed').removeClass('dark-bg');
			} else {
				jQuery('.header').removeClass('fixed');
				if (h_class == 'dark') {
					jQuery('.header').addClass('dark-bg');
				}
			}
		} else {
			jQuery('.header').removeClass('fixed');
			if (h_class == 'dark') {
				jQuery('.header').addClass('dark-bg');
			}
		}
	});

	/*------------------------------------------------------------------
	[ Mobile menu ]
	*/
	
	jQuery(window).on("load resize", function(){
		if(jQuery(window).width() <= '990') {
			jQuery('.navigation .menu-item-has-children > a').on("click", function(){
				if(!jQuery(this).hasClass('active')) {
					jQuery(this).addClass('active').parent().children('.sub-nav').slideDown().siblings().children('.sub-nav').slideUp();
					return false;
				}
			});
		}
	});

	/*------------------------------------------------------------------
	[ Tabs ]
	*/
	
	jQuery('.tabs-head').on('click', 'li:not(.current)', function() {  
		jQuery(this).addClass('active-tab').siblings().removeClass('active-tab')  
		.parents('.tabs-area').find('.tab-content').eq(jQuery(this).index()).fadeIn(150).siblings('.tab-content').hide();  
		if(jQuery(window).width() > '768') {
			var tallest = 0;
	       	jQuery('.info-section .is-col').each(function() {
	            var thisHeight = jQuery(this).css('height', "").height();
	            if(thisHeight > tallest) {
	                tallest = thisHeight;
	            }
	        });
	        jQuery('.info-section .is-col').height(tallest);
	    } else {
	    	jQuery('.info-section .is-col').height('auto');
	    }
	});

	/*------------------------------------------------------------------
	[ Icon box auto height ]
	*/
	
	jQuery(window).on("load resize", function(){
	    equalHeight('.icon-box-area .icon-box-col');
    });

    /*------------------------------------------------------------------
	[ Team grig ]
	*/
    
    jQuery('.team-grid-item').on("click", function(){
    	if(jQuery(window).width() <= '990') {
    		if (jQuery(this).hasClass('hover')) {
				jQuery(this).removeClass('hover');
			} else {
				jQuery(this).addClass('hover');
			}
		}
	});

	/*------------------------------------------------------------------
	[ Open side panel ]
	*/
    
    jQuery('.side-area-btn').on("click", function(){
    	if(jQuery(window).width() > '990') {
			jQuery('.side-panel').addClass('open');
		} else {
    		if (jQuery('.navigation').hasClass('m-open')) {
				jQuery('.navigation').removeClass('m-open');
			} else {
				jQuery('.navigation').addClass('m-open');
			}
		}
		return false;
	});

    /*------------------------------------------------------------------
	[ Close side panel ]
	*/
	jQuery('.side-panel .close').on("click", function(){
		jQuery('.side-panel').removeClass('open');
		return false;
	});

	/*------------------------------------------------------------------
	[ Content filter ]
	*/
	
	if(jQuery('.cf-items:not(.horisontal)').length > 0){
		jQuery(window).on("load", function(){
			if (jQuery('.cf-items').hasClass('masonry')) {
				var mode = 'masonry';
			} else {
				var mode = 'fitRows';
			}
			var $grid = jQuery('.cf-items').isotope({
				itemSelector: '.cf-item',
				layoutMode: mode
			});
			jQuery('.filter-button-group').on( 'click', 'button', function() {
				jQuery(this).addClass('active-tab').siblings().removeClass('active-tab');
				var filterValue = jQuery(this).attr('data-filter');
				$grid.isotope({ filter: filterValue });
			});
		});
	}

	/*------------------------------------------------------------------
	[ Height icon box 2 ]
	*/

    jQuery(window).on("load resize", function(){
	    equalHeight('.icon-box2');
    });

    /*------------------------------------------------------------------
	[ Pricing height  ]
	*/

    jQuery(window).on("load resize", function(){
	    equalHeight('.pricing-item .pi-value');
    });

    /*------------------------------------------------------------------
	[ Horisontal gallery ]
	*/
    
    if(jQuery('.cf-items.horisontal').length > 0){
	    jQuery('.cf-overlay').mousewheel(function(e, delta) {
	        // multiplying by 40 is the sensitivity, 
	        // increase to scroll faster.
	        this.scrollLeft -= (delta * 40);
	        e.preventDefault();
	    });

	    jQuery(window).on("load resize", function(){
		    var width = 0;
		    jQuery('.cf-items.horisontal img').each(function(){
		    	jQuery(this).height(jQuery(window).height()-jQuery('.header-space').height());
		    	width = width + parseInt(jQuery(this).outerWidth(true)) + 30;
		    });
		    jQuery('.cf-items.horisontal').width(parseInt(width));
	    });
	}

	/*------------------------------------------------------------------
	[ Animation ]
	*/
	
	jQuery(window).on("load scroll", function(){
		jQuery('.animateNumber').each(function(){
			var num = jQuery(this).attr('data-num');
			
			var top = jQuery(document).scrollTop()+(jQuery(window).height());
			var pos_top = jQuery(this).offset().top;
			if (top > pos_top && !jQuery(this).hasClass('active')) {
				jQuery(this).addClass('active').animateNumber({ number: num },2000);
			}
		});
		jQuery('.animateProcent').each(function(){
			var num = jQuery(this).attr('data-num');
			var percent_number_step = jQuery.animateNumber.numberStepFactories.append('%');
			var top = jQuery(document).scrollTop()+(jQuery(window).height());
			var pos_top = jQuery(this).offset().top;
			if (top > pos_top && !jQuery(this).hasClass('active')) {
				jQuery(this).addClass('active').animateNumber({ number: num, numberStep: percent_number_step },2000);
				jQuery(this).css('width', num+'%');
			}
		});
	});
});