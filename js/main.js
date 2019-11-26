$(window).bind('scroll', function () {
  var scrollTop = $(window).scrollTop();
  if (scrollTop < 100 ) {
    $('.calendar-img').show();
    $('.calendar-img').css({
      opacity: .7
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
sr.reveal('.plan', { duration: 600 });
sr.reveal('.demo-img', { duration: 600 });
sr.reveal('.busy-img', { duration: 600 });