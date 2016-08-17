$(function(){
	//显示/隐藏下拉菜单
	$(".proScreenDt").click(function(){
		var dd = $(this).siblings();
		var icon = $(this).find(".icon");

		if(dd.is(":hidden")){
			dd.slideDown(100);
			icon.removeClass("inqDown").addClass("inqUp");
		}else{
			dd.slideUp(100);
			icon.removeClass("inqUp").addClass("inqDown");
		};
	});

	//类别点击效果
	$(".classificationArea>li").click(function(){
		$(".classificationArea>li").removeClass("act");
		$(this).addClass("act");
	});

	//重置选项
	$(".screenReset>a").click(function(){
		$(".screenIpt").val("");
		$(".classificationArea>li").removeClass("act");
	});
});