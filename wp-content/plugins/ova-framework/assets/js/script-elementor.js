(function($){
	"use strict";
	

	$(window).on('elementor/frontend/init', function () {
		
		/* Menu Shrink */
		elementorFrontend.hooks.addAction('frontend/element_ready/ova_menu.default', function(){

			$( '.ova_menu_clasic .ova_openNav' ).on( 'click', function(){
				$( this ).closest('.ova_wrap_nav').find( '.ova_nav' ).removeClass( 'hide' );
				$( this ).closest('.ova_wrap_nav').find( '.ova_nav' ).addClass( 'show' );
				$( '.ova_menu_clasic  .ova_closeCanvas' ).css( 'width', '100%' );

				
				$( 'body' ).css( 'background-color', 'rgba(0,0,0,0.4)' );
				
			});

			$( '.ova_menu_clasic  .ova_closeNav' ).on( 'click', function(){
				$( this ).closest('.ova_wrap_nav').find( '.ova_nav' ).removeClass( 'show' );
				$( this ).closest('.ova_wrap_nav').find( '.ova_nav' ).addClass( 'hide' );
				$( '.ova_closeCanvas' ).css( 'width', '0' );


				
				$( 'body' ).css( 'background-color', 'transparent' );
				
			});

			// Display in mobile
			$( '.ova_menu_clasic li.menu-item button.dropdown-toggle').off('click').on( 'click', function() {
				$(this).parent().toggleClass('active_sub');
			});

			
			if( $('.ovamenu_shrink').length > 0 && $( 'body' ).data('elementor-device-mode') == 'desktop' ){
				
				if( !$('.show_mask_header').hasClass( 'mask_header_shrink' ) ){
					$( '<div class="show_mask_header mask_header_shrink" style="position: relative; height: 0;"></div>' ).insertAfter('.ovamenu_shrink');
					

				}

				
				var header = $('.ovamenu_shrink');
				var header_shrink_height = header.height();
				

				$(window).scroll(function () {

               var scroll = $(this).scrollTop();

               if (scroll >= header_shrink_height+150 ) {
                  header.addClass( 'active_fixed' );
                  header.find('ul.menu > li > a').addClass( 'active_fixed' );
                  header.find('.ova_openNav').addClass( 'active_fixed' );
                  $('.mask_header_shrink').css('height',header_shrink_height);
               } else {
                  header.removeClass('active_fixed');
                  header.find('ul.menu > li > a').removeClass('active_fixed');
                  header.find('.ova_openNav').removeClass( 'active_fixed' );
                  $('.mask_header_shrink').css('height','0');
               }
            });
			}

			if( $('.ovamenu_shrink_mobile').length > 0 && $( 'body' ).data('elementor-device-mode') != 'desktop' ){
				
				if( !$('.show_mask_header_mobile').hasClass( 'mask_header_shrink_mobile' ) ){
					$( '<div class="show_mask_header_mobile mask_header_shrink_mobile" style="position: relative; height: 0;"></div>' ).insertAfter('.ovamenu_shrink_mobile');
				}
				
				var header = $('.ovamenu_shrink_mobile');
				var header_shrink_height = header.height();
				

				$(window).scroll(function () {

               var scroll = $(this).scrollTop();

               if (scroll >= header_shrink_height+150 ) {
                  header.addClass( 'active_fixed' );
                  header.find('ul.menu > li > a').addClass( 'active_fixed' );
                  header.find('.ova_openNav').addClass( 'active_fixed' );
                  $('.mask_header_shrink_mobile').css('height',header_shrink_height);
               } else {
                  header.removeClass('active_fixed');
                  header.find('ul.menu > li > a').removeClass( 'active_fixed' );
                  header.find('.ova_openNav').removeClass( 'active_fixed' );
                  $('.mask_header_shrink_mobile').css('height','0');
               }
            });
			}

		});


	


		

		/* End Header Search */

		/* Slide Show */
		elementorFrontend.hooks.addAction('frontend/element_ready/ova_slideshow.default', function(){

			function fadeInReset(element) {
				$(element).find('*[data-animation]').each(function(){
					var animation = $(this).data( 'animation' );
					$(this).removeClass( 'animated' );
					$(this).removeClass( animation );
					$(this).css({ opacity: 0 });
				});
			}

			function fadeIn(element) {

				// Sub Title
				var $title = $(element).find( '.active .elementor-slide-subtitle' )
				var animation_title = $title.data( 'animation' );
				var duration_title  = parseInt( $title.data( 'animation_dur' ) );
				

				setTimeout(function(){
					$title.addClass(animation_title).addClass('animated').css({ opacity: 1 });
				}, duration_title);


				/* Title */
				var $sub_title = $(element).find( '.active .elementor-slide-title' );
				var animation_sub_title = $sub_title.data( 'animation' );
				var duration_sub_title  = parseInt( $sub_title.data( 'animation_dur' ) );


				setTimeout(function(){
					$sub_title.addClass(animation_sub_title).addClass('animated').css({ opacity: 1 });
				}, duration_sub_title);

				/* Description */
				var $desc = $(element).find( '.active .elementor-slide-description' );
				var animation_desc = $desc.data( 'animation' );
				var duration_desc  = parseInt( $desc.data( 'animation_dur' ) );


				setTimeout(function(){
					$desc.addClass(animation_desc).addClass('animated').css({ opacity: 1 });
				}, duration_desc);

				/* Button */
				var $button = $(element).find( '.active .elementor-slide-button' );
				var animation_button = $button.data( 'animation' );
				var duration_button  = parseInt( $button.data( 'animation_dur' ) );

				setTimeout(function(){
					$button.addClass(animation_button).addClass('animated').css({ opacity: 1 });
				}, duration_button);

				
			}

			$(document).ready(function(){
				$('.elementor-slides').each(function(){

					var owl = $(this);
					var data = owl.data("owl_carousel");

					owl.on('initialized.owl.carousel', function(event) {

						fadeIn(event.target);
					});

					owl.owlCarousel(
						data
						);
					
					owl.on('translate.owl.carousel', function(event){
						fadeInReset(event.target);
						owl.trigger('stop.owl.autoplay');
						owl.trigger('play.owl.autoplay');
					});

					owl.on('translated.owl.carousel', function(event) {
						fadeIn(event.target);
						owl.trigger('stop.owl.autoplay');
						owl.trigger('play.owl.autoplay');
					});
				});    	
			});
			
		});
		/* End Slide Show */


		/* Slide Testimonial */
		elementorFrontend.hooks.addAction('frontend/element_ready/ova_testimonial.default', function(){
			$(".testimonial-slider-ver-1").each(function(){
				var owlsl = $(this) ;
				var owlsl_df = {
					margin: 0, 
					responsive: false, 
					smartSpeed:500,
					autoplay:false,
					autoplayTimeout: 6000,
					items:1,
					loop:true, 
					nav: true, 
					dots: true,
					center:false,
					autoWidth:false,
					thumbs:false, 
					autoplayHoverPause: true,
					slideBy: 1,
					prev:'<i class="arrow_carrot-left"></i>',
					next:'<i class="arrow_carrot-right"></i>',
				};
				var owlsl_ops = owlsl.data('options') ? owlsl.data('options') : {};
				owlsl_ops = $.extend({}, owlsl_df, owlsl_ops);
				owlsl.owlCarousel({
					autoWidth: owlsl_ops.autoWidth,
					margin: owlsl_ops.margin,
					items: owlsl_ops.items,
					loop: owlsl_ops.loop,
					autoplay: owlsl_ops.autoplay,
					autoplayTimeout: owlsl_ops.autoplayTimeout,
					center: owlsl_ops.center,
					nav: owlsl_ops.nav,
					dots: owlsl_ops.dots,
					thumbs: owlsl_ops.thumbs,
					autoplayHoverPause: owlsl_ops.autoplayHoverPause,
					slideBy: owlsl_ops.slideBy,
					smartSpeed: owlsl_ops.smartSpeed,
					// animateIn: 'fadeIn', // add this
					// animateOut: 'fadeOut', // and this
					navText:[owlsl_ops.prev,owlsl_ops.next],
				});

			});
			//testimonial ver 1

			$(".testimonial-slider-ver-2").each(function(){
				var owlsl = $(this) ;
				var owlsl_df = {
					margin: 0, 
					responsive: false, 
					smartSpeed:500,
					autoplay:false,
					autoplayTimeout: 6000,
					items:1,
					loop:true, 
					nav: true, 
					dots: true,
					center:false,
					autoWidth:false,
					thumbs:false, 
					autoplayHoverPause: true,
					slideBy: 1,
					prev:'<i class="arrow_carrot-left"></i>',
					next:'<i class="arrow_carrot-right"></i>',
				};
				var owlsl_ops = owlsl.data('options') ? owlsl.data('options') : {};
				owlsl_ops = $.extend({}, owlsl_df, owlsl_ops);
				owlsl.owlCarousel({
					autoWidth: owlsl_ops.autoWidth,
					margin: owlsl_ops.margin,
					items: owlsl_ops.items,
					loop: owlsl_ops.loop,
					autoplay: owlsl_ops.autoplay,
					autoplayTimeout: owlsl_ops.autoplayTimeout,
					center: owlsl_ops.center,
					nav: owlsl_ops.nav,
					dots: owlsl_ops.dots,
					thumbs: owlsl_ops.thumbs,
					autoplayHoverPause: owlsl_ops.autoplayHoverPause,
					slideBy: owlsl_ops.slideBy,
					smartSpeed: owlsl_ops.smartSpeed,
					navText:[owlsl_ops.prev,owlsl_ops.next],
					lazyLoad:true,
					responsive: {
						0: {
							items: 1,
						},
						768:  {
							items: 2,
						},

					}
				});

			});
			//testimonial ver 2


		});
		// end Slide testimonial


		

		/* Time Coundown */
		elementorFrontend.hooks.addAction('frontend/element_ready/ova_time_countdown.default', function(){
			
			var date = $('.due_date').data('day').split(' ');
			var day = date[0].split('-');
			var time = date[1].split(':');
			var date_countdown = new Date( day[0], day[1]-1, day[2], time[0], time[1] );
			$('.due_date').countdown({until: date_countdown, format: 'DHMS'});
			
		});
      // end time countdown   

      /* Time Coundown banner */
      elementorFrontend.hooks.addAction('frontend/element_ready/ova_banner_time_countdown.default', function(){

         var date = $('.due_date').data('day').split(' ');
         var day = date[0].split('-');
         var time = date[1].split(':');
         var date_countdown = new Date( day[0], day[1]-1, day[2], time[0], time[1] );
         $('.due_date').countdown({until: date_countdown, format: 'DHMS'});

      });
        // end time countdown banner  


      /* Slide Testimonial */
      elementorFrontend.hooks.addAction('frontend/element_ready/ova_slider.default', function(){
         $(".ova-slider-carousel").each(function(){
            var owlsl = $(this) ;
            var owlsl_df = {
               margin: 0, 
               responsive: false, 
               smartSpeed:500,
               autoplay:false,
               autoplayTimeout: 6000,
               items:1,
               loop:true, 
               nav: true, 
               dots: true,
               center:false,
               autoWidth:false,
               thumbs:false, 
               autoplayHoverPause: true,
               slideBy: 1,
               prev:'<i class="arrow_carrot-left"></i>',
               next:'<i class="arrow_carrot-right"></i>',
            };
            var owlsl_ops = owlsl.data('options') ? owlsl.data('options') : {};
            owlsl_ops = $.extend({}, owlsl_df, owlsl_ops);
            owlsl.owlCarousel({
               autoWidth: owlsl_ops.autoWidth,
               margin: owlsl_ops.margin,
               items: owlsl_ops.items,
               loop: owlsl_ops.loop,
               autoplay: owlsl_ops.autoplay,
               autoplayTimeout: owlsl_ops.autoplayTimeout,
               center: owlsl_ops.center,
               nav: owlsl_ops.nav,
               dots: owlsl_ops.dots,
               thumbs: owlsl_ops.thumbs,
               autoplayHoverPause: owlsl_ops.autoplayHoverPause,
               slideBy: owlsl_ops.slideBy,
               smartSpeed: owlsl_ops.smartSpeed,
               navText:[owlsl_ops.prev,owlsl_ops.next],
            });

         });
      });
		// end Slider

		


   

   

      /* exhibitions creactive */
      elementorFrontend.hooks.addAction('frontend/element_ready/ova_lifevent_according_image_filter.default', function(){
         $('.ova-lifevent-according-image-filter .wp-content .day li:first-child').addClass('active');
         var id_day_first = $('.ova-lifevent-according-image-filter .wp-content .day li:first-child').attr('data-id');
         $('.ova-lifevent-according-image-filter .wp-content .room .' + id_day_first).css('display','table-cell').addClass('start');
         $('.ova-lifevent-according-image-filter .wp-content .room .' + id_day_first + ':first').addClass('active');

         var id_room_first = $('.ova-lifevent-according-image-filter .wp-content .room .' + id_day_first).attr('data-id');
         $('.ova_lifevent_according_image .' + id_room_first).addClass('active');
         $('.ova_lifevent_according_image .' + id_room_first + ':first .accor-lifevent-content-image').css('padding-top', '80px');
         if (id_room_first) {
         	var day_room_active = $('.ova-lifevent-according-image-filter .wp-content .room li.active').attr('data-id');
	        $('.ova_lifevent_according_image .item-room').fadeOut(50).removeClass('active');
	        $('.ova_lifevent_according_image .' + id_room_first).fadeIn(50).addClass('active');
         }
        

         $('.ova-lifevent-according-image-filter .wp-content .day li').off('click').on( 'click', function() {
            var day_id = $(this).attr('data-id');
            $('.ova-lifevent-according-image-filter .wp-content .day li').removeClass('active');
            $(this).addClass('active');
            $('.ova-lifevent-according-image-filter .wp-content .room li').css('display','none').removeClass('start').removeClass('active');
            $('.ova-lifevent-according-image-filter .wp-content .room .' + day_id).css('display','table-cell').addClass('start');
            $('.ova-lifevent-according-image-filter .wp-content .room .' + day_id + ':first').css('color','#000').addClass('active');

            var day_room_active = $('.ova-lifevent-according-image-filter .wp-content .room li.active').attr('data-id');
            $('.ova_lifevent_according_image .item-room').fadeOut().removeClass('active');
            var room_active = $('.ova_lifevent_according_image .' + day_room_active);
            if (room_active.length > 0) {
               room_active.fadeIn().addClass('active');
               $('.ova_lifevent_according_image .' + day_room_active + ':first .accor-lifevent-content-image').css('padding-top', '80px');
            } else {
               $('.ova_lifevent_according_image .' + day_id).fadeIn().addClass('active');
               $('.ova_lifevent_according_image .' + day_id + ':first .accor-lifevent-content-image').css('padding-top', '80px');
            }
         });

         $('.ova-lifevent-according-image-filter .wp-content .room li').off('click').on( 'click', function() {
            var id_room_active = $(this).attr('data-id');
            $('.ova-lifevent-according-image-filter .wp-content .room li').removeClass('active');
            $(this).addClass('active');

            $('.ova_lifevent_according_image .item-room').fadeOut().removeClass('active');
            $('.ova_lifevent_according_image .' + id_room_active).fadeIn().addClass('active');
            $('.ova_lifevent_according_image .' + id_room_active + ':first .accor-lifevent-content-image').css('padding-top', '80px');
         })
      });
      // end exhibitions creactive

      /* price tab */
      elementorFrontend.hooks.addAction('frontend/element_ready/ova_price_tab.default', function(){
         var id_first = $('.ova-tab-price .tab-price button:first-child').addClass('active').attr('id');
         $('.price-tab.'+id_first).fadeIn( 100 );
         $('.ova-tab-price .tab-price button').off('click').on( 'click', function(){
            var id = $(this).attr('id');
            $('.ova-tab-price .tab-price button').removeClass('active');
            $(this).addClass('active');
            $('.price-tab').fadeOut( 10 );
            $('.price-tab.'+id).fadeIn( 500 );
         });
      });
      /* end price tab */


      /* Popup Speakers */

      elementorFrontend.hooks.addAction('frontend/element_ready/ova_artist.default', function(){

         $(".view_volunteer").click(function () {
            $(this).parent(".popup_volunteer").children(".content_popup").addClass("show"); 
         });
         $(".btn_close").click(function () {
            $(".content_popup").removeClass("show");
         });

      });

      // Speakers slide
      elementorFrontend.hooks.addAction('frontend/element_ready/ova_lifevent_according_image.default', function(){

	      	$(".speaker_imgs").each(function(){
				$(this).owlCarousel({
					margin: 0, 
					responsive: true, 
					smartSpeed:500,
					autoplay: 3000,
					autoplayTimeout: 3000,
					items:1,
					loop:true, 
					nav: false, 
					dots: true,
					center:true,
					autoWidth:false,
					thumbs:false, 
					autoplayHoverPause: true,
					slideBy: 1,
					prev:'<i class="arrow_carrot-left"></i>',
					next:'<i class="arrow_carrot-right"></i>',
					responsive: {
						0: {
							items: 1
						},
						768:  {
							items: 1
						},
						1200:  {
							items: 1
						}

					}
				});

			});

      });
      

	

	});

})(jQuery);
