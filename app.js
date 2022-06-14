$(function () {

    let top = $("#top");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();


    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function () {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);

    });

    function checkScroll(scrollPos, introH) {
        if (scrollPos > introH) {
            top.addClass("fixed");
        } else {
            top.removeClass("fixed");
        }
    }

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 50
        }, 700);
    });

    let nav = $("#nav");
    let navToggle = $("#navToggle");

    navToggle.on("click", function (event) {

        event.preventDefault();
        nav.toggleClass("show");
    });


    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });



});