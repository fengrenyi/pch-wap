$(function(){
	//顶部菜单点击 显示/隐藏
	$(".topNavBtn").click(function(){
		if($(".topNav").is(":hidden")){
			$(this).addClass("topNavBtnAct");
			$(".topNav").slideDown(100);
		}else{
			$(this).removeClass("topNavBtnAct");
			$(".topNav").slideUp(100);
		}
	});

    //关闭顶部下载浮层fixed-box
    $(".download-box .icon-top-x").click(function(){
        $(".fixed-box").remove();
    });
});

/* 公共返回上一级 */
function pageBack() {
	var a = window.location.href;
	if (/#top/.test(a)) {
		window.history.go(-2);
		window.location.load(window.location.href)
	} else {
		window.history.back();
		window.location.load(window.location.href)
	}
}
//操作成功 弹窗
function successAlert(txt){
    $("body").append('<div id="successAlert" class="alertBox">'+txt+'</div>');

    var _width = parseInt($("#successAlert").width());
    var pdlf = parseInt($("#successAlert").css("padding-left"));
    var pdrg = parseInt($("#successAlert").css("padding-right"));
    var mglf = -(_width + pdlf + pdrg)/2 + 'px';

    $("#successAlert").css("margin-left",mglf);
    $("#successAlert").fadeIn(200);
    setTimeout(function(){
        $("#successAlert").fadeOut(300);
        setTimeout(function(){
            $("#successAlert").remove();
        },700);
    },1000);
};
//操作失败 弹窗
function failureAlert(txt){
    $("body").append('<div id="failureAlert" class="alertBox">'+txt+'</div>');

    var _width = parseInt($("#failureAlert").width());
    var pdlf = parseInt($("#failureAlert").css("padding-left"));
    var pdrg = parseInt($("#failureAlert").css("padding-right"));
    var mglf = -(_width + pdlf + pdrg)/2 + 'px';
    $("#failureAlert").css("margin-left",mglf);
    $("#failureAlert").fadeIn(200);
    setTimeout(function(){
        $("#failureAlert").fadeOut(300);
        setTimeout(function(){
            $("#failureAlert").remove();
        },700);
    },1500);
};
//警告、提示  弹窗
function alertInfo(txt){
    $("body").append('<div id="alertInfo" class="alertBox">'+txt+'</div>');
    var _width = parseInt($("#alertInfo").width());
    var pdlf = parseInt($("#alertInfo").css("padding-left"));
    var pdrg = parseInt($("#alertInfo").css("padding-right"));
    var mglf = -(_width + pdlf + pdrg)/2 + 'px';
    $("#alertInfo").css("margin-left",mglf);
    $("#alertInfo").fadeIn(200);
    setTimeout(function(){
        $("#alertInfo").fadeOut(300);
        setTimeout(function(){
            $("#alertInfo").remove();
        },700);
    },1500);
};
//调用  successAlert 和 failureAlert 文字后面要加感叹号，alertInfo 文字后面不需要加感叹号
//successAlert("保存成功！")
//failureAlert("保存失败！")
//alertInfo("请选择产品")

/* 封装tab  */
function  tabs(){
   $.fn.myTab = function (options) {
        return this.each(function () {
            var defaults = {
                operate: 'click',
                auto: true,
                time: 4000,
                delay: true,
                delayTime: 500
            }

            var opts = $.extend(defaults, options),
            self = $(this),
            items = self.children('ul.menu').children('li'),
            tabBox = self.children('div.main'),
            tabBoxItems = tabBox.children('div.tab'),
            timer;

            var tabHandle = function (index) {
                items.siblings('li').removeClass('on').end().eq(index).addClass('on');
                tabBoxItems.siblings().hide().end().eq(index).show()
            },

            delay = function (elem) {
                opts.delay ? setTimeout(function () { tabHandle(elem); }, opts.delayTime) : tabHandle(elem);
            },

            start = function () {
                if (!opts.auto) return;
                timer = setInterval(autoRun, opts.time);
            },

            autoRun = function () {
                var on = self.find('li.on'),
                    firstItem = items.eq(0),
                    len = items.length,
                    index = on.index() + 1,
                    item = index === len ? firstItem : on.next('li'),
                    i = index === len ? 0 : index;

                on.removeClass('on');
                item.addClass('on');
                tabBoxItems.siblings().hide().end().eq(i).show()
            };

            items.bind(opts.operate, function () {
                var index = items.index($(this));
                delay(index)
            });

            if (opts.auto) {
                start();
                self.hover(function () {
                    clearInterval(timer);
                    timer = undefined;
                }, function () {
                    start();
                })
            }

        })
    }
    //调用
   $('.tabs').myTab({
        operate:'click',
        time:3000,
        auto:false,
        delayTime: 0,
    })

}


/**  返回顶部  **/
function backTop() {
        $("body").append('<div class="back-top" title="返回顶部"></div>');
        var c = $(".back-top"),g = $(window);
        g.scroll(function() {
            var o = g.scrollTop();
            o > 100 ? c.fadeIn() : c.fadeOut()
        });
        c.click(function() {
            $("html,body").animate({
                scrollTop: 0
            })
        })
    }
backTop();