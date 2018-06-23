$(window).bind('scroll', function () {
  var scrollTop = $(window).scrollTop();
  var isVisible = $('#smiling').is(':visible');
  if (isVisible && scrollTop < 100 ) {
    $('.smiling').show();
    $('.smiling').css({
      opacity: 1
    });
  } else if (isVisible && scrollTop < 200 ) {
    $('.smiling').show();
    $('.smiling').css({
      opacity: 0.4
    });
  } else {
    $('.smiling').css({
      opacity: 0
    });
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
