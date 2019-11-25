$(window).bind('scroll', function () {
  var scrollTop = $(window).scrollTop();
  if (scrollTop < 100 ) {
    $('.calendar-img').show();
    $('.calendar-img').css({
      opacity: 1
    });
  } else if ( scrollTop < 200 ) {
    $('.calendar-img').show();
    $('.calendar-img').css({
      opacity: 0.4
    });
  } else {
    $('.calendar-img').hide();
  }
});

// SCROLL REVEAL CODE
window.sr = ScrollReveal({ reset: true });
sr.reveal('.logo');
sr.reveal('.plan', { duration: 600 });
sr.reveal('.platform-card');
sr.reveal('#contact-card');
