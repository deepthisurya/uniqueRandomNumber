(function($) {
    'use strict';

    /* ========================================================================= */
    /*	Page Preloader
    /* ========================================================================= */

    $(window).on('load', function() {
        $('.preloader').fadeOut(700);
    });

    /* ========================================================================= */
    /*	Post image slider
    /* ========================================================================= */

    $('#post-thumb, #gallery-post').slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000

    });

    $('#features').slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000
    });


    /* ========================================================================= */
    /*	Menu item highlighting
    /* ========================================================================= */


    $('#navigation').sticky({
        topSpacing: 0
    });


    /* ========================================================================= */
    /*	Magnific popup
    /* =========================================================================  */
    $('.image-popup').magnificPopup({
        type: 'image',
        removalDelay: 160, //delay removal by X to allow out-animation
        callbacks: {
            beforeOpen: function() {
                // just a hack that adds mfp-anim class to markup
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        closeOnContentClick: true,
        midClick: true,
        fixedContentPos: false,
        fixedBgPos: true
    });



    //   magnific popup video
    $('.popup-video').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-zoom-in',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: true
    });
    /* ========================================================================= */
    /*	Portfolio Filtering Hook
    /* =========================================================================  */

    $(document).ready(function() {
        var containerEl = document.querySelector('.filtr-container');
        var filterizd;
        if (containerEl) {
            filterizd = $('.filtr-container').filterizr({});
        }
        //Active changer
        $('.portfolio-filter button').on('click', function() {
            $('.portfolio-filter button').removeClass('active');
            $(this).addClass('active');
        });
    });

    /* ========================================================================= */
    /*	Testimonial Carousel
    /* =========================================================================  */

    //Init the carousel
    $('#testimonials').slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000
    });





    /* ========================================================================= */
    /*   Contact Form Validating
    /* ========================================================================= */

    // Listen for form submit
    document.getElementById('contact-form').addEventListener('contact-submit', submitForm);

    // Submit form
    function submitForm(e) {
        e.preventDefault();

        // Get values
        var name = getInputVal('name');
        var subject = getInputVal('subject');
        var email = getInputVal('email');
        var message = getInputVal('message');

        // Show alert
        document.querySelector('.mail-success').style.display = 'block';

        // Hide alert after 3 seconds
        setTimeout(function() {
            document.querySelector('.mail-success').style.display = 'none';
        }, 3000);

        // Clear form
        document.getElementById('contact-form').reset();
    }

    // Function to get get form values
    function getInputVal(id) {
        return document.getElementById(id).value;
    }

})(jQuery);
// End Jquery Function


/* ========================================================================= */
/*	Animated section
/* ========================================================================= */

var wow = new WOW({
    offset: 100, // distance to the element when triggering the animation (default is 0)
    mobile: false // trigger animations on mobile devices (default is true)
});
wow.init();


/* ========================================================================= */
/*	Smooth Scroll
/* ========================================================================= */
var scroll = new SmoothScroll('a[href*=\'#\']');