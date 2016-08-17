$(function(){
	//banner切换
	TouchSlide({ 
		slideCell:"#banner",
		titCell:".banNav ul",
		mainCell:".banImg ul",
		effect:"leftLoop",
		autoPlay:true,
		autoPage:true
	});

	// 分类菜单 显示/隐藏/切换
	$(".kitNav>li").click(function(){
		$(this).addClass("act").siblings().removeClass("act");
		$(".kitMenu").hide().eq($(this).index()).show();
	});
});