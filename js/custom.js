$(document).ready(function() {

    "use strict";

    textType();
    owlCarousel();
    magnificPopup();
    stickyMenu();
    collapseHide();
    smoothLink();
    scrollSpy();
    backTop();
    scrAn();
});

$(window).on("load", function() {
    preLoader();
    workFolio();
});


    //scroll
    function stickyMenu() {
        $(window).on('scroll',function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 50) {
                $(".sticky").addClass("stickyadd");
            } else {
                $(".sticky").removeClass("stickyadd");
            }
        });
    }

    // CollapseHide
     function collapseHide() {

     "use strict";

        $(document).on('click', '.navbar-collapse.show', function(e) {
            if ($(e.target).is('a')) {
                $(this).collapse('hide');
            }
        });
    }

    //Smooth SmoothLink
    function smoothLink() {
        $('.navbar-nav a, .scroll_down a').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    }

    //Scrollspy
    function scrollSpy() {
        $("#navbarCollapse").scrollspy({
            offset:20
        });
    }

    //Typed
    function textType() {
        $(".element").each(function() {
            var $this = $(this);
            $this.typed({
                strings: $this.attr('data-elements').split(','),
                typeSpeed: 100,
                backDelay: 3000
            });
        });
    }

    //Work


function workFolio() {



    var filter = $("#menu-filter"),
        items = $(".work-filter");
    items.isotope({
        filter: "*",
        layoutMode: "masonry",
        animationOptions: {
            duration: 750,
            easing: "linear"
        }
    });

    filter.find("a").on("click", function() {
        var selector = $(this).attr("data-filter");
        return filter.find("a").removeClass("active"), $(this).addClass("active"), items.isotope({
            filter: selector,
            animationOptions: {
                animationDuration: 750,
                easing: "linear",
                queue: false,
            }
        });
        return false;
    });
}

    //Magnificpop
     function magnificPopup() {
        $('.img-zoom').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            mainClass: 'mfp-fade',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            }
        });
    }

    //Client
    function owlCarousel() {

    "use strict";

        $("#owl-demo").owlCarousel({
            autoPlay: 15000,
            stopOnHover: true,
            navigation: false,
            paginationSpeed: 1000,
            goToFirstSpeed: 2000,
            singleItem: true,
            autoHeight: true,
        });
}

    //PRELOADER
    function preLoader() {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    }

function scrollTop() {

    "use strict";

    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 100) {
            $('.chevron-button').fadeIn();
        } else {
            $('.chevron-button').fadeOut();
        }
    });
    $('.chevron-button').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
}


    // BACK TO TOP
    function backTop() {

         "use strict";

        $(window).on('scroll',function(){
            if ($(this).scrollTop() > 100) {
                $('.back_top').fadeIn();
            } else {
                $('.back_top').fadeOut();
            }
        }); 
        $('.back_top').click(function(){
            $("html, body").animate({ 
                scrollTop: 0 
            }, 1000);
        });
    }


function scrAn() {
            AOS.init({
                easing: 'ease-in-out-sine',
                duration: 1000
            });
}

