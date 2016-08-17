$(function(){
	//综合排序下拉菜单
	$(".purSortSelect").each(function(){
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

			var st = $(this).attr("st");
		});
		$("body").click(function(i){ !$(i.target).parents(".purSortSelect").first().is(s) ? _hide():"";});
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
		var el = $("#purList");
		
		for (var i=0; i<10; i++) {
			el.append(
				'<a href="purchase.details.html" class="purItem">'
					+'<div class="purItemTil clearfix">'
						+'<div class="purItemTilTxt">中铁十七局公司观山湖高志塘项目五金相关工中铁十七局公司观山湖高志塘项目五金相关工</div>'
						+'<i class="purItemTilIco"></i>'
					+'</div>'
					+'<ul class="purItemNum clearfix">'
						+'<li class="row1">广东-深圳</li>'
						+'<li class="row2">1000个</li>'
						+'<li class="row3">剩余40天</li>'
					+'</ul>'
					+'<ul class="purItemDesc clearfix">'
						+'<li class="purItemCom">深圳金华科技有限公司</li>'
						+'<li class="purItemDay">截止2016-05-11</li>'
						+'<li class="purItemQuote">80家已报价</li>'
					+'</ul>'
				+'</a>'
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