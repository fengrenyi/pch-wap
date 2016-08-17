    $(function(){
     /* slide */
          var swiper = new Swiper('.swiperView', {
              pagination : '.paginationAct',
              loop:true,
              grabCursor: true
          });
          //Navigation arrows
          $('.arrow-left').click(function(e) {
                e.preventDefault()
              swiper.swipePrev()
          });
          $('.arrow-right').click(function(e) {
                e.preventDefault()
              swiper.swipeNext()
          });
          //Clickable pagination
          $('.paginationAct .swiper-pagination-switch').click(function(){
             swiper.swipeTo($(this).index())
          })
            setInterval(swiper.swipeNext,4000);        
        })