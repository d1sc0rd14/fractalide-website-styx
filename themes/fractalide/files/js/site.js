/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - $(".navbar").height()
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

  /* Fixing full urls for scrollspy
  */
  var url = location.href.replace(/#.*/,'');
  $("a[href]").each(function(i,a) {
    var $a = $(a);
    var href = $a.attr('href');
    if (href.indexOf(url+'#') == 0) {
      href = href.replace(url,'');
      $a.attr('href',href);
    }
    $('body').scrollspy('refresh')
  });

  $("body").css("margin-bottom", $("footer").outerHeight() + "px");

  $( window ).resize(function() {
    $("body").css("margin-bottom", $("footer").outerHeight() + "px");
  });

});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: $(".navbar").height()
})
