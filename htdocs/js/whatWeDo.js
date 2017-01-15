$(document).on('ready', function(){
    function generateCarousel($carouselContainer, $carouselItems, carouselVisibleItems, carouseloptions){
        var defaultcarouseloptions = {
            fx : "scrollHorz",
            carouselVisible : carouselVisibleItems,
            slides: $carouselItems,
            carouselFluid : true,
            log : false,
            paused : false,
            swipe : true,
            autoHeight: 'calc'
        }
        carouseloptions = $.extend(defaultcarouseloptions, carouseloptions);
        $carouselContainer.cycle(carouseloptions);
        return $carouselContainer;
    };

    var $cycle = $('.slidershow-box');
    $cycle.each(function (){
        generateCarousel($(this), $(this).find('.cycle-box'), 1, {
            paused : false,
            fx : "fade",
            next : $cycle.find('.cycle-next'),
            prev : $cycle.find('.cycle-prev'),
            pagerTemplate: "<span></span>",
            manualSpeed: 500,
            speed: 500
        });
    });

});/**
 * Created by 123 on 2017/1/8.
 */