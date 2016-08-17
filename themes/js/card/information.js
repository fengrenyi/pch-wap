$(function(){
   /* 地区三级联动*/
   selkit({type:'address',id:'s_province s_city s_county',code:0});


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
