$(function(){
    //分导航点击切换
    $(".marketMenu>a").click(function(){
        var index = $(".marketMenu>a").index(this);
        //alert(index);
        $(this).addClass("act").siblings().removeClass("act");
        $(this).children("p").children("i").addClass("i-bg");
        $(this).siblings().children("p").children("i").removeClass("i-bg");

    });

  
});
/*
function lazyloadImg(){
      //图片延迟加载
      $("img.lazy").lazyload({
          effect : "fadeIn"
      });    
}
*/
/***** 上拉加载 ****/
var myScroll,
    pullDownEl, pullDownOffset,
    pullUpEl, pullUpOffset,
    generatedCount = 0;

//下拉刷新 （自定义实现此方法）
//myScroll.refresh();       // 数据加载完成后，调用界面更新方法
function pullDownAction () {
    // setTimeout(function () {
    //  location.reload();
    //  myScroll.refresh();
    // }, 1000);
};

//上拉加载 （自定义实现此方法）
//myScroll.refresh();       // 数据加载完成后，调用界面更新方法
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
                            +'<div class="excitingImg"> '
                            +'<img class="lazy" src="../../themes/images/market/img2.jpg"  data-original=""  title=""/>'
                           +' </div>'
                            +'<div class="excitingTxt">供应护眼台灯供应供应护眼台灯供应护眼台灯STY-915</div>'
                            +'<div class="excitingPrict">￥80.00</div>'
                        +'</a>'
                    +'</li>'
                );

            }
            myScroll.refresh();
            waterFall("exciting")
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

//瀑布流排版
   window.onload = function() {
        waterFall("exciting")
    }//尽量避免使用Jquery的ready，safari出现问题
    window.onresize = function() {
        waterFall("exciting")
    }
    function waterFall(element,space,children) {
        if(!element) return ;
        space = space || 8 ;
        children = children || "li" ;    //前三行默认设置，分别为外框元素id，上下留白，子元素标签名(子元素标签名使用太多或出错)
        var wrap = document.getElementById(element) ;
        var water = wrap.getElementsByTagName(children) ;
        var spaceWidth = water[0].offsetWidth ;    //获取子元素宽度(offsetWidth会获取块级元素的padding和border)
        var wrapWidth = wrap.offsetWidth ;    //获取外框元素宽度
        var colNum = Math.floor(wrapWidth/spaceWidth) ;    //计算获取外框元素所能承受列数
        var padding = Math.floor((wrapWidth - colNum*spaceWidth)/(colNum+1)) ;    //计算外框元素剩余宽度并计算左右留白
        var column = new Array() ;
        var length = water.length ;
        var maxHeight = 0 ;
        for(var i=0;i<colNum;i++) {    //初始化数组来计算各列初始top值和left值
            column[i] = new Array() ;
            column[i].top = space ;
            column[i].left = (spaceWidth * i)+padding*(i+1) ;    //计算各列距离左侧距离
        }
        for(var i=0;i<length;i++) {    //遍历所有子元素及瀑布流布局
            var index = i+1 ;    //计算该子元素属于第几列
            if(index%colNum==0) {
                sub = colNum ;
            } else {
                sub = index%colNum ;
            }
            _this = water ;
            _this[i].style.position = "absolute" ;
            _this[i].style.top = column[sub-1].top + "px" ;
            _this[i].style.left = column[sub-1].left + "px" ;
            column[sub-1].top += _this[i].offsetHeight + space ;    //计算各列最新高度以便赋值
        }
        for(var i=0;i<colNum;i++) {    //获取瀑布流整体布局高度
            if(column[i].top > maxHeight) maxHeight = column[i].top ;
        }
        wrap.style.height = maxHeight+"px" ;    //给外框元素赋值以防止出现子元素溢出外框元素
    }