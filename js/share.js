/**
 * Created by Administrator on 2016/6/24 0024.
 */
var imgUrl = "http://www.gdibn.com/m/images/logo.png";  //ͼƬLOGOע������Ǿ���·��
var lineLink = "http://www.gdibn.com/m/images/";   //��վ��ַ�������Ǿ���·��
var descContent = '��������(www.gdibn.com)10�����վ��������,רע����վ���裬���꿪��������SEO����ҵ��վ��ƣ���վ��ҵģ�壬������վ��ƣ���վ���ۣ���ҵ��վ��ƣ��������ռ䣬����������ط��������Ĺ�����վ���蹫˾����ʼ���գ��������ĶԴ�ÿһλ�ͻ���'; //��������ѻ�����Ȧʱ�����ּ��
var shareTitle = '������վ����_��վ�ƹ㹫˾_��վ�Ż�_��������';  //����title
var appid = ''; //apiID��������

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
// ��΢���������������ڲ���ʼ����ᴥ��WeixinJSBridgeReady�¼���
document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
    // ���͸�����
    WeixinJSBridge.on('menu:share:appmessage', function(argv){
        shareFriend();
    });
    // ��������Ȧ
    WeixinJSBridge.on('menu:share:timeline', function(argv){
        shareTimeline();
    });
    // ����΢��
    WeixinJSBridge.on('menu:share:weibo', function(argv){
        shareWeibo();
    });
}, false);