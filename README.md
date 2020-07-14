# 后台管理系统
> 这是一个用小程序编写的会员后台App。(V2)

[APP在线地址](http://app.jihui88.com)


## 运行截图
<div style="width:280px">
<img src="https://github.com/weswu/jhw-wx-app-touchwx/raw/master/images/demo.png"/></div>

## 软件架构
- [Touch WX 开发文档] (http://www.wetouch.net/touchwx_doc/quickstart/)

## Install

下载

```shell
npm install
```

## Run

启动服务器

```shell
tui dev
```

生成h5代码

```shell
cd..
tui transform --type wx2ui --src jhw-wx-app-touchwx --dest jhw-wx-app-touchui
```

## 微信配置

| request 合法域名 | uploadFile合法域名 | downloadFile合法域名 |
| --- | :---: | --- |
| `api.jihui88.net` | `www.jihui88.com` | `www.jihui88.com` |
| `wx.jihui88.net` | - | `img.jihui88.com` |
| `www.jihui88.com` | - | - |
| `vv.video.qq.com` | - | - |

## 业务域名

`www.jihui88.com`

## 详细说明

机汇网 appid  `wx2aba9d238ba02a76`

1、小程序banner：applet  applet@181214

2、微信端：case case@181212 (Enterp_0000000000000000000064752)

3、常见问题：xueyuan xueyuan@lxk (Enterp_0000000000000000000062857)

4、精选：xueyuan

5.// 导入ext.JSON(自定义) wx2ad5856ee82bdfc3 let extFile = fs.readFileSync('./ext.json', 'utf-8'); let extConfigPath = util_1.config.getPath('dest', 'ext.json'); util_1.log.msg(util_1.LogType.GENERATE, path.relative(util_1.config.cwd, extFile)); fs.writeFileSync(extConfigPath, extFile, 'utf8');

6.下载二维码 http://wcd.jihui88.com/rest/comm/qrbar/create?w=210&text=


## 文件结构
```shell
.
├── images  图片资源
├── packages  业务组件
└── pages  页面文件
    ├── album  相册
    ├── category  分类
    ├── components  通用模块
    ├── cost  费用中心
    ├── home  首页模块
    ├── member  会员
    ├── news  新闻
    ├── pc  网站
    ├── product  产品
    ├── service  咨询与建议
    ├── setting  设置
    ├── shop  商城
    ├── static  站点管理
    └── user 公司信息
└── static
    ├── data  静态数据
    ├── input  表单（双向绑定）
    ├── style  通用样式
    └── utils  封装工具函数
        ├── api  接口
        ├── http  ajax请求
        ├── system  系统文件
        ├── tips  提示
        ├── utils  自定义全局函数
        └── weCropper 图片截取
```

## 技术支持
- [平面地址](https://pro.modao.cc/app/N7eQz2ifFwfM0Jsy8zjMcJXdZIUnl7R#screen=sc40e5241d7152663162700)
- [机汇网内部文档（用户后台接口、界面编辑接口）](https://jihui88.oschina.io/jhw-api/?file=home-%E9%A6%96%E9%A1%B5)
- [接口文档](http://api.jihui88.net/jihuiapi/)


## 案例
[wallpaper](https://gitee.com/lemon_e/wallpaper)
[Touch WX](http://www.wetouch.net/touchwx_doc/quickstart/)
