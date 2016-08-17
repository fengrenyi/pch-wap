	$(function(){

		$(".info-nav li a").click(function(){
			$(this).addClass("act").parent("li").siblings("li").children("a").removeClass("act");
		})
		//添加标签
		$(".div-input span").click(function(){
            var valTag  = $(".input-tag").val();
		    var spanNum = $(".div-span span").length; 
		    if (valTag.length == "") {
                failureAlert("添加标词语不能为空");
		    	return false;
		    } else if(valTag.length > 10){
		    	failureAlert("添加标词语不能大于10个文字");
		    	return false;
		    }
		    
		    if(spanNum > 6){
		    	failureAlert("添加标签不能大于6个");
		    	return false;
		    }
			$(".div-span").append(' <span> '+ valTag + '<b></b> </span>')		    
             closeSpan();
		})

        function closeSpan(){
	       	$(".div-span span b").click(function(){
	           $(this).parent("span").remove();
	        })
        }
  
	})
