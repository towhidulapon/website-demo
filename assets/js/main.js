'use strict';
(function ($) {
    // ==========================================
    //      Start Document Ready function
    // ==========================================
    $(document).ready(function () {
        //========================== Scroll To Top Icon Js Start =========
        const btn = $('.scroll-top');
        $(window).on('scroll', function () {
            if ($(window).scrollTop() >= 100) {
                $('.header').addClass('fixed-header');
            } else {
                $('.header').removeClass('fixed-header');
            }
        });

        btn.on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, '300');
        });

        // ========================== Header Hide Scroll Bar Js Start =====================
        $('.navbar-toggler.header-button').on('click', function () {
            $('body').toggleClass('scroll-hide-sm');
        });
        $('.body-overlay').on('click', function () {
            $('body').removeClass('scroll-hide-sm');
        });
        // ========================== Header Hide Scroll Bar Js End =====================

        // ========================== Small Device Header Menu On Click Dropdown menu collapse Stop Js Start =====================
        $('.dropdown-item').on('click', function () {
            $(this).closest('.dropdown-menu').addClass('d-block');
        });
        // ========================== Small Device Header Menu On Click Dropdown menu collapse Stop Js End =====================

        // ========================== Add Attribute For Bg Image Js Start =====================
        $('.bg-img').css('background-image', function () {
            return `url(${$(this).data('background-image')})`;
        });
        // ========================== Add Attribute For Bg Image Js End =====================

        // ========================== add active class to ul>li top Active current page Js Start =====================
        function dynamicActiveMenuClass(selector) {
            if (!($(selector).length)) return;

            let fileName = window.location.pathname.split('/').reverse()[0];
            selector.find('li').each(function () {
                let anchor = $(this).find('a');
                if ($(anchor).attr('href') == fileName) {
                    $(this).addClass('active');
                }
            });
            // if any li has active element add class
            selector.children('li').each(function () {
                if ($(this).find('.active').length) {
                    $(this).addClass('active');
                }
            });
            // if no file name return
            if ('' == fileName) {
                selector.find('li').eq(0).addClass('active');
            }
        }
        dynamicActiveMenuClass($('ul.sidebar-menu-list'));

        // ========================== add active class to ul>li top Active current page Js End =====================

        // ================== Password Show Hide Js Start ==========
        $('.toggle-password').on('click', function () {
            $(this).toggleClass('fa-eye');
            var input = $($(this).attr('id'));
            if (input.attr('type') == 'password') {
                input.attr('type', 'text');
            } else {
                input.attr('type', 'password');
            }
        });
        // =============== Password Show Hide Js End =================

        // ================== Sidebar Menu Js Start ===============
        // Sidebar Dropdown Menu Start
        $('.has-dropdown > a').click(function () {
            $('.sidebar-submenu').slideUp(200);
            if ($(this).parent().hasClass('active')) {
                $('.has-dropdown').removeClass('active');
                $(this).parent().removeClass('active');
            } else {
                $('.has-dropdown').removeClass('active');
                $(this).next('.sidebar-submenu').slideDown(200);
                $(this).parent().addClass('active');
            }
        });
        // Sidebar Dropdown Menu End
        // Sidebar Icon & Overlay js
        $('.dashboard-body__bar-icon').on('click', function () {
            $('.sidebar-menu').addClass('show-sidebar');
            $('.sidebar-overlay').addClass('show');
            $('body').toggleClass('scroll-hide');
        });
        $('.sidebar-menu__close, .sidebar-overlay').on('click', function () {
            $('.sidebar-menu').removeClass('show-sidebar');
            $('.sidebar-overlay').removeClass('show');
            $('body').toggleClass('scroll-hide');
        });
        // Sidebar Icon & Overlay js
        // ===================== Sidebar Menu Js End =================

        // ==================== Dashboard User Profile Dropdown Start ==================
        $('.user-info__button').on('click', function () {
            $('.user-info-dropdown').toggleClass('show');
        });
        $('.user-info__button').attr('tabindex', -1).focus();

        $('.user-info__button').on('focusout', function () {
            $('.user-info-dropdown').removeClass('show');
        });
        // ==================== Dashboard User Profile Dropdown End ==================

        //Plugin Customization Start
        // ========================= Select2 Js Start ==============
        (function () {
            $('.select2').each((index, select) => {
                $(select).wrap('<div class="select2-wrapper"></div>').select2({
                    dropdownParent: $(select).closest('.select2-wrapper')
                });
            });
        })()

        // select2 with image
        function formatState(state) {
            if (!state.id) {
                return state.text;
            }
            var $state = $(
                '<span class="img-flag-inner"><img src="' + $(state.element).attr('data-src') + '" class="img-flag" /> ' + state.text + '</span>'
            );
            return $state;
        };
        $('.img-select2').select2({
            templateResult: formatState,
            templateSelection: formatState
        });
        // ========================= Select2 Js End ==============

        // image uploader js 
        $(function () {
            $('.input-images').imageUploader();
            $('.input-images-2').imageUploader();
        });
        // image uploader js 
        // ========================= Slick Slider Js Start ==============
        $('.choose-us-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 1500,
            dots: true,
            pauseOnHover: true,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right"></i></button>',
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        arrows: false,
                        slidesToShow: 1
                    }
                }
            ]
        });
        // ========================= Slick Slider Js End ===================

        // sidebar show hide js start here 
        $('.sidebar-menu__bar').on('click', function () {
            $('.dashboard').toggleClass('show-hide');

            if ($('.dashboard').hasClass('show-hide')) {
                $('.sidebar-menu').css('width', '100px');
                $('.dashboard__right').css('margin-left', '100px');
            } else {
                $('.sidebar-menu').css('width', '300px');
                $('.dashboard__right').css('margin-left', '300px');
            }
        });

        $('.sidebar-menu-list').on('mouseover', function () {
            if ($('.dashboard').hasClass('show-hide')) {
                $('.dashboard').removeClass('show-hide').addClass('temp-active');
                $('.sidebar-menu').css('width', '300px');
            }
        });

        $('.sidebar-menu-list').on('mouseout', function () {
            if ($('.dashboard').hasClass('temp-active')) {
                $('.dashboard').removeClass('temp-active').addClass('show-hide');
                $('.sidebar-menu').css('width', '100px');
            }
        });
        // sidebar show hide js end here 


        // ========================= testimonial Slider Js Start ==============
        $('.testimonial-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplaySpeed: 2000,
            speed: 1500,
            dots: true,
            pauseOnHover: true,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        arrows: false,
                        slidesToShow: 1
                    }
                }
            ]
        });
        // ========================= testimonial Slider Js End ===================

        // ========================= testimonial Slider Js Start ==============
        $('.brand-slider').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 1500,
            dots: false,
            pauseOnHover: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        arrows: false,
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 424,
                    settings: {
                        arrows: false,
                        slidesToShow: 2
                    }
                }
            ]
        });
        // ========================= testimonial Slider Js End ===================

        // ========================= Odometer Counter Up Js End ==========
        $('.counter-item').each(function () {
            $(this).isInViewport(function (status) {
                if (status === 'entered') {
                    for (
                        var i = 0;
                        i < document.querySelectorAll('.odometer').length;
                        i++
                    ) {
                        var el = document.querySelectorAll('.odometer')[i];
                        el.innerHTML = el.getAttribute('data-odometer-final');
                    }
                }
            });
        });



        // ========================= Odometer Up Counter Js End =====================
    });

    // ==========================================
    //      End Document Ready function
    // ==========================================

    // ========================= Preloader Js Start =====================
    $(window).on('load', function () {
        $('.preloader').fadeOut();
    });
    // ========================= Preloader Js End=====================
})(jQuery);








