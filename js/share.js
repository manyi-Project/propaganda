/**
 * Created by Administrator on 2016/6/24 0024.
 */
var imgUrl = "http://www.gdibn.com/m/images/logo.png";
var lineLink = "http://www.gdibn.com/m/images/";
var descContent = 'hehehhe';
var shareTitle = 'hahaha';  //????title
var appid = 'wxc9937e3a66af6dc8'; //apiID????????

function shareFriend() {
    WeixinJSBridge.invoke('sendAppMessage',{
        "appid": appid,
        "img_url": imgUrl,
        "img_width": "200",
        "img_height": "200",
        "link": lineLink,
        "desc": descContent,
        "title": shareTitle
    }, function(res) {
        //_report('send_msg', res.err_msg);
    })
}
function shareTimeline() {
    WeixinJSBridge.invoke('shareTimeline',{
        "img_url": imgUrl,
        "img_width": "200",
        "img_height": "200",
        "link": lineLink,
        "desc": descContent,
        "title": shareTitle
    }, function(res) {
        //_report('timeline', res.err_msg);
    });
}
function shareWeibo() {
    WeixinJSBridge.invoke('shareWeibo',{
        "content": descContent,
        "url": lineLink,
    }, function(res) {
        //_report('weibo', res.err_msg);
    });
}
// ??????????????????????????????WeixinJSBridgeReady?????
document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
    // ?????????
    WeixinJSBridge.on('menu:share:appmessage', function(argv){
        shareFriend();
    });
    // ?????????
    WeixinJSBridge.on('menu:share:timeline', function(argv){
        shareTimeline();
    });
    // ???????
    WeixinJSBridge.on('menu:share:weibo', function(argv){
        shareWeibo();
    });
}, false);