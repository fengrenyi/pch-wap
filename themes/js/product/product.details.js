$(function(){
	//banner切换
	TouchSlide({ 
		slideCell:"#proBan",
		titCell:".banNav ul",
		mainCell:".banImg ul",
		effect:"leftLoop",
		autoPlay:true,
		autoPage:true
	});

	//显示/隐藏提示信息
	$(".service>dt").toggle(function(){
			$(this).removeClass().addClass("arrUp");
			$(".detailsInfoGrey").slideDown(100);
		},function(){
			$(this).removeClass().addClass("arrDown");
			$(".detailsInfoGrey").slideUp(100);
		}
	);

	//产品详情切换
	$(".detailsTab>li").click(function(){
		$(this).addClass("act").siblings().removeClass("act");
		$(".detailsDesc").hide().eq($(this).index()).show();
	});

	//显示/隐藏二维码
	$(".companyBtn>.wmp").click(function(){
		$(".wxFixed").show();
	});
	$(".wxFixed>.wxClose").click(function(){
		$(".wxFixed").hide();
	});
});