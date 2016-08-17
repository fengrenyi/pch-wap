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

	//是否含税&是否需要发票 显示/隐藏选项
	$(".inqArr").click(function(){
		var dd = $(this).parent().siblings("dd");

		if(dd.is(":hidden")){
			dd.slideDown(100);
			$(this).addClass("inqDown").removeClass("inqUp");
			
		}else{
			dd.slideUp(100);
			$(this).addClass("inqUp").removeClass("inqDown");
		};
	});
});