/*global define, $, JSLINT, brackets, SmoothScroll */

// Type Kepad Plugin

$(document).ready(function () {
    "use strict";
    setTimeout(function () {
       
        $('#type').typeIt({
            strings: ["Do You Know", " Who We Are?!!", "let's Go"],
            speed: 80,
            cursor : false,
            breakLines: false
        });
        
    }, 5000);
    
});

// Demo Colors Mouseenter 

$(".fa-apple").mouseenter(function () {
    "use strict";
    $('.colors').animate({
        left: '-5px'
    }, 800);
});

// Demo Colors Mouseleve 

$('.colors').mouseleave(function () {
    "use strict";
    $('.colors').animate({
        left: '-106px'
    }, 800);
});

/***********************************************************************/
// 1- Start Colors Change to Brown 

$(".brown").click(function () {
    "use strict";
    $(".header").css({
        'background' : 'url(Home/Home-brown.jpg)',
        'background-size' : 'cover'
    });
    
    // Change any background have a class =>(Change) to other color ! 
    $(".change").css({
        'background' : '#A17649',
        'transition': 'all .5s ease-out'
    });
    $(".Mohamed-Eltahawy").css({
        'color' : '#A17649',
        'transition': 'all .5s ease-out'
    });
    
    // Change navbar link to any color 
    $(".changelink").css({
        'color': '#000000',
        'transition': 'all .5s ease-out'
    });
});

// End Colors Change to Brown 

/***********************************************************************/
// 2- Start Colors Change to Blue 

$(".blue").click(function () {
    "use strict";
    $(".header").css({
        'background' : 'url(Home/Home-blue.jpg)',
        'background-size' : 'cover'
    });
    
    // Change any background have a class =>(Change) to other color ! 
    $(".change").css({
        'background' : '#4D75A6',
        'transition': 'all .5s ease-out'
    });
    $(".Mohamed-Eltahawy").css({
        'color' : '#4D75A6',
        'transition': 'all .5s ease-out'
    });
    
    // Change navbar link to any color 
    $(".changelink").css({
        'color': '#000000',
        'transition': 'all .5s ease-out'
    });
});

// End Colors Change to Blue 

/***********************************************************************/
/* 3- Start Colors Change to Green */

$(".green").click(function () {
    "use strict";
    $(".header").css({
        'background' : 'url(Home/Home-green.jpg)',
        'background-size' : 'cover'
    });
    
    // Change any background have a class =>(Change) to other color ! 
    $(".change").css({
        'background' : '#4EA717',
        'transition': 'all .5s ease-out'
    });
    $(".Mohamed-Eltahawy").css({
        'color' : '#4EA717',
        'transition': 'all .5s ease-out'
    });
    
    // Change navbar link to any color 
    $(".changelink").css({
        'color': '#000000',
        'transition': 'all .5s ease-out'
    });
});

// End Colors Change to Green 

/***********************************************************************/
// 4- Start Colors Change to Yellow

$(".yellow").click(function () {
    "use strict";
    $(".header").css({
        'background' : 'url(Home/Home-yellow.jpg)',
        'background-size' : 'cover'
    });
    
// Start Change any background have a class=>(Change) to other colors!
    $(".change").css({
        'background' : '#FFC64A',
        'transition': 'all .5s ease-out'
    });
    $(".myname").css({
        'color' : '#FFC64A',
        'transition': 'all .5s ease-out'
    });
    
    // Change navbar link to any color 
    $(".changelink").css({
        'color': '#000000',
        'transition': 'all .5s ease-out'
    });
});

// End Colors Change to Yellow 

/***********************************************************************/

// Start Price $numbers show when mouseenter 

$('#price').mouseenter(function () {
   
    "use strict";
    $('.progress-number').each(function () {
        $(this).animate({
            left: $(this).data('percentage')
        }, {
            duration: 2000,
            step: function (now, fx) {
                var data = Math.round(now);
                $(this).text('$' + data);
            }
        });
    });
    
});
// End Price $numbers show when mouseenter 

// Start social media show when mouseenter 

$(".footer").mouseenter(function () {    // =>  Facebook 
    "use strict";
    $('.face').css({
        opacity: 0.0,
        visibility: "visible"
    }).animate({opacity: 1.0}, 500);
});
/********************************/
$(".footer").mouseenter(function () {    // => Twitter 
    "use strict";
    $('.twitt').css({
        opacity: 0.0,
        visibility : "visible"
    }).animate({opacity: 1.0}, 600);
});
/********************************/
$(".footer").mouseenter(function () {    // => LinkedIn 
    "use strict";
    $('.goo').css({
        opacity: 0.0,
        visibility : "visible"
    }).animate({opacity: 1.0}, 700);
});
/********************************/
$(".footer").mouseenter(function () {    // => Google Plus 
    "use strict";
    $('.linkd').css({
        opacity: 0.0,
        visibility : "visible"
    }).animate({opacity: 1.0}, 800);
});
/********************************/

// End social media show when mouseenter

// Start Plugin Smoth Scroll
var scroll = new SmoothScroll('a[href*="#"]')({
        speed: 10
    });