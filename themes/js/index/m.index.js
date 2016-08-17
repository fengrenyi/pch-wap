$(function(){
	/*heade */
	$(window).scroll(function() {
			var scrolltop = $(this).scrollTop();
			if (scrolltop >= 10) {
				$(".header").fadeIn(2000).addClass("headerBg").removeClass("headerAct");
				$(".fixed-box").hide();

			} else {
				$(".header").fadeIn(2000).addClass("headerAct").removeClass("headerBg");
				$(".fixed-box").show();
			};
		});	
	 /* icon-top-x */
      $(".download-box .icon-top-x").click(function(){
        $(".fixed-box").remove();
        $(".banner").css("margin-top","0px");
        $(".header").css({ position: "fixed",top: "0px" });
      })
	 /* slide */
	//banner切换
	TouchSlide({ 
		slideCell:"#banner",
		titCell:".banNav ul",
		mainCell:".banImg ul",
		effect:"leftLoop",
		autoPlay:true,
		autoPage:true
	});

	/* news */
     $(".tab_content ul").height($(".tab_content ul .tab_content_1").height());
	       $(".nav_tab li").click(function(){
	           $(this).addClass("act").siblings().removeClass();
	            var _index=$(".nav_tab li").index(this);
	          if(_index==0){
	               $(".tab_content ul").height($(".tab_content ul .tab_content_1").height());
	               $(".tab_content ul").animate({left: 0},200);

	          }else if(_index==1){
	               $(".tab_content ul").height($(".tab_content ul .tab_content_2").height());
	               $(".tab_content ul").animate({left: "-100%"},200);
	          }else{
	              $(".tab_content ul").height($(".tab_content ul .tab_content_3").height());
	              $(".tab_content ul").animate({left: "-200%"},200);
	          }
	    })
	       
     /* thumbs-cotnainer */
	  $('.thumbs-cotnainer').each(function(){
		    $(this).swiper({
		      slidesPerView:'auto',
		      offsetPxBefore:10,
		      offsetPxAfter:5,
		      calculateHeight: true
		    })
      })       

})


/* 百度统计 */

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?e9f18d1a353dfb022f09a22bf4f95828";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
