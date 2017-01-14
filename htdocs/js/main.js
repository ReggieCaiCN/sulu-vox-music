$(document).on('ready', function(){
    $(function() {
        $("a[href*='#']:not([href='#'])").click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var $target = $(this.hash);
                var topoffset = $("body").data("offset") || 97;
                $target = $target.length && $target || $('[name="' + this.hash.slice(1) + '"]');
                if ($target.length) {
                    $('html, body').animate({
                        scrollTop: $target.offset().top - topoffset
                    }, 1000);
                    return false;
                }

            }
        });
    });

});/**
 * Created by 123 on 2017/1/8.
 */
