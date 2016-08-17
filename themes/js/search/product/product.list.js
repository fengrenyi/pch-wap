$(function(){
	//价格排序下拉菜单
	$(".sortSelect").each(function(){
		var s=$(this);
		var z=parseInt(s.css("z-index"));
		var dt=$(this).children("dt");
		var dd=$(this).children("dd");
		var _show=function(){dd.show();dt.addClass("act");s.css("z-index",z+1);};   //展开效果
		var _hide=function(){dd.hide();dt.removeClass("act");s.css("z-index",z);};    //关闭效果
		dt.click(function(){dd.is(":hidden")?_show():_hide();});
		dd.find("li").click(function(){
			$(this).addClass("act").siblings().removeClass("act");
			dt.children(".txt").html($(this).text());
			_hide();
			$(".sortList1").removeClass("act");
			$(".sortList2").addClass("act");
		});
		$("body").click(function(i){ !$(i.target).parents(".sortSelect").first().is(s) ? _hide():"";});
	});
	$(".sortList1").click(function(){
		$(".sortList1").addClass("act");
		$(".sortList2").removeClass("act");
		$(".sortList2").find("li").removeClass("act");
		$(".sortList2").find(".txt").html("价格");
	});
});


/***** 上拉加载 ****/
var myScroll,
	pullDownEl, pullDownOffset,
	pullUpEl, pullUpOffset,
	generatedCount = 0;

//下拉刷新 （自定义实现此方法）
//myScroll.refresh();		// 数据加载完成后，调用界面更新方法
function pullDownAction () {
	// setTimeout(function () {
	// 	location.reload();
	// 	myScroll.refresh();
	// }, 1000);
};

//上拉加载 （自定义实现此方法）
//myScroll.refresh();		// 数据加载完成后，调用界面更新方法
function pullUpAction () {
	setTimeout(function () {
		var el = $("#proListBox");

		for (var i=0; i<10; i++) {
			el.append(
				'<div class="proList clearfix">'
					+'<a href="">'
						+'<div class="proListImg"><img src="../../../themes/images/product/img1.jpg"></div>'
						+'<div class="proListInfo">'
							+'<div class="proListTxt">LED吸顶灯 卧室灯温馨浪漫室吸顶灯具田园灯饰儿童灯</div>'
							+'<div class="proListPrice">￥190.00</div>'
						+'</div>'
					+'</a>'
				+'</div>'
			);
		}
		myScroll.refresh();
	}, 1000);
}

// 初始化iScroll控件 
function loaded() {
	pullDownEl = document.getElementById('pullDown');
	pullDownOffset = pullDownEl.offsetHeight;
	pullUpEl = document.getElementById('pullUp');	
	pullUpOffset = pullUpEl.offsetHeight;
	
	myScroll = new iScroll('wrapper', {
		scrollbarClass: 'myScrollbar', /* 滚动条样式 */
		useTransition: false,
		checkDOMChanges: true,
		topOffset: pullDownOffset,
		onRefresh: function () {
			if (pullDownEl.className.match('loading')) {
				pullDownEl.className = '';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新';
			} else if (pullUpEl.className.match('loading')) {
				pullUpEl.className = '';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多';
			}
		},
		onScrollMove: function () {
			if (this.y > 5 && !pullDownEl.className.match('flip')) {
				pullDownEl.className = 'flip';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '释放立即更新';
				this.minScrollY = 0;
			} else if (this.y < 5 && pullDownEl.className.match('flip')) {
				pullDownEl.className = '';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新';
				this.minScrollY = -pullDownOffset;
			} else if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
				pullUpEl.className = 'flip';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = '释放立即加载';
				this.maxScrollY = this.maxScrollY;
			} else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
				pullUpEl.className = '';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多';
				this.maxScrollY = pullUpOffset;
			}
		},
		onScrollEnd: function () {
			if (pullDownEl.className.match('flip')) {
				pullDownEl.className = 'loading';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '努力加载中...';				
				pullDownAction();
			} else if (pullUpEl.className.match('flip')) {
				pullUpEl.className = 'loading';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = '努力加载中...';				
				pullUpAction();
			}
		}
	});
	
	setTimeout(function () { document.getElementById('wrapper').style.left = '0'; }, 800);
}

//初始化绑定iScroll控件 
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
document.addEventListener('DOMContentLoaded', loaded, false);
/***** 上拉加载 end****/