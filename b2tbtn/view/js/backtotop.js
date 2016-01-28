$(document).ready(function() {
    $('body').append('<a href="#top" class="back-to-top">Back to top</a>');
    
    $('a.back-to-top').click(function(e){
        $('html, body').animate({scrollTop:0}, 'slow');
        e.preventDefault();
    });

    $(window).scroll(function() {
        if ($('body').offset().top < $(window).scrollTop()) {
            $('.back-to-top').slideDown('fast');
        } else {
            $('.back-to-top').slideUp('fast');
        }
    });
});
