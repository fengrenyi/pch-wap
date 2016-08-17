$(function() {
	bannerSlide();
});

//banner
function bannerSlide(){
	var liLen = $(".buyerQuBan>.banImg").find("li").length;
	if(liLen>0 && liLen<2){
		$(".buyerQuBan").show();
	}else if(liLen>1){
		$(".buyerQuBan").show();
		TouchSlide({ 
			slideCell:"#buyerQuBan",
			titCell:".banNav ul",
			mainCell:".banImg ul",
			effect:"leftLoop",
			autoPlay:true,
			autoPage:true
		});
	}
};