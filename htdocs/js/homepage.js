$(document).on('ready', function(){
    var $body=$('body');

    if(window.innerWidth < 768){
        $body.css('background-image',"url("+$body.data("mobile")+")" );
    }else{
        $body.css('background-image',"url("+$body.data("desktop")+")");
    }

});/**
 * Created by 123 on 2017/1/8.
 */
