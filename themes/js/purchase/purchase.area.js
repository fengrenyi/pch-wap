$(function(){
	//点击添加选中状态
	$(".hotArea").delegate("li","click",function(){
		$(this).addClass("act").siblings().removeClass("act");
		$(this).parent().siblings(".purArea").children().removeClass("act");
		$(".city").html('<li class="allCity">不限</li>');
	});
	$(".province,.city").delegate("li","click",function(){
		$(this).addClass("act").siblings().removeClass("act");
		$(this).parent().siblings(".hotArea").children().removeClass("act");
	});
	
	addProvince();
});

//添加省份
function addProvince(){
	for(var i=0; i<addressArr.length; i++){
		var province = addressArr[i]["n"];
		var code = addressArr[i]["c"];
		$(".province").append('<li code="'+code+'">'+province+'</li>');
	};
	addCity();
};

//添加城市
function addCity(){
	$(".province").delegate("li","click",function(){
		var provinceCode = $(this).attr("code");
		var code, codeNum;

		for(var i=0; i<addressArr.length; i++){
			code = addressArr[i]["c"];
			if(provinceCode==code){
				codeNum = i;
				break;
			}
		};
		$(".city").html('<li class="allCity">不限</li>');
		for(var i=0; i<addressArr[codeNum]["c2"].length; i++){
			var city = addressArr[codeNum]["c2"][i]["n"];
			var code = addressArr[codeNum]["c2"][i]["c"];
			$(".city").append('<li code="'+code+'">'+city+'</li>');
		};
	});
};