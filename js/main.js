/*
Template: Nipp - personal portfolio landing template
Template URI: http://codexmart.net
Description: This is html5 template
Author: codexmart
Author URI: http://codexmart.net
Version: 1.0

*/
/*================================================
[  Table of contents  ]
================================================
	01. jQuery MainMenu
	02. wow js active
	03. typed js active
	04. mixit up js active 

 
======================================
[ End table content ]
======================================*/


jQuery(function($) {
	"use strict";

/* -------------------------------
	Main Menu
---------------------------------- */

$(window).on('scroll', function () {
    if ($(window).scrollTop() > 200) {
        $('.navbar-fixed-top').addClass('top-nav-collapse');
    } else {
        $('.navbar-fixed-top').removeClass('top-nav-collapse');
    }
});
	
/*----------------------------
	Closes the Responsive Menu on Menu Item Click
	 ------------------------------ */


 $('a.page-scroll').on("click", function (event) {
    var anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - 5
    }, 1000);
    event.preventDefault();
});


/*----------------------------
 Closes the Responsive Menu on Menu Item Click
------------------------------ */
	
$('.navbar-collapse ul li a').on('click', function() {
	$('.navbar-toggle:visible').click();
});

/*----------------------------
 wow js
------------------------------ */

new WOW().init();


/*----------------------------
 mixItUp
------------------------------ */

$('.work-inner').mixItUp();
  
/*-------------------------------
magnipic popup js
----------------------------------
*/

 $('.gallery').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
		
        delegate: 'a', // the selector for gallery item
        type: 'image',
		        gallery: {
          enabled:true
        }
    });
});
$('.video').magnificPopup({
	disableOn: 700,
    items: {
		 id: 'v=', 
      src: 'https://www.youtube.com/embed/watch?v=6WLGpONIUSQ?rel=0&amp;showinfo=0&amp;controls=0&amp;autoplay=1&loop=1&amp',
   
    },
    type: 'iframe',
	fixedContentPos: false,
	mainClass: 'mfp-fade' // this is default type,
});




	$('.popup-youtube').magnificPopup({
		iframe: {
        patterns: {
           youtube: {
              index: 'youtube.com/', 
              id: 'v=', 
              src: 'https://www.youtube.com/embed/watch?v=6WLGpONIUSQ?rel=0&amp;showinfo=0&amp;controls=0&amp;autoplay=1&loop=1&amp' 
          }
        }
    }
	});

});