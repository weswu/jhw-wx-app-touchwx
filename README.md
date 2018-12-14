# 后台管理系统

> 这是一个用小程序编写的会员后台App。(V2)

[APP在线地址](http://app.jihui88.com)


列表浅颜色 9f9f9f
14  34
13  32
12  30
11  28

## 运行截图
![首页](https://pro.modao.cc/uploads3/images/2035/20353737/artboard_1526632447.png)

https://pro.modao.cc/app/N7eQz2ifFwfM0Jsy8zjMcJXdZIUnl7R#screen=sc40e5241d7152663162700

## 安装运行（Build Setup）

``` bash
# TouchWx启动
tui dev

# 生成h5代码
cd..
tui transform --type wx2ui --src jhw-wx-app-touchwx --dest jhw-wx-app-touchui

# TouchUI启动开发服务

```


<!--
<ui-col border-right align="center" vertical-align="middle">
  <navigator target="miniProgram" open-type="navigate" app-id="wx860be22a8b03bbd9"
  path="pages/index/index" extra-data="{{extra}}" version="release" style="width:100%;height:100%;flex-direction:column;justify-content:center;display:flex;">
    <view class="image images"><i class="iconfont icon-chanpin"></i></view>
    <view class="label">机汇网所有产品</view>
  </navigator>
</ui-col>
-->
extAppid  wx031271ed9d1f909f

模板    wx5979261410e2ae66

机汇云  wx2aba9d238ba02a76


// 导入ext.JSON(自定义)
let extFile = fs.readFileSync('./ext.json', 'utf-8');
let extConfigPath = util_1.config.getPath('dest', 'ext.json');
util_1.log.msg(util_1.LogType.GENERATE, path.relative(util_1.config.cwd, extFile));
fs.writeFileSync(extConfigPath, extFile, 'utf8');

### 微信配置

| request 合法域名 | uploadFile合法域名 | downloadFile合法域名 |
| --- | :---: | --- |
| `api.jihui88.net` | `www.jihui88.com` | `www.jihui88.com` |
| `wx.jihui88.net` | - | `img.jihui88.com` |
| `www.jihui88.com` | - | - |
| `vv.video.qq.com` | - | - |

### 业务域名

`www.jihui88.com`
