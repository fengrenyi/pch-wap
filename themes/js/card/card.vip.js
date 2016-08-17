$(function(){
      //菜单
      $(".menu-right-nav").click(function(){
        $('.menu-bottom').show().stop().animate({"bottom":"0px"},{easing:"easeOutBounce", duration:500});
      })

     $(".menu-dl dd .up-show").click(function(){
         $('.menu-bottom').stop().animate({"bottom":"-225px"},{easing:"linear", duration:300});
      })
     $(".menu-bottom .share").show();
     $(".menu-dl dd").eq(3).click(function(){
        $(".menu-bottom .share").show();
        $(".menu-bottom .themes").hide();
      })

     $(".menu-bottom .share-ul li").eq(5).click(function(){
        $(".menu-bottom .themes").show();
        $(".menu-bottom .share").hide();

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