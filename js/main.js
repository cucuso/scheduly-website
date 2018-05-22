
$(window).bind('scroll', function () {

    var scrollTop = $(window).scrollTop();

     if (scrollTop < 100) {
                $('.logo').show();
                $('.logo').css({
                    'opacity': (1)
                });
            }
            else if (scrollTop < 200) {
                $('.logo').show();
                $('.logo').css({
                    'opacity': (.40)
                });

            } else {
                $('.logo').hide();
            }
});