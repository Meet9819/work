'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

if ('touchAction' in document.body.style) {
	document.body.style.touchAction = 'manipulation';
}

var $ = jQuery;

$(function () {

	// notification
	if ($('.js-notification').length) {
		(function () {
			var $el = $('.js-notification'),
			    $el_close = $('.js-notification--close', $el);

			$el_close.on('click', function () {
				$el.hide();
			});
		})();
	};

	// languages
	if ($('.select_language').length) {
		(function () {
			var $el = $('.select_language'),
			    $el_opener = $('.select_language--opener', $el),
			    $el_list = $('.select_language--list', $el),
			    isOpened = false;

			$el_opener.on('click', function () {
				if (isOpened) {
					close();
				} else {
					open();
				}
			});

			$(window).on('click', function (e) {
				if (!$el.is(e.target) && $el.has(e.target).length === 0) {
					close();
				}
			});

			var close = function close() {
				$el.removeClass('-opened');
				isOpened = false;
			};

			var open = function open() {
				$el.addClass('-opened');
				isOpened = true;
			};
		})();
	};

	// promo_slider
	if ($('.js-promo_slider').length) {
		(function () {

			var $carousel = $('.js-promo_slider'),
			    $nav = $('.js-promo_slider_nav');

			$carousel.slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				speed: $carousel.attr('data-speed') ? $carousel.attr('data-speed') : 250,
				asNavFor: $nav.length ? '.js-promo_slider_nav' : false,
				autoplay: $carousel.attr('data-autoplay') ? $carousel.attr('data-autoplay') : true,
				autoplaySpeed: $carousel.attr('data-autoplayspeed') ? $carousel.attr('data-autoplayspeed') : 6000,
			});

			if ($nav.length) {

				$nav.slick({
					slidesToShow: 4,
					asNavFor: '.js-promo_slider',
					infinite: false,
					draggable: false,
					focusOnSelect: true,
					waitForAnimate: false,
					prevArrow: '\n\t\t\t\t\t<button class="slick-prev" type="button">\n\t\t\t\t\t\t<span class="icons8-long-arrow-right"></span>\n\t\t\t\t\t</button>\n\t\t\t\t\t',
					nextArrow: '\n\t\t\t\t\t<button class="slick-next" type="button">\n\t\t\t\t\t\t<span class="icons8-long-arrow-right"></span>\n\t\t\t\t\t</button>\n\t\t\t\t\t',
					responsive: [{
						breakpoint: 1260,
						settings: {
							slidesToShow: 4,
							arrows: false
						}
					}, {
						breakpoint: 1200,
						settings: {
							slidesToShow: 3,
							arrows: true
						}
					}, {
						breakpoint: 992,
						settings: {
							slidesToShow: 2
						}
					}, {
						breakpoint: 600,
						settings: {
							slidesToShow: 1
						}
					}]
				});

				$carousel.on('beforeChange', function (event, slick, currentSlide, nextSlide) {

					if (nextSlide === 0 || nextSlide === slick.slideCount - 1) {
						$nav.slick('slickGoTo', nextSlide, false);
					}
				});
			}
		})();
	}

	if ($('.promo_detailed--cta').length) {
		(function () {
			var promo_detailed = function promo_detailed() {
				if ($(window).width() > 992) {
					$('.promo_detailed--cta').height($('.abImage').outerHeight());
				} else {
					$('.promo_detailed--cta').css({
						height: 'auto'
					});
				}
			};

			promo_detailed();

			$(window).resize(function () {
				promo_detailed();
			});
		})();
	}

	// partners
	if ($('.js-partners').length) {

		var $carousel = $('.js-partners');

		$('.js-partners').slick({
			slidesToShow: 6,
			slidesToScroll: 6,
			arrows: false,
			dots: false,
			speed: $carousel.attr('data-speed') ? $carousel.attr('data-speed') : 1500,
			autoplay: $carousel.attr('data-autoplay') && $carousel.attr('data-autoplay') == 'true' ? true : false,
			autoplaySpeed: $carousel.attr('data-autoplayspeed') ? $carousel.attr('data-autoplayspeed') : 3000,
			// swipeToSlide: true,
			responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 5
				}
			}, {
				breakpoint: 1000,
				settings: {
					slidesToShow: 4
				}
			}, {
				breakpoint: 700,
				settings: {
					slidesToShow: 3
				}
			}, {
				breakpoint: 560,
				settings: {
					slidesToShow: 2
				}
			}, {
				breakpoint: 460,
				settings: {
					slidesToShow: 1
				}
			}]
		});
	}

	// tips
	if ($('.js-tip').length) {

		$('.js-tip').each(function (i, el) {
			var $el = $(el);
			new Tip($el);
		});
	};

	// sticky header
	if ($('.header_sticky').length && $(window).width() > 1000) {
		(function () {

			var headerSticky = function headerSticky() {
				var showAt = void 0;
				var $el = $('.header_sticky');

				if ($('.promo_slider').length) {
					showAt = $('.promo_slider').outerHeight(true) + $('.promo_slider').offset().top;
				} else {
					showAt = 600;
				}

				if ($(window).scrollTop() > showAt) {
					$el.addClass('-stick');
				} else {
					$el.removeClass('-stick');
				}
			};

			headerSticky();

			$(window).on('scroll', function (e) {

				headerSticky();
			});
		})();
	}

	// progressbar
	if ($('.progressbar').length) {

		$('.progressbar').each(function (index, el) {
			var $el = $(el),
			    options = $el.data('options'),
			    value = $el.data('value'),
			    inViewport = false,
			    defaultOptions = {
				strokeWidth: 4,
				trailWidth: 4,
				"text": {
					"value": '0',
					"className": "progressbar--label"
				},
				step: function step(state, bar) {
					bar.setText((bar.value() * 100).toFixed(0));
				}
			};

			options = $.extend(defaultOptions, options);

			if (value.indexOf('%') !== -1) {
				value = value.replace('%', '');
			}

			var progressbar = new ProgressBar.Circle(el, options);

			var startAnimation = function startAnimation() {
				inViewport = true;
				progressbar.animate(value / 100);
			};

			if ($('.js-progressbars').is(':in-viewport') && !inViewport) {
				startAnimation();
			}

			$(window).on('scroll', function () {
				if ($('.js-progressbars').is(':in-viewport(-120)') && !inViewport) {
					startAnimation();
				}
			});
		});
	};

	// map
	function initMap( $map ) {
		var $container = $map,
			container = $container[0],
			mapOptions = {
				center: { lat: parseInt($map.attr('data-lat')), lng: parseInt($map.attr('data-lng')) },
				zoom: parseInt($map.attr('data-zoom')),
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				scrollwheel: false,
				icon: $map.attr('data-marker')
			},
		    map = null,
		    marker = null;
		
		if ( map == null ) {
			map = new google.maps.Map(container, mapOptions);
		}
		if ( marker == null ) {
			marker = new google.maps.Marker({
				position: mapOptions.center,
				map: map,
				icon: mapOptions.icon
			});
		}
	}

	if ( $('.js-map').length && window.google ) {
		(function () {
			var $el = $('.js-map'),
			    $opener = $('.js-map--opener'),
			    $container = $('.js-map--container');

			if( $el.hasClass('show') ) {
				initMap( $container );
				$container.toggle();
			} else {
				$opener.on('click', function (e) {
					initMap( $container );
					$container.toggle();
				});
			}
		})();
	}

	// custom select
	$('.select, .field').on('click', '.select2-selection', function(){
		$(this).addClass('selected');
	});

	if ($('.js-select').length && $.fn.select2) {

		$('.js-select').each(function (i, el) {
			$(el).select2();
		});
	}

	// reviews_carousel
	if ($('.js-clients_reviews').length) {

		$('.js-clients_reviews').slick({
			slidesToShow: 3,
			arrows: false,
			dots: true,
			swipeToSlide: true,
			responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 2
				}
			}, {
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}]
		});
	}
	// clients carousel
	if ($('.js-clients').length) {
		var $carousel = $('.js-clients');

		$('.js-clients').slick({
			slidesToShow: 4,
			slidesToScroll: 4,
			dots: true,
			arrows: false,
			centerMode: false,
			speed: $carousel.attr('data-speed') ? $carousel.attr('data-speed') : 1500,
			autoplay: $carousel.attr('data-autoplay') && $carousel.attr('data-autoplay') == 'true' ? true : false,
			autoplaySpeed: $carousel.attr('data-autoplayspeed') ? $carousel.attr('data-autoplayspeed') : 8000,
			responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}, {
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}]
		});
	}

	// header_search
	if ($('.js-header_search').length) {

		$('.js-header_search').each(function (i, el) {

			var $el = $(el),
			    $opener = $('.js-header_search--opener', $el),
			    $dropdown = $('.js-header_search--dropdown', $el),
			    $input = $('input', $dropdown),
			    isOpened = false;

			$opener.on('click', function (e) {
				e.preventDefault();
				if (isOpened) {
					close();
				} else {
					open();
				}
			});

			$input.on('keydown', function (e) {
				if (e.keyCode == 13) {
					$el.submit();
				}
			});

			$(window).on('click', function (e) {
				if (!$el.is(e.target) && $el.has(e.target).length === 0) {
					close();
				}
			});

			var open = function open() {
				$dropdown.show();
				$opener.addClass('-active');
				$input.focus();
				isOpened = true;
			};

			var close = function close() {
				$dropdown.hide();
				$opener.removeClass('-active');
				isOpened = false;
			};
		});
	}

	// accordion
	if ($('.js-accordion').length) {

		$('.js-accordion').each(function (i, el) {
			new Accordion($(el));
		});
	}

	// twitter feed
	if ($('.js-twitter_feed').length) {

		$('.js-twitter_feed').slick({
			slidesToShow: 1,
			autoplay: true,
			dots: true,
			arrows: false
		});
	}

	// cards filters
	if ($('.js-case_studies').length) {

		var $module = $('.js-case_studies'),
		    _$container = $('.case_studies .row', $module),
		    $navigation = $('.tab_navigation', $module),
		    $navigationLink = $('.tab_navigation--link', $module);

		$navigationLink.on('click', function (e) {
			e.preventDefault();
		});

		_$container.mixItUp({
			controls: {
				activeClass: '-active'
			},
			selectors: {
				filter: '.js-case_studies .tab_navigation--link'
			}
		});
	}

	// post_share
	if ($('.js-share').length) {
		(function () {

			var $el = $('.js-share'),
			    $opener = $('.js-share--opener', $el),
			    $dropdown = $('.js-share--dropdown', $el);

			$opener.on('click', function (e) {
				e.preventDefault();

				$dropdown.toggle();
			});
		})();
	}

	// menu in widget
	if ($('.widget .menu').length) {
		(function () {

			var $opener = $('.widget .menu .menu-item-has-children');

			$opener.on('click', function (e) {
				var $el = $(e.target).closest('.menu-item-has-children');
				$opener.not($el).removeClass('-opened');
				$el.toggleClass('-opened');
				e.preventDefault();
			});
		})();
	}

	// hamburger toggler
	if ($('.c-hamburger').length) {
		var toggleHandler = function toggleHandler(toggle) {
			toggle.addEventListener("tap", function (e) {
				e.preventDefault();
				this.classList.contains("is-active") === true ? this.classList.remove("is-active") : this.classList.add("is-active");
			});
		};

		var toggles = document.querySelectorAll(".c-hamburger");

		for (var i = toggles.length - 1; i >= 0; i--) {
			var toggle = toggles[i];
			toggleHandler(toggle);
		};
	}

	// slideout menu
	if ($('.mobile_sidebar').length) {

		if ($(window).width() <= 992) {
			(function () {

				var slideout = new Slideout({
					'panel': document.getElementById('main'),
					'menu': document.getElementById('mobile_sidebar'),
					'padding': 320,
					'tolerance': 70
				});

				if ($('.header--menu_opener').length) {
					$('.header--menu_opener').on('click', function (e) {
						slideout.toggle();
						e.preventDefault();
					});

					// $('.header--menu_opener button').on('click', (e) => {
					// 	e.preventDefault()
					// });
				}

				if ($('.mobile_sidebar--closer').length) {
					$('.mobile_sidebar--closer').on('click', function (e) {
						e.preventDefault();
						$('.c-hamburger').removeClass('is-active');
						slideout.close();
					});
				}

				$('.mobile_menu .menu-item > a').on('click', function (e) {
					var $item = $(e.target);
					$item.parent('.menu-item').toggleClass('-active');
				});
			})();
		}
	}

	// video youtube
	if ($('[data-video-youtube]').length && $.fn.YTPlayer) {

		$('[data-video-youtube]').each(function (i, el) {

			var $el = $(el),
			    options = $el.data('video-youtube'),
			    defaultOptions = {
				"fitToBackground": true,
				callback: function callback() {
					$el.parents().find('.video--background_placeholder').animate({
						opacity: 0
					}, 1000);
				}
			};

			options = $.extend(defaultOptions, options);
			$el.YTPlayer(options);
		});
	}

	// custom video
	if ($('[data-video-custom]').length) {

		$('[data-video-custom]').each(function (i, el) {
			var $el = $(el),
			    options = $el.data('video-custom');

			$el.vide(options.path);
		});
	}

	// open view
	if ($('.js-video_popup').length) {

		$('.js-video_popup').magnificPopup({
			type: 'iframe'
		});
	}

	// image popup view
	if ($('.js-image_popup').length) {

		$('.js-image_popup').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			closeBtnInside: false,
			fixedContentPos: true,
			mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
			image: {
				verticalFit: true
			},
			zoom: {
				enabled: true,
				duration: 300 // don't foget to change the duration also in CSS
			}
		});
	}

	if ($('.js-service_gallery').length) {

		$('.js-service_gallery').magnificPopup({
			delegate: 'a',
			type: 'image',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0, 1]
			}
		});
	}

	if (tabby) {
		tabby.init({
			toggleActiveClass: '-active',
			contentActiveClass: '-active'
		});
	}

	if ($('.js-support_chat').length) {

		$('.js-support_chat').each(function (i, el) {
			var $el = $(el),
			    $el_opener = $('.js-support_chat--opener', $el),
			    $color = $el_opener.find('i').css('color'),
			    $bgcolor = $el_opener.css('background-color'),
			    $el_window = $('.js-support_chat--window', $el);

			$el_opener.on('click', function () {
				$el_opener.toggleClass('-active');
				$el_window.toggleClass('-show');

				if( $el_opener.hasClass('-active') ) {
					$el_opener.find('i').css('color',$bgcolor);
					$el_opener.css('background-color',$color);
				} else {
					$el_opener.find('i').css('color',$color);
					$el_opener.css('background-color',$bgcolor);
				}
			});
		});
	}

	if ($('.js-widget_slider').length) {

		$('.js-widget_slider').each(function (i, el) {
			var $carousel = $(el).slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				arrows: false,
				fade: true,
				cssEase: 'linear',
				speed: 500,
				autoplay: true,
				autoplaySpeed: 3000,
				inifinite: true
			});
		});
	}

	if ($('body').hasClass('single')) {
		$(".article--content").fitVids();
	}
});

// classes

var Accordion = function () {
	function Accordion($el, options) {
		_classCallCheck(this, Accordion);

		this.items = [];
		this.$el = $el;
		this.$panes = $('.js-accordion--pane', this.$el);
		this.addItems();
		console.log(this.items[0].open());
	}

	_createClass(Accordion, [{
		key: 'addItems',
		value: function addItems() {
			var _this = this;

			this.$panes.each(function (i, el) {
				_this.items.push(new AccordionItem($(el), _this));
			});
		}
	}, {
		key: 'closeAll',
		value: function closeAll() {
			this.items.forEach(function (item, i) {
				if (item.isOpened) {
					item.close();
				}
			});
		}
	}]);

	return Accordion;
}();

var AccordionItem = function () {
	function AccordionItem($el, accordion) {
		_classCallCheck(this, AccordionItem);

		this.isOpened = false;
		this.$el = $el;
		this.$opener = $('.js-accordion--pane_opener', this.$el);
		this.$content = $('.js-accordion--pane_content', this.$el);
		this.accordion = accordion;
		this.addEventListeners();
	}

	_createClass(AccordionItem, [{
		key: 'addEventListeners',
		value: function addEventListeners() {
			var _this2 = this;

			this.$opener.on('click', function () {
				_this2.toggle();
			});
		}
	}, {
		key: 'toggle',
		value: function toggle() {
			if (this.isOpened) {
				this.close();
			} else {
				this.accordion.closeAll();
				this.open();
			}
		}
	}, {
		key: 'close',
		value: function close() {
			this.$el.removeClass('-opened');
			this.$content.stop().slideUp();
			this.isOpened = false;
		}
	}, {
		key: 'open',
		value: function open() {
			this.$el.addClass('-opened');
			this.$content.stop().slideDown();
			this.isOpened = true;
		}
	}]);

	return AccordionItem;
}();

var Tip = function () {
	function Tip($el, options) {
		_classCallCheck(this, Tip);

		this.opened = false;

		this.cacheDOM($el);
		this.setOptions(options);
		this.bind();
	}

	_createClass(Tip, [{
		key: 'setOptions',
		value: function setOptions(options) {
			if (options) {
				this.options = options;
			} else {
				if (this.$el.data('options')) {
					this.options = this.$el.data('options');
				}
			}
		}
	}, {
		key: 'cacheDOM',
		value: function cacheDOM($el) {
			this.$el = $el;
			this.$el.$close = $('.js-tip--close', this.$el);
		}
	}, {
		key: 'bind',
		value: function bind() {
			var _this3 = this;

			this.$el.$close.on('click', function () {
				_this3.close();
			});
		}
	}, {
		key: 'close',
		value: function close() {
			this.$el.addClass('-hide');
		}
	}]);

	return Tip;
}();

;(function ($, window, document, undefined) {
	"use strict";

	function initMasonry() {
		//masonry footer widgets
		$('.footer_main .row').masonry({
			itemSelector: '.col-lg-3'
		});

		//masonry blog
		$('.masonry-blog').masonry();
	}

	$(window).load(function(){
		abImage();
		initMasonry();
		setTimeout(changeRowSize(), 500);

		/* Hide preloader */
		if( $('#preloader').length ) {
			$('#preloader').fadeOut();
		}
		blog_items_height();
	});	

	$(window).resize(function(){
		setTimeout(function(){changeRowSize();}, 500);
		initMasonry();
		abImage();
		blog_items_height();
	});

	function abImage(){
		if ($(window).width() > 992) {
			if( $('.abImage .promo_detailed--background_image').length ) {

				var width = $(window).width();
				$('.abImage .promo_detailed--background_image').each(function(){
					$(this).width( width / 2 );
				});
			}
		}
	}

	function changeRowSize() {
		if( $('.vc_row.section.-rounded').length ) {
			$('.vc_row.section.-rounded').each(function(){
				var $this = $(this),
					$left = parseInt($this.css('left')),
					$width = $this.width();

				$this.css({
					'left' : $left - 15
				});
				$this.width( $width + 30 );
			});
		}
	}

	$('[data-hover-color]').each(function(){
		var $this = $(this),
			cur_bg = $this.css('background-color');

		$this.on('mouseenter', function(){
			$this.css('background-color', $this.attr('data-hover-color'));
		}).on('mouseleave',function(){
			$this.css('background-color', cur_bg);
		});
	});

	$('[data-hover-rounded-color]').each(function(){
		var $this = $(this),
			newColor = $this.attr('data-hover-rounded-color'),
			cur_border = $this.css('border-color'),
			cur_color  = $this.css('color');

		$this.on('mouseenter', function(){
			$this.css({
				'background-color': newColor,
				'border-color': newColor,
				'color': '#fff'
			});

		}).on('mouseleave',function(){
			$this.css({
				'background-color': 'transparent',
				'border-color': cur_border,
				'color': cur_color
			});
		});
	});

	if ($('.wpcf7-form').length && $('.contact_form--file_input').length) {
		(function () {

			var clearNode = function clearNode($el) {
				return $el.html('');
			};

			var appendFile = function appendFile(filename, $el) {
				return $el.html('<span>' + filename + '</span>');
			};

			var $el = $('.contact_form'),
			    $fileInput = $('.contact_form--file_input'),
			    $filesList = $('.contact_form--files_list');

			$fileInput.on('change', function(){
				var fileName = this.files[0].name;

				clearNode($filesList);
				appendFile(fileName, $filesList);
			});
		})();
	}

	/* Equal height for blog items for non masonry style */
	function blog_items_height() {

		if( $('.blog').length && ! $('.blog > .masonry-blog').length ) {

			$('.blog .row').find('.blog-item').each(function() {
				$(this).height( 'auto' );
			});

			if( $(window).width() > 768 - 17 ) {
				var wid = 3;

				if( $(window).width() < 992 - 17 ) {
					wid = 2;
				}

				var ar_height = [],
					counter = 1,
					el_height = 0,
					el = 0;

				$('.blog .row').find('.blog-item').each(function() {
					var height = $(this).height();

					if( height > el_height ) {
						el_height = height;
					}

					if( counter % wid == 0 ) {
						ar_height.push( el_height );
						el_height = 0;
					}

					counter++;
				});
				counter = 1;

				$('.blog .row').find('.blog-item').each(function() {
					if( counter % wid == 0 ) {
						$(this).height( ar_height[el] );
						el++;
					}
					counter++;
				});

			}			
		}

	}


})(jQuery, window, document);