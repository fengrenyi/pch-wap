(function($){
	$.fn.scrollPic = function(opt){
		opt = $.extend({
			scrollCycle:true,        //循环,为false时将停在两端,并且自动播放会关闭
			autoPlay:true,           //自动播放
			scrollNum:1,             //每次滚动的个数
			slideTimer:2000          //间隔时间
		},opt);
		return this.each(function(){
			$.fn.scrollPic.slider($(this),opt);
		});
	};
	$.fn.scrollPic.slider = function($this,opt){
		var box = $this.find(".slideBox");
		var boxUl = box.find("ul");
		var boxLiW = boxUl.children("li").outerWidth(true);
		var boxUlW = boxUl.children("li").length*boxLiW;
		var _btnLeft = $this.find(".slideLf");
		var _btnRight = $this.find(".slideRg");
		var timer;

		if(opt.scrollCycle){
			boxUl.css("width",boxUlW*2);
			boxUl.html(boxUl.html()+boxUl.html());
			if(opt.autoPlay){
				$this.hover(function(){stopPlay()},function(){autoPlay()});
				autoPlay();
			};
		}else{
			boxUl.css("width",boxUlW);
		};

		function slideLeft(){
			_btnRight.unbind("click",slideLeft);
			if(box.scrollLeft()>=boxUlW){
				if(opt.scrollCycle){box.scrollLeft(0);}
				box.animate({"scrollLeft":box.scrollLeft()+boxLiW*opt.scrollNum},500,function(){_btnRight.bind("click",slideLeft)});
			}else{
				box.animate({"scrollLeft":box.scrollLeft()+boxLiW*opt.scrollNum},500,function(){_btnRight.bind("click",slideLeft)});
			};
		};
		function slideRight(){
			_btnLeft.unbind("click",slideRight);
			if(box.scrollLeft()==0){
				if(opt.scrollCycle){box.scrollLeft(boxUlW);}
				box.animate({"scrollLeft":box.scrollLeft()-boxLiW*opt.scrollNum},500,function(){_btnLeft.bind("click",slideRight)});
			}else{
				box.animate({"scrollLeft":box.scrollLeft()-boxLiW*opt.scrollNum},500,function(){_btnLeft.bind("click",slideRight)});
			};
		};
		function autoPlay(){
			timer = setInterval(slideLeft,opt.slideTimer);
		};
		function stopPlay(){
			clearInterval(timer);
		};

		_btnRight.bind("click",slideLeft);
		_btnLeft.bind("click",slideRight);
	};
})(jQuery)