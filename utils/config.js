
//配置域名,域名只修改此处。
//如果wordpress没有安装在网站根目录请加上目录路径,例如："www.watch-life.net/blog"
var DOMAIN = "www.weyooz.cn";
var WEBSITENAME="未由时光"; //网站名称
var PAGECOUNT='6'; //每页文章数目
var PAYTEMPPLATEID = 'EiHxYpEt3PdsiLYNWlPfSRXl8gP7hc9FcVvNKP76DLQ';//鼓励消息模版id
var REPLAYTEMPPLATEID = 'VT2fqvp2ydfBucciXsOjBQgxrnGcDPaomtAPLYOwcxE';//回复评论消息模版id
var ZANIMAGEURL = 'https://cdn.weyooz.cn/wp-content/uploads/wx_reward.png';//微信鼓励的图片链接，用于个人小程序的赞赏
var LOGO = "../../images/logo.png"; // 网站的logo图片
//设置downloadFile合法域名,不带https ,在中括号([])里增加域名，格式：{id=**,domain:'www.**.com'}，用英文逗号分隔。
//此处设置的域名和小程序与小程序后台设置的downloadFile合法域名要一致。
var DOWNLOADFILEDOMAIN = [
    { id: 1, domain: 'www.weyooz.cn'}

];
 //首页图标导航
 //参数说明：'name'为名称，'image'为图标路径，'url'为跳转的页面，'redirecttype'为跳转的类型，apppage为本小程序的页面，miniapp为其他微信小程序,webpage为web-view的页面
 //redirecttype 是 miniapp 就是跳转其他小程序  url 为其他小程序的页面
 //redirecttype 为 apppage 就是跳转本小程序的页面，url为本小程序的页面路径
 //redirecttype 为 webpage 是跳转网址，是通过web-view打开网址，url就是你要打开的网址，不过这个网址的域名要是业务域名
 //'appid' 当redirecttype为miniapp时，这个值为其他微信小程序的appid，如果redirecttype为apppage，webpage时，这个值设置为空。
 //'extraData'当redirecttype为miniapp时，这个值为提交到其他微信小程序的参数，如果redirecttype为apppage，webpage时，这个值设置为空。
var INDEXNAV = [
  { id: '1', name: '未由去水印', image: 'https://cdn.weyooz.cn/wp-content/uploads/dy.png', url: 'duanshipin_qushuiyin/pages/index/index', redirecttype: 'miniapp', appid: 'wxd72e68ae9ce697dd', extraData: '', disc: '专业去除短视频水印神器'},
  //{ id: '2', name: '增强版', image: '../../images/uploads/minapper-plus.jpg', url: 'pages/index/index', redirecttype: 'miniapp', appid: 'wx46926513e9b706d3', extraData: ''},
  //{ id: '4', name: '技术支持', image: '../../images/uploads/minapper-bi.png', url: 'pages/social/social', redirecttype: 'miniapp', appid: 'wxc1771b619b83316b', extraData: '' },
  { id: '5', name: '排行', image: 'https://cdn.weyooz.cn/wp-content/uploads/xcx-bg1.png', url: '../hot/hot', redirecttype: 'apppage', appid: '', extraData: '' },
  { id: '6', name: '搜索', image: 'https://cdn.weyooz.cn/wp-content/uploads/xcx-bg2.png', url: '../search/search', redirecttype: 'apppage', appid: '', extraData: '' },
  //{ id: '7', name: '小程序', image: '../../images/uploads/miniprogram.png', url: '../list/list?categoryID=1059', redirecttype: 'apppage', appid: '', extraData: '' },
  { id: '8', name: '官网', image: 'https://cdn.weyooz.cn/wp-content/uploads/xcx-bg3.png', url: 'https://www.weyooz.cn', redirecttype: 'webpage', appid: '', extraData: '' },
  //{ id: '9', name: '言论', image: '../../images/uploads/comment.png', url: '../comments/comments', redirecttype: 'apppage', appid: '', extraData: '' },
  { id: '10', name: '关于', image: 'https://cdn.weyooz.cn/wp-content/uploads/xcx-bg4.png', url: '../about/about', redirecttype: 'apppage', appid: '', extraData: '' }
  
];



export default {
  getDomain: DOMAIN,
  getWebsiteName: WEBSITENAME,  
  getPayTemplateId: PAYTEMPPLATEID,
  getPageCount: PAGECOUNT,
  getIndexNav: INDEXNAV,
  getReplayTemplateId: REPLAYTEMPPLATEID,  
  getZanImageUrl: ZANIMAGEURL, 
  getLogo: LOGO,
  getDownloadFileDomain: DOWNLOADFILEDOMAIN
}