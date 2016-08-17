$(function(){
	//分导航点击切换
	$(".marketMenu>a").click(function(){
		$(this).addClass("act").siblings().removeClass("act");

		//选中状态滑动效果
		var mark = $(this).position().left;
		$(".marketMenu .mark").animate({left:mark},150);
	});

	//banner切换
	TouchSlide({ 
		slideCell:"#banner",
		titCell:".banNav ul",
		mainCell:".banImg ul",
		effect:"leftLoop",
		autoPlay:true,
		autoPage:true
	});

	//今日精品切换
	TouchSlide({ 
		slideCell:"#boutiquePic",
		titCell:".boutiqueNav ul",
		mainCell:".boutiqueList",
		autoPage:true
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
		var el = $("#exciting");
		var li = el.children("li");
		if(li.length>=20){
			$("#pullUp").html("没有更多了");
		}else{
			for (var i=0; i<4; i++) {
				el.append(
					'<li>'
						+'<a href="">'
							+'<div class="excitingImg"><img src="../../themes/images/market/img2.jpg"></div>'
							+'<div class="excitingTxt">供应护眼台灯供应供应护眼台灯供应护眼台灯STY-915</div>'
							+'<div class="excitingPrict">￥80.00</div>'
						+'</a>'
					+'</li>'
				);
			}
			myScroll.refresh();
		}
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