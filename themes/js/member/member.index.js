$(function(){
	//设置头像高度
	setHeight();
	$(window).resize(function(){setHeight()});
});

//设置头像高度
function setHeight(){
	var w = $(".headIconBox").width();
	$(".headIconBox").show().height(w).css({marginLeft:-w/2+"px",marginTop:-w/2+"px"});
	$(".headIconImg").show().height(w+8).css({marginLeft:-w/2-4+"px",marginTop:-w/2-4+"px"});
};