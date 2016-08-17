//全选
(function($){
	$.fn.selectBox = function(opt){
		opt = $.extend({
			selectAll:".checkAll",     //全选 checkbox
			selectBox:".checkBox"      //子项 checkbox
		},opt);
		return this.each(function(){
			$.fn.select.check(opt);
		});
	};
	$.fn.select.check = function(opt){
		$(opt.selectAll).click(function(){
		 	var flag = $(this).attr("checked");

		 	if(flag){
		 		$(opt.selectAll).attr("checked", true);
		 		$(opt.selectBox).attr("checked", true);
		 	}else{
		 		$(opt.selectAll).attr("checked", false);
		 		$(opt.selectBox).attr("checked", false);
		 	}
	    });
		$(opt.selectBox).click(function(){
		 	var flag = true;
	        $(opt.selectBox).each(function(){
	        	if(!$(this).attr("checked")){
	            	flag = false;
	        	}
	        });
	        $(opt.selectAll).attr("checked", flag);
	    });
	};
})(jQuery)