// 定位一次
const getPosition = () => {
  window.onLoad  = function(){
    var map = new AMap.Map('container');
    map.plugin('AMap.Geolocation', function() {
      var geolocation = new AMap.Geolocation({
        // 是否使用高精度定位，默认：true
        enableHighAccuracy: true,
        // 设置定位超时时间，默认：无穷大
        timeout: 10000,
        // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
        buttonOffset: new AMap.Pixel(10, 20),
        //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        zoomToAccuracy: true,
        //  定位按钮的排放位置,  RB表示右下
        buttonPosition: 'RB'
      })

      geolocation.getCurrentPosition()
      AMap.event.addListener(geolocation, 'complete', onComplete)
      AMap.event.addListener(geolocation, 'error', onError)

      function onComplete (data) {
        console.log(data);
        // data是具体的定位信息
      }

      function onError (data) {
        console.log(data);
        // 定位出错
      }
    })
  }
  const url = 'https://webapi.amap.com/maps?v=1.4.13&key=dffa27b7a9c9bfec8f69776080dcef4f&callback=onLoad';
  const jsapi = document.createElement('script');
  jsapi.charset = 'utf-8';
  jsapi.src = url;
  document.head.appendChild(jsapi);
}

// 即时定位（打开）
const onInstantPosition = () => {
}

// 即时定位（关闭）
const offInstantPosition = () => {
}

export default {
  getPosition,
  onInstantPosition,
  offInstantPosition
}