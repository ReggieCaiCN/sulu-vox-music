$(document).on('ready', function(){
    $(window).on('scroll',function(){
        if(window.pageYOffset+$(window).height() >= $('#footer').offset().top){
            window.location.href="/references";
        }
    });

});/**
 * Created by 123 on 2017/1/8.
 */
