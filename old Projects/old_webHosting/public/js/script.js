jQuery(function($) {
    "use strict";

    /* ========================================================================= */
    /*	Page Preloader
    /* ========================================================================= */

    window.onload = function() {
        document.getElementById('preloader').style.display = 'none';
    }


    /* ========================================================================= */
    /*	Post image slider
    /* ========================================================================= */

    $("#post-thumb, #gallery-post").slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000

    });

    $("#features").slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000
    });


    /* ========================================================================= */
    /*	Menu item highlighting
    /* ========================================================================= */


    $("#navigation").sticky({
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


    /* ========================================================================= */
    /*	Contact Form Customization
    /* =========================================================================  */


    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyBhn9XhbhX5d6lQWPow8-2eOMnrGV1vDKo",
        authDomain: "webprojects-575f0.firebaseapp.com",
        databaseURL: "https://webprojects-575f0.firebaseio.com",
        projectId: "webprojects-575f0",
        storageBucket: "webprojects-575f0.appspot.com",
        messagingSenderId: "853618245955",
        appId: "1:853618245955:web:3b8b5ae571571774d26ff6",
        measurementId: "G-DCMR96TFVE"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    //reference messages collection
    var messageRef = firebase.database().ref('messages');

    document.getElementById('contact-form').addEventListener('contact-submit', submitForm);

    function submitForm(e) {
        e.preventDefault();

        //get form values
        const name = getInputVal('name');
        const email = getInputVal('email');
        const subject = getInputVal('subject');
        const message = getInputVal('message');

        //save message
        saveMessage(name, email, subject, message);

        //show alert
        document.querySelector('.alert').style.display = 'block';
        document.getElementById('contact-form').reset();

        //hide alert after 3 sec
        setTimeout(function() {
            document.querySelector('.alert').style.display = 'none';
        }, 3000);
    }


    //function to get form values
    function getInputVal(id) {
        return document.getElementById(id).value;
    }

    //save message to firebase

    function saveMessage(name, email, subject, message) {
        var newMessageRef = messageRef.push();
        newMessageRef.set({
            name: name,
            email: email,
            subject: subject,
            message: message
        });
    }

    /* ========================================================================= */
    /*	Contact Form end
    /* =========================================================================  */

    /* ========================================================================= */
    /*	Portfolio Filtering Hook
    /* =========================================================================  */

    var mixer = mixitup('.portfolio-items-wrapper');

    /* ========================================================================= */
    /*	Testimonial Carousel
    /* =========================================================================  */

    //Init the carousel
    $("#testimonials").slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000
    });

});
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
var scroll = new SmoothScroll('a[href*="#"]');