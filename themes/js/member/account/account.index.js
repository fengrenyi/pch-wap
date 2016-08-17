$(function(){
	//设置底部定位
	setPosition();
	$(window).resize(function(){setPosition()});
});

//设置底部定位
function setPosition(){
	var h = $(window).height();

	if(h<=310){
		$(".accountFoot").css("position","static");
	}else{
		$(".accountFoot").css("position","absolute");
	}
};