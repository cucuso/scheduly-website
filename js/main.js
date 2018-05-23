$(window).bind('scroll', function() {
  var scrollTop = $(window).scrollTop();

  if (scrollTop < 100) {
    $('.logo').show();
    $('.logo').css({
      opacity: 1
    });
  } else if (scrollTop < 200) {
    $('.logo').show();
    $('.logo').css({
      opacity: 0.4
    });
  } else {
    $('.logo').hide();
  }
});

// JavaScript
window.sr = ScrollReveal({ reset: true });
sr.reveal('.logo');
sr.reveal('.ethos', { duration: 600 });
sr.reveal('.card');

$('#submitContact').click(function() {
  console.log(getFormData($('#contact-form')));

  $.ajax({
    url: 'http://localhost:8080/contact',
    type: 'POST',
    data: JSON.stringify(getFormData($('#contact-form'))),
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function() {
      alert(data);
    }
  });
});

function getFormData($form) {
  var unindexed_array = $form.serializeArray();
  var indexed_array = {};

  $.map(unindexed_array, function(n, i) {
    indexed_array[n['name']] = n['value'];
  });

  return indexed_array;
}
