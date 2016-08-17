$(function(){

  	$(".item .userName,.item .passWord").keyup(function(){
  		var val = $(this).val();
  		if (val =="") {
  		    $(this).siblings(".icon-x").hide();
  		    $(".form .btn").removeClass("btnAct");
  		}else{
  			$(this).siblings(".icon-x").show();
  			$(".form .btn").addClass("btnAct");
  		};

	});
  	$(".item .userName,.item .passWord").blur(function(){
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
		var userNameVal = $(".item .userName").val();
		var passWordVal = $(".item .passWord").val();
       $(this).siblings(".userName").val('');
       $(this).siblings(".passWord").val('');
       $(this).hide();
       if (userNameVal == ""|| passWordVal == "") {
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

})