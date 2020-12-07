$(window).bind('scroll', function () {
  var scrollTop = $(window).scrollTop();
  if (scrollTop < 100) {
    $('.calendar-img').show();
    $('.calendar-img').css({
      opacity: 0.7,
    });
  } else if (scrollTop < 200) {
    $('.calendar-img').show();
    $('.calendar-img').css({
      opacity: 0.4,
    });
  } else {
    $('.calendar-img').hide();
  }
});
