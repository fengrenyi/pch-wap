$(function(){
	//显示/隐藏下拉选项
	$(".comScreen>dt").click(function(){
		var dd = $(this).siblings();
		var icon = $(this).find(".icon");

		if(dd.is(":hidden")){
			dd.slideDown(100);
			icon.removeClass("arrDown").addClass("arrUp");
		}else{
			dd.slideUp(100);
			icon.removeClass("arrUp").addClass("arrDown");
		}
	});

	//省份城市 点击事件
	$("#ul_province").delegate("li","click",function(){
		$(this).addClass("act").siblings().removeClass("act");

		var provinceTxt = $(this).html();
		if(provinceTxt!=="不限"){
			$(".areaTxt").html($(this).html());
		}else{
			$(".areaTxt").html("全部");
		}
	});
	$("#ul_city").delegate("li","click",function(){
		$(this).addClass("act").siblings().removeClass("act");

		var provinceTxt = $("#ul_province .act").html();
		var cityTxt = $(this).html();
		if(cityTxt!=="不限"){
			$(".areaTxt").html(provinceTxt+"-"+cityTxt);
		}else{
			$(".areaTxt").html(provinceTxt);
		}
	});

	//经营模式 点击事件
	$("#busModel").delegate("li","click",function(){
		$(this).addClass("act").siblings().removeClass("act");

		var modelTxt = $(this).html();
		if(modelTxt!=="不限"){
			$(".modelTxt").html(modelTxt);
		}else{
			$(".modelTxt").html("经营模式");
		}
	});

	//重置选项
	$(".resetBtn").click(function(){
		$(".comScreenList>li").removeClass("act");
		$(".areaTxt").html("全部");
		$(".modelTxt").html("经营模式");
		$("#ul_city").html('<li class="allCity">不限</li>');
	});

	addProvince();
});

//添加省份
function addProvince(){
	for(var i=0; i<addressArr.length; i++){
		var province = addressArr[i]["n"];
		var code = addressArr[i]["c"];
		$("#ul_province").append('<li code="'+code+'">'+province+'</li>');
	};
	addCity();
};

//添加城市
function addCity(){
	$("#ul_province").delegate("li","click",function(){
		var provinceCode = $(this).attr("code");
		var code, codeNum;

		for(var i=0; i<addressArr.length; i++){
			code = addressArr[i]["c"];
			if(provinceCode==code){
				codeNum = i;
				break;
			}
		};
		$("#ul_city").html('<li class="allCity">不限</li>');
		for(var i=0; i<addressArr[codeNum]["c2"].length; i++){
			var city = addressArr[codeNum]["c2"][i]["n"];
			var code = addressArr[codeNum]["c2"][i]["c"];
			$("#ul_city").append('<li code="'+code+'">'+city+'</li>');
		};
	});
};