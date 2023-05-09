$(function(){

    $(".card__tabs").lightTabs();
    
    $('.top__slider').slick({
        dots: true,
        arrows: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,

        prevArrow: '<button type="button" class="top__slider-arrowup"><img src="images/icons/arrow-up.png" alt=""></button>',
        nextArrow: '<button type="button" class="top__slider-arrowdown"><img src="images/icons/arrow-down.png" alt=""></button>'
    });

    $('.card__tabs-slider').slick({
        dots: true,
        arrows: false
    });

    $('.brand__slider').slick({
        prevArrow: '<button type="button" class="brand__slider-arrowleft"><img src="images/icons/arrow-left.png" alt=""></button>',
        nextArrow: '<button type="button" class="brand__slider-arrowright"><img src="images/icons/arrow-right.png" alt=""></button>'
    })

    $('.reviews__slider').slick({
        dots: true,
        centerMode: true,
        slidesToShow: 2,
        variableWidth: true,

        prevArrow: '<button type="button" class="reviews__slider-arrowleft"><img src="images/icons/arrow-left.png" alt=""></button>',
        nextArrow: '<button type="button" class="reviews__slider-arrowright"><img src="images/icons/arrow-right.png" alt=""></button>',
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 2
                }
              },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
    })
});

(function($){				
    jQuery.fn.lightTabs = function(options){

        var createTabs = function(){
            tabs = this;
            i = 0;
            
            showPage = function(i){
                $(tabs).children("div").children("div").hide();
                $(tabs).children("div").children("div").eq(i).show();
                $(tabs).children("ul").children("li").removeClass("active");
                $(tabs).children("ul").children("li").eq(i).addClass("active");
            }
                                
            showPage(0);				
            
            $(tabs).children("ul").children("li").each(function(index, element){
                $(element).attr("data-page", i);
                i++;                        
            });
            
            $(tabs).children("ul").children("li").click(function(){
                showPage(parseInt($(this).attr("data-page")));
            });				
        };		
        return this.each(createTabs);
    };	
})(jQuery);