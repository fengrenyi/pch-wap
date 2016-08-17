$(function(){

  	$(".item .phone,.item .password").keyup(function(){
  		var val = $(this).val();
  		if (val =="") {
  		    $(this).siblings(".icon-x").hide();
  		    $(".form .btn").removeClass("btnAct");
  		}else{
  			$(this).siblings(".icon-x").show();
  			$(".form .btn").addClass("btnAct");
  		};

	});
  	$(".item .phone,.item .password").blur(function(){
  		var val = $(this).val();
  		if (val =="") {
  		    $(this).siblings(".icon-x").hide();
  		    $(".form .btn").removeClass("btnAct");
  		}else{
  			$(this).siblings(".icon-x").show();
  			$(".form .btn").addClass("btnAct");
  		};

	});
	$(".item .icon-x").click(function(){
		var phoneVal = $(".item .phone").val();
		var passWordVal = $(".item .password").val();
       $(this).siblings(".phone").val('');
       $(this).siblings(".password").val('');
       $(this).hide();
       if (phoneVal == ""|| passWordVal == "") {
       	    $(".form .btn").removeClass("btnAct");  
       }else{
       	    $(".form .btn").addClass("btnAct");
       };
	})

  $(".freeLogin span").toggle( 
		function () { 
			$(this).addClass("icon-choose"); 
		}, function () {
		   $(this).removeClass("icon-choose"); 
	});


  $(".item .pwdBtnShow").click(function(){
    if($(".pwdBtnShow").attr("isshow")=="false"){
        $(this).text("隐藏");
        $(".password").hide();
        $(".password-show").val($(".password").val());
        $(".password-show").show();
        $(".pwdBtnShow").attr("isshow","true");

    }
    else {
        $(this).text("显示");
        $(".password-show").hide();
        $(".password").val($(".password-show").val());
        $(".password").show();
        $(".pwdBtnShow").attr("isshow","false");

    
    }
    
  });


})