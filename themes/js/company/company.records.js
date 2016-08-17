
$(function(){

	  /* 收藏/取消收藏 */
	  $(".ban_right_nav a .sc").click(function(){
	     $(this).hide().siblings(".qxsc").show();
	     successAlert("收藏成功");

	  })

	  $(".ban_right_nav a .qxsc").click(function(){
	       $(this).hide().siblings(".sc").show();
	       failureAlert("取消收藏");

	  })

    /* 拨打提示 */

    $(".contact .call").click(function(){
    	failureAlert("注册会员后才能拨打！");
    })



})























