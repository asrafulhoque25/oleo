/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - kawsarBinSiraj
 * @created_at  - 25-10-2020
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {

    // buttonEffect
    $(function () {
        document.querySelectorAll('.buttonEffect').forEach(button => button.innerHTML = '<div><span>' + button.textContent.split(' ').join('</span> <span>') + '</span></div>');
    });

    // progress-bar
    $(function () {
        var progressBar = document.querySelectorAll(".progress-bar");
        var time = 1500;
        progressBar.forEach(function (i) {
            let label = i.children[0];
            let line = i.children[1];
            let count = 0;
            let dataCount = label.getAttribute("data-count");
            let lineCount = line.children[0];

            let runTime = time / dataCount;

            let animationLineCount = setInterval(function () {
                if (count < dataCount) {
                    count++;
                    lineCount.style.width = count + '%';
                }
            }, runTime);
        });

    });

});



/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

$(document).ready(function () {

    // cartToggle

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 100) {
            $(".navigation").addClass("fixed");
        } else {
            $(".navigation").removeClass("fixed");
        }
    });


    // cartToggle
    $(".cartToggle , .cartToggle-close , .jkcard-wrapper-overlay").on('click', function (e) {
        e.preventDefault();
        $(".jkaddcard-wrp").toggleClass('cartToggle-wrapper-show');
    });


    if ($('.feedback-sliders').length) {
        $('.feedback-sliders').owlCarousel({
            items: 3,
            loop: true,
            margin: 30,
            nav: $(window).width() > 1140 ? true : false,
            dots: false,
            autoplay: true,
            center: $(window).width() > 1140 ? true : false,
            autoplayHoverPause: true,
            navText: ["<span class='fas fa-angle-left'></span>", "<span class='fas fa-angle-right'></span>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1024: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        });
    }

    // Mobile Menu Toggle Button jQuery
    if ($('#btnMenuToggle').length) {
        $("#btnMenuToggle").click(function () {
            $(".main-nav").toggleClass("mobile-menu-show");
            $(this).toggleClass("toggleIconChange");
        });
    }


    // js-modal-btn
    if ($('.js-modal-btn').length) {
        $(".js-modal-btn").modalVideo();
    }


    // a[data-rel^=lightcase]
    if ($('a[data-rel^=lightcase]').length) {
        $('a[data-rel^=lightcase]').lightcase();
    }

    // productCarousel
    if ($('#carouselSlideSync').length) {
        var carouselSlideSync = $("#carouselSlideSync");
        var carouselNavSync = $("#carouselNavSync");
        var slidesPerPage = 4; // globaly define number of elements per page
        var syncedSecondary = true;
        carouselSlideSync.owlCarousel({
            items: 1,
            slideSpeed: 2000,
            nav: false,
            autoplay: true,
            dots: false,
            loop: true,
            responsiveRefreshRate: 200,
            navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
        }).on('changed.owl.carousel', syncPosition);

        carouselNavSync
            .on('initialized.owl.carousel', function () {
                carouselNavSync.find(".owl-item").eq(0).addClass("current");
            })
            .owlCarousel({
                items: slidesPerPage,
                dots: false,
                nav: $(window).width() > 1100 ? true : false,
                smartSpeed: 200,
                slideSpeed: 500,
                slideBy: 1, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
                responsiveRefreshRate: 100
            }).on('changed.owl.carousel', syncPosition2);

        function syncPosition(el) {
            //if you set loop to false, you have to restore this next line
            //var current = el.item.index;
            //if you disable loop you have to comment this block
            var count = el.item.count - 1;
            var current = Math.round(el.item.index - (el.item.count / 2) - .5);

            if (current < 0) {
                current = count;
            }
            if (current > count) {
                current = 0;
            }
            //end block

            carouselNavSync
                .find(".owl-item")
                .removeClass("current")
                .eq(current)
                .addClass("current");
            var onscreen = carouselNavSync.find('.owl-item.active').length - 1;
            var start = carouselNavSync.find('.owl-item.active').first().index();
            var end = carouselNavSync.find('.owl-item.active').last().index();

            if (current > end) {
                carouselNavSync.data('owl.carousel').to(current, 100, true);
            }
            if (current < start) {
                carouselNavSync.data('owl.carousel').to(current - onscreen, 100, true);
            }
        }

        function syncPosition2(el) {
            if (syncedSecondary) {
                var number = el.item.index;
                carouselSlideSync.data('owl.carousel').to(number, 100, true);
            }
        }

        carouselNavSync.on("click", ".owl-item", function (e) {
            e.preventDefault();
            var number = $(this).index();
            carouselSlideSync.data('owl.carousel').to(number, 300, true);
        });
    }



    // back to top
    if ($("#backToTop").length) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 150) {
                $("#backToTop").fadeIn('slow');
            } else {
                $("#backToTop").fadeOut('slow');
            }
        });
        $("#backToTop").click(function () {
            $("html, body").animate({ scrollTop: 0 }, 600);
        });
    }

});