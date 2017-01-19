$(document).on('ready', function(){
    $('#content').css('min-height',$(window).height());
    $(window).on('scroll',function(){
        if(window.pageYOffset+$(window).height() >= $('#footer').offset().top){
            window.location.href="/contacts";
        }
    });
});/**
 * Created by 123 on 2017/1/8.
 */
