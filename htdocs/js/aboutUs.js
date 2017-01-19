$(document).on('ready', function(){
    $(window).on('scroll',function(){
        if(window.pageYOffset+$(window).height()+20 >= $('#footer').offset().top){
            window.location.href="/what-we-do";
        }
    });
});/**
 * Created by 123 on 2017/1/8.
 */
