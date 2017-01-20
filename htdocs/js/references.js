$(document).on('ready', function(){
    $('#content').css('min-height',$(window).height());
    $(window).on('scroll',function(){
        if(window.pageYOffset+$(window).height()+20 >= $('#footer').offset().top){
            window.location.href="/contacts";
        }
        if(window.pageYOffset==0){
            window.location.href="/what-we-deliver";
        }
    });
});/**
 * Created by 123 on 2017/1/8.
 */
