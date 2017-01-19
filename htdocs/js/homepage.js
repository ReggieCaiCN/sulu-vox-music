$(document).on('ready', function(){
    var $section = $('#fullpage').find('.first-section');
    if(window.innerWidth < 768){
        $section.css('background-image',"url("+$section.data("mobile")+")" );
    }else{
        $section.css('background-image',"url("+$section.data("desktop")+")");
    }

    $('#fullpage').fullpage({
        afterLoad: function(anchorLink, index){
            var loadedSection = $(this);
            //using index
            if(index == 2){
                window.location.href="/about-us";
            }
        }
    });

});/**
 * Created by 123 on 2017/1/8.
 */
