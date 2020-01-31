(function ($) {
    "use strict"; // Start of use strict


    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 50)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 57
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };

    // Read More Button
    function myFunction() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");
      
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Read more";
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read less";
          moreText.style.display = "inline";
        }
      }

    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // Scroll reveal calls
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons-visi-misi', {
        duration: 600,
        scale: 0.5,
        delay: 300
    }, 200);
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.8,
        distance: '0px'
    }, 300);
    sr.reveal('.sr-button', {
        duration: 900,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);


 $('.slider-area').slick({
     centerMode: true,
     centerPadding: '50px',
     slidesToShow:3, // slide show untuk 2 klien (hapus jika sudah bertambah)
       autoplay: true,
           autoplaySpeed: 2000,
     responsive: [{
             breakpoint: 768,
             settings: {
                 arrows: false,
                 centerMode: true,
                 centerPadding: '40px',
                 slidesToShow: 3
             }
         },
         {
             breakpoint: 480,
             settings: {
                 arrows: false,
                 centerMode: true,
                 centerPadding: '40px',
                 slidesToShow: 1
             }
         }
     ]
 });


})(jQuery); // End of use strict
