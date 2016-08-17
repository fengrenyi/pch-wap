$(function() {
	/*****滑动删除效果*****/
    function prevent_default(e) {
    	e.preventDefault();   //阻止默认事件
    	//阻止uc左右滑动功能
		var control = navigator.control || {};
		if (control.gesture) {control.gesture(false)};
    };
    function disable_scroll() {$('.oppCont').on('touchmove', prevent_default)};
    function enable_scroll() {$('.oppCont').unbind('touchmove', prevent_default)};

    var startX, startY, _left;
    var moveLen = 90;    //移动的距离
    $('.oppCont')
        .live('touchstart', function(e) {
            startX = e.originalEvent.targetTouches[0].pageX;
            startY = e.originalEvent.targetTouches[0].pageY;
            _left = $(e.currentTarget).offset().left;
        })
        .live('touchmove', function(e) {
            var changeX = e.originalEvent.targetTouches[0].pageX - startX;
            var changeY = e.originalEvent.targetTouches[0].pageY - startY;

            //判断滑动方向 水平或者垂直
            if(Math.abs(changeX) > Math.abs(changeY)){
        		disable_scroll();
            	//changeX = Math.min(Math.max(-moveLen, changeX), moveLen);   //设置changeX的最大值和最小值
				if(_left<=-moveLen && changeX<0){
					e.currentTarget.style.left = -moveLen + 'px';
				}else if(_left>=0 && changeX>0){
					e.currentTarget.style.left = '0px';
				}else{
					e.currentTarget.style.left = (changeX+_left)*0.6 + 'px';
				}
            }
        })
        .live('touchend', function(e) {
            var left = parseInt(e.currentTarget.style.left)
            var new_left;
            if (left < -30) {
                new_left = -moveLen+'px'
            } else {
                new_left = '0px'
            }
            $(e.currentTarget).animate({left: new_left}, 200);
            enable_scroll();
        });
	/*****滑动删除效果 end*****/
});