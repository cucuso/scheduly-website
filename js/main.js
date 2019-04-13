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

$('#submitContact').click(function () {
  console.log(getFormData($('#contact-form')));

  $.ajax({
    url: 'http://localhost:8080/contact',
    type: 'POST',
    data: JSON.stringify(getFormData($('#contact-form'))),
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function () {
      alert(data);
    }
  });
});

function getFormData($form) {
  var unindexed_array = $form.serializeArray();
  var indexed_array = {};

  $.map(unindexed_array, function (n, i) {
    indexed_array[n['name']] = n['value'];
  });

  return indexed_array;
}


// SCROLL REVEAL CODE
window.sr = ScrollReveal({ reset: true });
sr.reveal('.logo');
sr.reveal('.plan', { duration: 600 });
sr.reveal('.platform-card');
sr.reveal('#contact-card');

// INIT GLIDE CAROUSEL
var glide = new Glide('.glide', {
  type: 'slider',
  autoplay: 4000
});

glide.mount()