$(document).on('ready', function(){
    $('#content').css('min-height',$(window).height());
    $(window).on('scroll',function(){
        if(window.pageYOffset+$(window).height()+20 >= $('#footer').offset().top){
            window.location.href="/";
        }
        if(window.pageYOffset==0){
            window.location.href="/references";
        }
    });
});/**
 * Created by 123 on 2017/1/8.
 */
