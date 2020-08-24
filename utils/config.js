
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
  //{ id: '1', name: '未由运维', image: 'https://cdn.weyooz.cn/wp-content/uploads/dy.png', url: 'pages/index/index', redirecttype: 'miniapp', appid: 'wx10b398d6579806ca', extraData: '', disc: '运维界的一个小学生笔记'},
  //{ id: '2', name: '增强版', image: '../../images/uploads/minapper-plus.jpg', url: 'pages/index/index', redirecttype: 'miniapp', appid: 'wx46926513e9b706d3', extraData: ''},
  //{ id: '4', name: '技术支持', image: '../../images/uploads/minapper-bi.png', url: 'pages/social/social', redirecttype: 'miniapp', appid: 'wxc1771b619b83316b', extraData: '' },
  { id: '5', name: '排行', image: 'https://cdn.weyooz.cn/wp-content/uploads/xcx-bg1.png', url: '../hot/hot', redirecttype: 'apppage', appid: '', extraData: '' },
  { id: '6', name: '搜索', image: 'https://cdn.weyooz.cn/wp-content/uploads/xcx-bg2.png', url: '../search/search', redirecttype: 'apppage', appid: '', extraData: '' },
  { id: '7', name: '小程序', image: 'https://cdn.weyooz.cn/wp-content/uploads/dy.png', url: '../miniapp/miniapp', redirecttype: 'apppage', appid: '', extraData: '' },
  //{ id: '8', name: '官网', image: 'https://cdn.weyooz.cn/wp-content/uploads/xcx-bg3.png', url: 'https://www.weyooz.cn', redirecttype: 'webpage', appid: '', extraData: '' },
  //{ id: '9', name: '言论', image: '../../images/uploads/comment.png', url: '../comments/comments', redirecttype: 'apppage', appid: '', extraData: '' },
  { id: '10', name: '关于', image: 'https://cdn.weyooz.cn/wp-content/uploads/xcx-bg4.png', url: '../about/about', redirecttype: 'apppage', appid: '', extraData: '' }
  
];

// 添加其他用户小程序跳转
var FENGRUI = [
  { id: '1', name: '探拍', image: 'https://cdn.weyooz.cn/wp-content/uploads/5fe5d6f6acc255dff092e115c71c4c337c34e9b0.jpg', url: 'pages/index/index', redirecttype: 'miniapp', appid: 'wx6b9075ba8c7481dd', extraData: '一个铁憨憨的微信小程序' },
  //{ id: '2', name: '巢图壁纸', image: 'https://cdn.weyooz.cn/wp-content/uploads/xcx-bg4.png', url: 'pages/index/index', redirecttype: 'miniapp', appid: 'wxcca03c3f2fde9ba0', extraData: '免费下载高清壁纸' },
  //{ id: '3', name: '教案下载', image: 'https://cdn.weyooz.cn/wp-content/uploads/xcx-bg4.png', url: 'pages/index/index', redirecttype: 'miniapp', appid: 'wx0055ec69e4a51553', extraData: '各类教案资源下载' },
  //{ id: '4', name: 'Hope', image: 'https://cdn.weyooz.cn/wp-content/uploads/xcx-bg4.png', url: 'pages/index/index', redirecttype: 'miniapp', appid: 'wxbe8bd04b0ee9cf35', extraData: '好看且开源的小程序' }
];


export default {
  getDomain: DOMAIN,
  getWebsiteName: WEBSITENAME,  
  getPayTemplateId: PAYTEMPPLATEID,
  getPageCount: PAGECOUNT,
  getFengRui: FENGRUI,
  getIndexNav: INDEXNAV,
  getReplayTemplateId: REPLAYTEMPPLATEID,  
  getZanImageUrl: ZANIMAGEURL, 
  getLogo: LOGO,
  getDownloadFileDomain: DOWNLOADFILEDOMAIN
}