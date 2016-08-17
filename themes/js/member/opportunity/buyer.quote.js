$(function() {
	//点击加载更多
	$(".loadBtn>a").click(function(){
		$(".loadBtn").hide();
		$("body").append('<div id="loadingIco"><i class="icon"></i>努力加载中...</div>');
		$.ajax({
			url:"list2.html",
			success:function(msg){
				setTimeout(function(){
					$("#oppList").append(msg);
					$("#loadingIco").remove();
					$(".loadBtn").show();
				},500)
			}
		});
	});
});

//列表 删除
function deleteList($this){
	$this.parents('.oppItem').slideUp('fast', function() {
		$this.parents('.oppItem').remove();
	})
};