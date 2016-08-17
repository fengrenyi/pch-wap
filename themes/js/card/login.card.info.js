$(function(){
   //侧滑
   $(".div-top .div-themes").click(function(){
       $('.right-themes').stop().animate({"right":"0px"},{easing:"linear", duration:100});
       $(".fixed-bg").show();

   })

   $(".fixed-bg").click(function(){
      $('.right-themes').stop().animate({"right":"-19.5%"},{easing:"linear", duration:100});
      $(this).hide();
   })

   $(".form .div-submit .submit-btn").click(function(){
      $(".show-hint").show();

   })

  //换肤
   $(".right-themes ul li").click(function(){
     	// event.stopPropagation(); 
        var index  = $(this).index();
            if(index == 0){
                $("#img-bg").attr('src','../../themes/images/card/1/green/bg.png');

                $(".form .div-item").eq(0).find("label").css({ background: "url(../../themes/images/card/1/green/07.png) center no-repeat", backgroundSize: "100%" });
                $(".form .div-item").eq(1).find("label").css({background:"url(../../themes/images/card/1/green/05.png) center no-repeat",backgroundSize:"100%"});
                $(".form .div-item").eq(2).find("label").css({background:"url(../../themes/images/card/1/green/08.png) center no-repeat",backgroundSize:"100%"});
                $(".form .div-item").eq(3).find("label").css({background:"url(../../themes/images/card/1/green/09.png) center no-repeat",backgroundSize:"100%"});
                $(".form .div-item").eq(4).find("label").css({background:"url(../../themes/images/card/1/green/10.png) center no-repeat",backgroundSize:"100%"});
                $(".form .div-item").eq(5).find("label").css({background:"url(../../themes/images/card/1/green/02.png) center no-repeat",backgroundSize:"100%"});
                $(".form .div-item").eq(6).find("label").css({background:"url(../../themes/images/card/1/green/01.png) center no-repeat",backgroundSize:"100%"});
                $(".form .div-item").eq(7).find("label").css({background:"url(../../themes/images/card/1/green/03.png) center no-repeat",backgroundSize:"100%"}); 
                $(".form .div-submit .submit-btn").css("background","#28c83c")         

            };
            if (index == 1) {
                $("#img-bg").attr('src','../../themes/images/card/2/blue/bg.png');

                $(".form .div-item").eq(0).find("label").css({ background: "url(../../themes/images/card/2/blue/07.png) center no-repeat", backgroundSize: "100%" });
                $(".form .div-item").eq(1).find("label").css({background:"url(../../themes/images/card/2/blue/05.png) center no-repeat",backgroundSize:"100%"});
                $(".form .div-item").eq(2).find("label").css({background:"url(../../themes/images/card/2/blue/08.png) center no-repeat",backgroundSize:"100%"});
                $(".form .div-item").eq(3).find("label").css({background:"url(../../themes/images/card/2/blue/09.png) center no-repeat",backgroundSize:"100%"});
                $(".form .div-item").eq(4).find("label").css({background:"url(../../themes/images/card/2/blue/10.png) center no-repeat",backgroundSize:"100%"});
                $(".form .div-item").eq(5).find("label").css({background:"url(../../themes/images/card/2/blue/02.png) center no-repeat",backgroundSize:"100%"});
                $(".form .div-item").eq(6).find("label").css({background:"url(../../themes/images/card/2/blue/01.png) center no-repeat",backgroundSize:"100%"});
                $(".form .div-item").eq(7).find("label").css({background:"url(../../themes/images/card/2/blue/03.png) center no-repeat",backgroundSize:"100%"});
                $(".form .div-submit .submit-btn").css("background","#00a1af");  
            };
            if (index == 2) {
                $("#img-bg").attr('src','../../themes/images/card/3/deep-blue/bg.png');

                $(".form .div-item").eq(0).find("label").css({ background: "url(../../themes/images/card/3/deep-blue/07.png) center no-repeat", backgroundSize: "100%" });
                $(".form .div-item").eq(1).find("label").css({background:"url(../../themes/images/card/3/deep-blue/05.png) center no-repeat",backgroundSize:"100%"});
                $(".form .div-item").eq(2).find("label").css({background:"url(../../themes/images/card/3/deep-blue/08.png) center no-repeat",backgroundSize:"100%"});
                $(".form .div-item").eq(3).find("label").css({background:"url(../../themes/images/card/3/deep-blue/09.png) center no-repeat",backgroundSize:"100%"});
                $(".form .div-item").eq(4).find("label").css({background:"url(../../themes/images/card/3/deep-blue/10.png) center no-repeat",backgroundSize:"100%"});
                $(".form .div-item").eq(5).find("label").css({background:"url(../../themes/images/card/3/deep-blue/02.png) center no-repeat",backgroundSize:"100%"});
                $(".form .div-item").eq(6).find("label").css({background:"url(../../themes/images/card/3/deep-blue/01.png) center no-repeat",backgroundSize:"100%"});
                $(".form .div-item").eq(7).find("label").css({background:"url(../../themes/images/card/3/deep-blue/03.png) center no-repeat",backgroundSize:"100%"});
                $(".form .div-submit .submit-btn").css("background","#09277d");  
               
            };
            if (index == 3) {
                $("#img-bg").attr('src','../../themes/images/card/4/purple/bg.png');

                $(".form .div-item").eq(0).find("label").css({ background: "url(../../themes/images/card/4/purple/07.png) center no-repeat", backgroundSize: "100%" });
                $(".form .div-item").eq(1).find("label").css({background:"url(../../themes/images/card/4/purple/05.png) center no-repeat",backgroundSize:"100%"});
                $(".form .div-item").eq(2).find("label").css({background:"url(../../themes/images/card/4/purple/08.png) center no-repeat",backgroundSize:"100%"});
                $(".form .div-item").eq(3).find("label").css({background:"url(../../themes/images/card/4/purple/09.png) center no-repeat",backgroundSize:"100%"});
                $(".form .div-item").eq(4).find("label").css({background:"url(../../themes/images/card/4/purple/10.png) center no-repeat",backgroundSize:"100%"});
                $(".form .div-item").eq(5).find("label").css({background:"url(../../themes/images/card/4/purple/02.png) center no-repeat",backgroundSize:"100%"});
                $(".form .div-item").eq(6).find("label").css({background:"url(../../themes/images/card/4/purple/01.png) center no-repeat",backgroundSize:"100%"});
                $(".form .div-item").eq(7).find("label").css({background:"url(../../themes/images/card/4/purple/03.png) center no-repeat",backgroundSize:"100%"});  
                $(".form .div-submit .submit-btn").css("background","#bd1fea");               
            };
            if (index == 4) {
                $("#img-bg").attr('src','../../themes/images/card/5/red/bg.png');

                $(".form .div-item").eq(0).find("label").css({ background: "url(../../themes/images/card/5/red/07.png) center no-repeat", backgroundSize: "100%" });
                $(".form .div-item").eq(1).find("label").css({background:"url(../../themes/images/card/5/red/05.png) center no-repeat",backgroundSize:"100%"});
                $(".form .div-item").eq(2).find("label").css({background:"url(../../themes/images/card/5/red/08.png) center no-repeat",backgroundSize:"100%"});
                $(".form .div-item").eq(3).find("label").css({background:"url(../../themes/images/card/5/red/09.png) center no-repeat",backgroundSize:"100%"});
                $(".form .div-item").eq(4).find("label").css({background:"url(../../themes/images/card/5/red/10.png) center no-repeat",backgroundSize:"100%"});
                $(".form .div-item").eq(5).find("label").css({background:"url(../../themes/images/card/5/red/02.png) center no-repeat",backgroundSize:"100%"});
                $(".form .div-item").eq(6).find("label").css({background:"url(../../themes/images/card/5/red/01.png) center no-repeat",backgroundSize:"100%"});
                $(".form .div-item").eq(7).find("label").css({background:"url(../../themes/images/card/5/red/03.png) center no-repeat",backgroundSize:"100%"}); 
                $(".form .div-submit .submit-btn").css("background","#c8285d");    
            };  
            if (index == 5) {
                $("#img-bg").attr('src','../../themes/images/card/6/yellow/bg.png');

                $(".form .div-item").eq(0).find("label").css({ background: "url(../../themes/images/card/6/yellow/07.png) center no-repeat", backgroundSize: "100%" });
                $(".form .div-item").eq(1).find("label").css({background:"url(../../themes/images/card/6/yellow/05.png) center no-repeat",backgroundSize:"100%"});
                $(".form .div-item").eq(2).find("label").css({background:"url(../../themes/images/card/6/yellow/08.png) center no-repeat",backgroundSize:"100%"});
                $(".form .div-item").eq(3).find("label").css({background:"url(../../themes/images/card/6/yellow/09.png) center no-repeat",backgroundSize:"100%"});
                $(".form .div-item").eq(4).find("label").css({background:"url(../../themes/images/card/6/yellow/10.png) center no-repeat",backgroundSize:"100%"});
                $(".form .div-item").eq(5).find("label").css({background:"url(../../themes/images/card/6/yellow/02.png) center no-repeat",backgroundSize:"100%"});
                $(".form .div-item").eq(6).find("label").css({background:"url(../../themes/images/card/6/yellow/01.png) center no-repeat",backgroundSize:"100%"});
                $(".form .div-item").eq(7).find("label").css({background:"url(../../themes/images/card/6/yellow/03.png) center no-repeat",backgroundSize:"100%"}); 
                $(".form .div-submit .submit-btn").css("background","#eebd12");                   
            };  
            if (index == 6) {
                $("#img-bg").attr('src','../../themes/images/card/7/maize-yellow/bg.png');

                $(".form .div-item").eq(0).find("label").css({ background: "url(../../themes/images/card/7/maize-yellow/07.png) center no-repeat", backgroundSize: "100%" });
                $(".form .div-item").eq(1).find("label").css({background:"url(../../themes/images/card/7/maize-yellow/05.png) center no-repeat",backgroundSize:"100%"});
                $(".form .div-item").eq(2).find("label").css({background:"url(../../themes/images/card/7/maize-yellow/08.png) center no-repeat",backgroundSize:"100%"});
                $(".form .div-item").eq(3).find("label").css({background:"url(../../themes/images/card/7/maize-yellow/09.png) center no-repeat",backgroundSize:"100%"});
                $(".form .div-item").eq(4).find("label").css({background:"url(../../themes/images/card/7/maize-yellow/10.png) center no-repeat",backgroundSize:"100%"});
                $(".form .div-item").eq(5).find("label").css({background:"url(../../themes/images/card/7/maize-yellow/02.png) center no-repeat",backgroundSize:"100%"});
                $(".form .div-item").eq(6).find("label").css({background:"url(../../themes/images/card/7/maize-yellow/01.png) center no-repeat",backgroundSize:"100%"});
                $(".form .div-item").eq(7).find("label").css({background:"url(../../themes/images/card/7/maize-yellow/03.png) center no-repeat",backgroundSize:"100%"}); 
                 $(".form .div-submit .submit-btn").css("background","#ffca8b");                   
            };  
            if (index == 7) {
                $("#img-bg").attr('src','../../themes/images/card/8/gray/bg.png');

                $(".form .div-item").eq(0).find("label").css({ background: "url(../../themes/images/card/8/gray/07.png) center no-repeat", backgroundSize: "100%" });
                $(".form .div-item").eq(1).find("label").css({background:"url(../../themes/images/card/8/gray/05.png) center no-repeat",backgroundSize:"100%"});
                $(".form .div-item").eq(2).find("label").css({background:"url(../../themes/images/card/8/gray/08.png) center no-repeat",backgroundSize:"100%"});
                $(".form .div-item").eq(3).find("label").css({background:"url(../../themes/images/card/8/gray/09.png) center no-repeat",backgroundSize:"100%"});
                $(".form .div-item").eq(4).find("label").css({background:"url(../../themes/images/card/8/gray/10.png) center no-repeat",backgroundSize:"100%"});
                $(".form .div-item").eq(5).find("label").css({background:"url(../../themes/images/card/8/gray/02.png) center no-repeat",backgroundSize:"100%"});
                $(".form .div-item").eq(6).find("label").css({background:"url(../../themes/images/card/8/gray/01.png) center no-repeat",backgroundSize:"100%"});
                $(".form .div-item").eq(7).find("label").css({background:"url(../../themes/images/card/8/gray/03.png) center no-repeat",backgroundSize:"100%"}); 
                $(".form .div-submit .submit-btn").css("background","#526573");            
            };                                                                            
      })


})