
var imgUrl = 'http://topic.xcar.com.cn/201403/ad_q3/pic/banner.jpg';
var lineLink = '【奥迪Q3开启尊享礼遇季】报名试驾，赢取精美礼品';
var descContent = "【奥迪Q3开启尊享礼遇季】报名试驾，赢取精美礼品";
var shareTitle = '【奥迪Q3开启尊享礼遇季】报名试驾，赢取精美礼品';
var appid = 'wxc9937e3a66af6dc8';

function shareFriend() {
    WeixinJSBridge.invoke('sendAppMessage',{
        "appid": appid,
        "img_url": imgUrl,
        "img_width": "640",
        "img_height": "640",
        "link": lineLink,
        "desc": descContent,
        "title": shareTitle
    }, function(res) {
        _report('send_msg', res.err_msg);
    })
}
function shareTimeline() {
    WeixinJSBridge.invoke('shareTimeline',{
        "img_url": imgUrl,
        "img_width": "640",
        "img_height": "640",
        "link": lineLink,
        "desc": descContent,
        "title": shareTitle
    }, function(res) {
        _report('timeline', res.err_msg);
    });
}
function shareWeibo() {
    WeixinJSBridge.invoke('shareWeibo',{
        "content": descContent,
        "url": lineLink,
    }, function(res) {
        _report('weibo', res.err_msg);
    });
}
// 当微信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady事件。 
document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {

// 发送给好友 
    WeixinJSBridge.on('menu:share:appmessage', function(argv){
        shareFriend();
    });

// 分享到朋友圈 
    WeixinJSBridge.on('menu:share:timeline', function(argv){
        shareTimeline();
    });

// 分享到微博 
    WeixinJSBridge.on('menu:share:weibo', function(argv){
        shareWeibo();
    });
}, false); 
