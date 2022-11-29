!function ($) {
    $(function () {
        
        $(".menu").click(function () {
            $("body").addClass("navShown")
            $(".mobile-nav").fadeIn()
        })
        $(".close-btn").click(function () {
            $("body").removeClass("navShown")
            $(".mobile-nav").fadeOut()
        })
        $(".has-sub-nav").mouseenter(function () {
            $("body").addClass("subnav-shown")
            $(".dropdown-wrap").show()
        })
        $(".has-sub-nav").mouseleave(function () {
            $("body").removeClass("subnav-shown")
            $(".dropdown-wrap").hide()
        })
        $(".cart").click(function () {
            $("body").addClass("cartShown")
        })
        $(".cart-back").click(function () {
            $("body").removeClass("cartShown")
        })
        $("body").click(function () {
            $("body").removeClass("cartShown")
        })
        $(".cart-item.cart, .your-cart-wrap").click(function (e) {
            e.stopPropagation();
        })

        
        $('[name="gift"]').change(function () {
            if ($(this).is(':checked')) {
                // Do something...
               $('.gift-wrap .input-row-wrap').slideDown();
            }else{
                 $('.gift-wrap .input-row-wrap').slideUp();
            }
        });
        
        
        if ($('.sticky-cart').length) {
            var btnDistance = $('.add-cart-btn').offset().top;
            
            $(window).on('scroll', function () {
                var scrollY = $(this).scrollTop();
                if (scrollY > btnDistance) {
                    $('.sticky-cart').show();
                } else {
                    $('.sticky-cart').hide();
                }

            })
        }
        
        
        
        
        
        
        if ($(window).width() < 769) {

            $('.sponsor-item-wrap').marquee({
                duration: 5000,
                gap: 5,
                delayBeforeStart: 0,
                direction: 'left',
                duplicated: true,
            })

        };
        
        
        
        if ($('.product-item-wrap').length) {
            $('.product-item-wrap').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                autoplay: true,
                arrows: false,
                dots: false,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: 'unslick'
                    }
                ]
            })

            $(window).on('resize', function () {
                $('.product-item-wrap').slick('resize');
            });
        }
        
        
        
        if ($('.slide-into-wrap-item').length) {
            $('.slide-into-wrap-item').slick({
                autoplay: true,
                autoplaySpeed: 1500,
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                arrows: false,
                dots:false,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: 'unslick'
                    }
                ]
            })

            $(window).on('resize', function () {
                $('.slide-into-wrap-item').slick('resize');
            });
        }

        
        // review-wrap

        $('.review-item-wrap').slick({
            autoplay: false,
            autoplaySpeed: 1500,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            dots:false,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]

        });
        
        
        
        
        
        if ($("select.styled-select").length) {
            $("select.styled-select").selectric({

            });
        }
        
        

        $(".shop-accordion-item").eq(0).addClass("accordion-active")
        $('.shop-accordion-item').eq(0).find(".shop-accordion-content").slideDown();
        $(".shop-accordion-item").each(function(){
            var $this = $(this);
            $this.find(" > h6").on("click touch", function(){
                $(".shop-accordion-item").removeClass("accordion-active")
                $(".shop-accordion-content").slideUp();
                if($this.find(".shop-accordion-content:visible").length){
                    $(".shop-accordion-item").removeClass("accordion-active")
                    $(".shop-accordion-content").slideUp();
                }
                else{
                    $this.addClass("accordion-active")
                    $(".shop-accordion-content").slideUp();
                    $this.find(" > .shop-accordion-content").slideDown();
                }
            })
        })
        
        
        if ($('.shop-item-wrap').length) {
            $('.shop-item-wrap').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                arrows: true,
                autoplay: false,
                autoplaySpeed: 2000,
                infinite: true,
                dots: true,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: 'unslick'
                    }
                ]
            })

            $(window).on('resize', function () {
                $('.shop-item-wrap').slick('resize');
            });
        }
        
        
        
        if ($(window).width() < 769) {
            $('.tab-mobi-text').click(function () {
                $('.tab-trigger ul').slideToggle();
            })
            $('.tab-trigger ul li a').click(function () {
                $('.tab-trigger ul').slideUp();
            })

        }
        
        
       
        // $('.tab-trigger ul li').click(function () {
        //     $('.tab-trigger ul li').removeClass('tab-active');
        //     $(this).addClass('tab-active');
        //     $('.tab-item').hide();

        //     var activeTab = $(this).find('a').attr('href');
        //     $(activeTab).fadeIn();
        //     return false;
        // });
        
        
        
        
    })
}(jQuery);

var mac = 0;
if (navigator.userAgent.indexOf('Mac') > 0) {
    mac = 1;
} else {
    mac = 0;
}
if (1 == mac) {
    $('body').addClass('mac-os');
} else {
    $("body").addClass('win-os');
}

function increaseCount(e, el) {
    var input = el.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
}
function decreaseCount(e, el) {
    var input = el.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
    }
}