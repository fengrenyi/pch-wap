$(function(){
	_select();
	checkHistory();

	//当搜索框输入文字时
	$(".searchIpt").bind('input propertychange', function(){
		var _val = $(this).val();
		
		if(_val!=""){
			$(".hintBox").show();
		}
	});

	//获取焦点时 显示搜索按钮和关键词匹配
	$(".searchIpt").focus(function(){
		var _val = $(this).val();
		$(".screenBtn1").hide();
		$(".screenBtn2").show();

		if(_val!=""){
			$(".hintBox").show();
		}
	});
	//失去焦点时 隐藏关键词匹配
	$(".searchIpt").blur(function(){
		var _val = $(this).val();

		if(_val==""){
			$(".screenBtn1").show();
			$(".screenBtn2").hide();
		}
		$("html,body>*").click(function(e){
			if(!$(e.target).parents(".searchWrapper").first().is($(".searchWrapper"))){
				$(".hintBox").hide();
			}
			e.stopPropagation();
		})
	});

	//清空搜索历史
	$(".historyBtn").click(function(){
		$(".historyBtnBox").hide();
		$(".history").html("");
	});
});

//搜索下拉选项框
function _select(){
	$(".searchSelect").each(function(){
		var s = $(this);
		var select = s.find(".select");
		var option = s.find(".option");
		var li = option.find("li");
		var _show = function(){option.show();}
		var _hide = function(){option.hide();};
		select.click(function(){option.is(":hidden") ? _show() : _hide();});
		li.click(function(){select.html($(this).html());_hide();});
		$("html,body>*").click(function(e){
			if(!$(e.target).parents(".searchSelect").first().is(s)){_hide()};
			e.stopPropagation();
		})
	});
};

//判断有无搜索历史，有则显示清空按钮
function checkHistory(){
	var len = $(".history>li").length;
	if(len>0){
		$(".historyBtnBox").show();
	};
};