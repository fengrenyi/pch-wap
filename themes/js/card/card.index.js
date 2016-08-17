
 $(function(){

     //大二维码
     $(".div-top .ewm-code").click(function(){
        $(".img-box").show();  
     })
     $(".img-box .icon-top-x").click(function(){
        $(".img-box").hide();  
     })
    
      //菜单
      $(".menu-right-nav").click(function(){
        $('.menu-bottom').show().stop().animate({"bottom":"0px"},{easing:"easeOutBounce", duration:500});
      })

     $(".menu-dl dd .up-show").click(function(){
         $('.menu-bottom').stop().animate({"bottom":"-225px"},{easing:"linear", duration:300});
      })

     //切换
     // $(".menu-dl dd").eq(2).click(function(){
     //    $(".menu-bottom .themes").show();
     //    $(".menu-bottom .share").hide();
     // })
     $(".menu-dl dd").eq(3).click(function(){
        $(".menu-bottom .share").show();
        $(".menu-bottom .themes").hide();
      })
     $(".menu-bottom .share-ul li").eq(5).click(function(){
        $(".menu-bottom .themes").show();
        $(".menu-bottom .share").hide();

     })
     //换肤
      $(".menu-bottom .themes li").click(function(){
        var index  = $(this).index();
            if(index == 0){
                $("#img-bg").attr('src','../../themes/images/card/1/green/bg.png');
                $('#img-title1').attr('src','../../themes/images/card/1/green/title1.png');
                $('#img-title2').attr('src','../../themes/images/card/1/green/title2.png');
                $('#img-title3').attr('src','../../themes/images/card/1/green/title3.png');

                $(".dl-nav dd").eq(0).find("i").css({ background: "url(../../themes/images/card/1/green/01.png) center no-repeat", backgroundSize: "100%" });
                $(".dl-nav dd").eq(1).find("i").css({background:"url(../../themes/images/card/1/green/02.png) center no-repeat",backgroundSize:"100%"});
                $(".dl-nav dd").eq(2).find("i").css({background:"url(../../themes/images/card/1/green/03.png) center no-repeat",backgroundSize:"100%"});
                $(".dl-nav dd").eq(3).find("i").css({background:"url(../../themes/images/card/1/green/04.png) center no-repeat",backgroundSize:"100%"});
                $(".dl-nav dd").eq(4).find("i").css({background:"url(../../themes/images/card/1/green/05.png) center no-repeat",backgroundSize:"100%"});
                $(".dl-nav dd").eq(5).find("i").css({background:"url(../../themes/images/card/1/green/06.png) center no-repeat",backgroundSize:"100%"});
                $(".div-label span").css("background","#28c83c");
            };
            if (index == 1) {
                $("#img-bg").attr('src','../../themes/images/card/2/blue/bg.png');
                $('#img-title1').attr('src','../../themes/images/card/2/blue/title1.png');
                $('#img-title2').attr('src','../../themes/images/card/2/blue/title2.png');
                $('#img-title3').attr('src','../../themes/images/card/2/blue/title3.png');

               $(".dl-nav dd").eq(0).find("i").css({background:"url(../../themes/images/card/2/blue/01.png) center no-repeat",backgroundSize:"100%"});
                $(".dl-nav dd").eq(1).find("i").css({background:"url(../../themes/images/card/2/blue/02.png) center no-repeat",backgroundSize:"100%"});
                $(".dl-nav dd").eq(2).find("i").css({background:"url(../../themes/images/card/2/blue/03.png) center no-repeat",backgroundSize:"100%"});
                $(".dl-nav dd").eq(3).find("i").css({background:"url(../../themes/images/card/2/blue/04.png) center no-repeat",backgroundSize:"100%"});
                $(".dl-nav dd").eq(4).find("i").css({background:"url(../../themes/images/card/2/blue/05.png) center no-repeat",backgroundSize:"100%"});
                $(".dl-nav dd").eq(5).find("i").css({background:"url(../../themes/images/card/2/blue/06.png) center no-repeat",backgroundSize:"100%"});
                $(".div-label span").css("background","#00a1af");
            };
            if (index == 2) {
                $("#img-bg").attr('src','../../themes/images/card/3/deep-blue/bg.png');
                $('#img-title1').attr('src','../../themes/images/card/3/deep-blue/title1.png');
                $('#img-title2').attr('src','../../themes/images/card/3/deep-blue/title2.png');
                $('#img-title3').attr('src','../../themes/images/card/3/deep-blue/title3.png');

                $(".dl-nav dd").eq(0).find("i").css({background:"url(../../themes/images/card/3/deep-blue/01.png) center no-repeat",backgroundSize:"100%"});
                $(".dl-nav dd").eq(1).find("i").css({background:"url(../../themes/images/card/3/deep-blue/02.png) center no-repeat",backgroundSize:"100%"});
                $(".dl-nav dd").eq(2).find("i").css({background:"url(../../themes/images/card/3/deep-blue/03.png) center no-repeat",backgroundSize:"100%"});
                $(".dl-nav dd").eq(3).find("i").css({background:"url(../../themes/images/card/3/deep-blue/04.png) center no-repeat",backgroundSize:"100%"});
                $(".dl-nav dd").eq(4).find("i").css({background:"url(../../themes/images/card/3/deep-blue/05.png) center no-repeat",backgroundSize:"100%"});
                $(".dl-nav dd").eq(5).find("i").css({background:"url(../../themes/images/card/3/deep-blue/06.png) center no-repeat",backgroundSize:"100%"});
                $(".div-label span").css("background","#09277d");                
            };
            if (index == 3) {
                $("#img-bg").attr('src','../../themes/images/card/4/purple/bg.png');
                $('#img-title1').attr('src','../../themes/images/card/4/purple/title1.png');
                $('#img-title2').attr('src','../../themes/images/card/4/purple/title2.png');
                $('#img-title3').attr('src','../../themes/images/card/4/purple/title3.png');

                $(".dl-nav dd").eq(0).find("i").css({background:"url(../../themes/images/card/4/purple/01.png) center no-repeat",backgroundSize:"100%"});
                $(".dl-nav dd").eq(1).find("i").css({background:"url(../../themes/images/card/4/purple/02.png) center no-repeat",backgroundSize:"100%"});
                $(".dl-nav dd").eq(2).find("i").css({background:"url(../../themes/images/card/4/purple/03.png) center no-repeat",backgroundSize:"100%"});
                $(".dl-nav dd").eq(3).find("i").css({background:"url(../../themes/images/card/4/purple/04.png) center no-repeat",backgroundSize:"100%"});
                $(".dl-nav dd").eq(4).find("i").css({background:"url(../../themes/images/card/4/purple/05.png) center no-repeat",backgroundSize:"100%"});
                $(".dl-nav dd").eq(5).find("i").css({background:"url(../../themes/images/card/4/purple/06.png) center no-repeat",backgroundSize:"100%"});
                $(".div-label span").css("background","#bd1fea");                    
            };
            if (index == 4) {
                $("#img-bg").attr('src','../../themes/images/card/5/red/bg.png');
                $('#img-title1').attr('src','../../themes/images/card/5/red/title1.png');
                $('#img-title2').attr('src','../../themes/images/card/5/red/title2.png');
                $('#img-title3').attr('src','../../themes/images/card/5/red/title3.png');

                $(".dl-nav dd").eq(0).find("i").css({background:"url(../../themes/images/card/5/red/01.png) center no-repeat",backgroundSize:"100%"});
                $(".dl-nav dd").eq(1).find("i").css({background:"url(../../themes/images/card/5/red/02.png) center no-repeat",backgroundSize:"100%"});
                $(".dl-nav dd").eq(2).find("i").css({background:"url(../../themes/images/card/5/red/03.png) center no-repeat",backgroundSize:"100%"});
                $(".dl-nav dd").eq(3).find("i").css({background:"url(../../themes/images/card/5/red/04.png) center no-repeat",backgroundSize:"100%"});
                $(".dl-nav dd").eq(4).find("i").css({background:"url(../../themes/images/card/5/red/05.png) center no-repeat",backgroundSize:"100%"});
                $(".dl-nav dd").eq(5).find("i").css({background:"url(../../themes/images/card/5/red/06.png) center no-repeat",backgroundSize:"100%"});
                $(".div-label span").css("background","#c8285d");     
            };  
            if (index == 5) {
                $("#img-bg").attr('src','../../themes/images/card/6/yellow/bg.png');
                $('#img-title1').attr('src','../../themes/images/card/6/yellow/title1.png');
                $('#img-title2').attr('src','../../themes/images/card/6/yellow/title2.png');
                $('#img-title3').attr('src','../../themes/images/card/6/yellow/title3.png');

                $(".dl-nav dd").eq(0).find("i").css({background:"url(../../themes/images/card/6/yellow/01.png) center no-repeat",backgroundSize:"100%"});
                $(".dl-nav dd").eq(1).find("i").css({background:"url(../../themes/images/card/6/yellow/02.png) center no-repeat",backgroundSize:"100%"});
                $(".dl-nav dd").eq(2).find("i").css({background:"url(../../themes/images/card/6/yellow/03.png) center no-repeat",backgroundSize:"100%"});
                $(".dl-nav dd").eq(3).find("i").css({background:"url(../../themes/images/card/6/yellow/04.png) center no-repeat",backgroundSize:"100%"});
                $(".dl-nav dd").eq(4).find("i").css({background:"url(../../themes/images/card/6/yellow/05.png) center no-repeat",backgroundSize:"100%"});
                $(".dl-nav dd").eq(5).find("i").css({background:"url(../../themes/images/card/6/yellow/06.png) center no-repeat",backgroundSize:"100%"});
                $(".div-label span").css("background","#eebd12");                  
            };  
            if (index == 6) {
                $("#img-bg").attr('src','../../themes/images/card/7/maize-yellow/bg.png');
                $('#img-title1').attr('src','../../themes/images/card/7/maize-yellow/title1.png');
                $('#img-title2').attr('src','../../themes/images/card/7/maize-yellow/title2.png');
                $('#img-title3').attr('src','../../themes/images/card/7/maize-yellow/title3.png');

                $(".dl-nav dd").eq(0).find("i").css({background:"url(../../themes/images/card/7/maize-yellow/01.png) center no-repeat",backgroundSize:"100%"});
                $(".dl-nav dd").eq(1).find("i").css({background:"url(../../themes/images/card/7/maize-yellow/02.png) center no-repeat",backgroundSize:"100%"});
                $(".dl-nav dd").eq(2).find("i").css({background:"url(../../themes/images/card/7/maize-yellow/03.png) center no-repeat",backgroundSize:"100%"});
                $(".dl-nav dd").eq(3).find("i").css({background:"url(../../themes/images/card/7/maize-yellow/04.png) center no-repeat",backgroundSize:"100%"});
                $(".dl-nav dd").eq(4).find("i").css({background:"url(../../themes/images/card/7/maize-yellow/05.png) center no-repeat",backgroundSize:"100%"});
                $(".dl-nav dd").eq(5).find("i").css({background:"url(../../themes/images/card/7/maize-yellow/06.png) center no-repeat",backgroundSize:"100%"});
                $(".div-label span").css("background","#ffca8b");                  
            };  
            if (index == 7) {
                $("#img-bg").attr('src','../../themes/images/card/8/gray/bg.png');
                $('#img-title1').attr('src','../../themes/images/card/8/gray/title1.png');
                $('#img-title2').attr('src','../../themes/images/card/8/gray/title2.png');
                $('#img-title3').attr('src','../../themes/images/card/8/gray/title3.png');

               $(".dl-nav dd").eq(0).find("i").css({background:"url(../../themes/images/card/8/gray/01.png) center no-repeat",backgroundSize:"100%"});
                $(".dl-nav dd").eq(1).find("i").css({background:"url(../../themes/images/card/8/gray/02.png) center no-repeat",backgroundSize:"100%"});
                $(".dl-nav dd").eq(2).find("i").css({background:"url(../../themes/images/card/8/gray/03.png) center no-repeat",backgroundSize:"100%"});
                $(".dl-nav dd").eq(3).find("i").css({background:"url(../../themes/images/card/8/gray/04.png) center no-repeat",backgroundSize:"100%"});
                $(".dl-nav dd").eq(4).find("i").css({background:"url(../../themes/images/card/8/gray/05.png) center no-repeat",backgroundSize:"100%"});
                $(".dl-nav dd").eq(5).find("i").css({background:"url(../../themes/images/card/8/gray/06.png) center no-repeat",backgroundSize:"100%"});
                $(".div-label span").css("background","#526573");                   
            };                                                                            
      })

 })


    /* 腾讯地图获取位置 */
    var geocoder,map,marker = null;
    var init = function() {
        var center = new qq.maps.LatLng(39.916527,116.397128);
        map = new qq.maps.Map(document.getElementById('container'),{
            center: center,
            zoom: 15
        });
        //调用地址解析类
        geocoder = new qq.maps.Geocoder({
            complete : function(result){
                map.setCenter(result.detail.location);
                var marker = new qq.maps.Marker({
                    map:map,
                    position: result.detail.location
                });
            }
        });
    }


    function codeAddress() {
        var address = document.getElementById("address").value;
        //通过getLocation();方法获取位置信息值
        geocoder.getLocation(address);
    }

   init();
   codeAddress();

