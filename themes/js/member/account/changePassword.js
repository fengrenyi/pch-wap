$(function(){
	//获取验证码倒计时
	$(".getTime>.time").data("time",$(".getTime>.time").html());
	$(".getCode").click(function(){
		$(".getCode").hide();
		$(".getTime").show();
		var timer = setInterval(dountdown,1000);
		function dountdown(){
			var iTime = parseInt($(".getTime>.time").text());
			iTime-=1;
			if(iTime<1){
				clearInterval(timer);
				$(".getTime").hide();
				$(".getCode").show().html("重新获取验证码");
				$(".getTime>.time").text($(".getTime>.time").data("time"));
			}else{
				$(".getTime>.time").text(iTime);
			};
		};
	});

	// 设置密码
	$(".setIpt, .setIpt2").bind('input propertychange', function(){
		var _val = $(this).val();
		if($(".setIpt2").is(":hidden")){
			//password 赋值给 text
			$(".setIpt2").val(_val);
			setIpt();
		}else{
			//text 赋值给 password
			$(".setIpt").val(_val);
			setIpt();
		}

		function setIpt(){
			// 验证密码
			/*
			if(_val.replace(/^[\x21-\x7E]{6,20}$/, "") != ""){
				$(".findBtn1").show();
				$(".findBtn2").hide();
			}else{
				if(_val!=""){
					$(".findBtn1").hide();
					$(".findBtn2").show();
				}
			}
			*/
			// 显示/隐藏 清空按钮
			_val=="" ? $(".emptyPsw").hide():$(".emptyPsw").show();
		}
	});

	// 清空密码框
	$(".emptyPsw").click(function(){
		$(this).hide();
		$(".setIpt").val("");
		$(".setIpt2").val("");
		$(".findBtn1").show();
		$(".findBtn2").hide();
	});

	// 显示/隐藏 密码信息
	$(".switch").click(function(){
		var psw = $(".setIpt");
		var text = $(".setIpt2");
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