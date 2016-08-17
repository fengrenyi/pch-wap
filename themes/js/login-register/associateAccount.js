$(function(){
	$(".astPswIpt, .astTxtIpt").bind('input propertychange', function(){
		var _val = $(this).val();
		_val=="" ? $(".emptyPsw").hide():$(".emptyPsw").show();  // 显示/隐藏 清空按钮
		if($(".astTxtIpt").is(":hidden")){
			//password 赋值给 text
			$(".astTxtIpt").val(_val);
		}else{
			//text 赋值给 password
			$(".astPswIpt").val(_val);
		}
	});

	// 清空密码框
	$(".emptyPsw").click(function(){
		$(this).hide();
		$(".astPswIpt").val("");
		$(".astTxtIpt").val("");
	});

	// 显示/隐藏 密码信息
	$(".switch").click(function(){
		var psw = $(".astPswIpt");
		var text = $(".astTxtIpt");
		if(text.is(":hidden")){
			$(this).html("隐藏");
			psw.hide();
			text.show();
		}else{
			$(this).html("显示");
			psw.show();
			text.hide();
		}
	});
});