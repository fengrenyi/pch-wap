$(function(){
	$(".getCode").click(function(){
		if(checkPhone()){
			$(this).hide().siblings(".getTime").show();
			$(".getTime>.time").data("time",$(".getTime>.time").html());

			timer = setInterval(dountdown,1000);
		}
	});
});

//验证手机号码
function checkPhone(){
	var phone = $(".phoneIpt").val();

	if(phone == ""){
		failureAlert("请输入手机号码");
		return false;
	}else if(phone.replace(/^[1][3-8]\d{9}$/, "") != ""){
		failureAlert("请输入正确的手机号码");
		return false;
	}
	return true;
};

//倒计时
var timer;
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