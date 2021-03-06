import {http} from '../utils/http'

const host = 'https://www.jihui88.com/rest/api/'
const pcHost = 'https://www.jihui88.com/rest/pc/api/'
const buyHost = 'https://www.jihui88.com/rest/buy/api/'

const wxHost = 'https://wx.jihui88.net/rest/api/'

const netHost = 'https://api.jihui88.net/'

// 微信登录
const wxapplogin = (params) => http(params, wxHost + "user/wxapplogin");
// 账号登录
const login = (params) => http(params, wxHost + 'user/wxAppLoginByUsernameAndPassword')
const logout = (params) => http(params, host + 'user/logout')
const api = (params) => http(params, host + params.url)
/***************** 基本数据 ************/
const user = (params) => http(params, host + 'user/detail' + (params ? '/' + params.id : ''))
const userInfo = (params) => http(params, host + 'user/index')
const customData = (params) => http(params, host + 'custom/detail')
const customUpdate = (params) => http(params, host + 'custom/update')
const changeLan = (params) => http(params, host + 'user/changeLan?lanId=' + params.id)
// 地区
const area = (params) => http(params, host + 'area/list')
// 设置
const password = (params) => http(params, host + 'user/detail/password')
const feedback = (params) => http(params, netHost + 'crm_api/index.php/jihui/jihuifeedback')

/***************** 账号信息 ************/
const accountInfo = (params) => http(params, host + 'user/accountInfo/' + params.id)
const accountOauth = (params) => http(params, host + 'oauth/list')
const employee = (params) => http(params, host + 'submember/list')
const employeeDetail = (params) => http(params, host + 'submember/detail' + (params.id ? '/' + params.id : ''))
const employeeAnalysis = (params) => http(params, host + 'submember/statistical')
const userprivilege = (params) => http(params, host + 'userprivilege/list?version=v4')
const userprivDetail = (params) => http(params, host + 'userpriv/detail/' + params.id)
const userOauth = (params) => http(params, host + 'user/oauth')
const sendCellphone = (params) => http(params, host + 'user/sendCellphone')


// 费用中心
const costUnPaid = (params) => http(params, buyHost + 'order/listUnPaid')
const costOrder = (params) => http(params, buyHost + 'order/orderHistory')
const costPaid = (params) => http(params, buyHost + 'order/listPaid')
const costDetail = (params) => http(params, buyHost + 'order/detail/user')
// 积分
const point = (params) => http(params, host + 'integral_record/list')
const pointRule = (params) => http(params, host + 'integral_rule/list?page=1&pageSize=999&listType=0')
const pointProduct = (params) => http(params, host + 'integral_product/list?page=1&pageSize=99')
const signIn = (params) => http(params, host + 'integral_rule/daily')


/***************** 消息中心 ************/
const message = (params) => http(params, host + 'message/list')
const messageDetail = (params) => http(params, host + 'message/detail' + (params.id ? '/' + params.id : ''))


/***************** 站点 ************/
const staticList = (params) => http(params, pcHost + 'baseLayout/list')
const staticDetail = (params) => http(params, pcHost + 'baseLayout/detail' + (params.id ? '/' + params.id : ''))

// 域名绑定
const bind = (params) => http(params, pcHost + 'bind/bindList')
const bindAdd = (params) => http(params, pcHost + 'bind/bindAdd')
const bindDel = (params) => http(params, pcHost + 'bind/bindDel')
const bindDetail = (params) => http(params, pcHost + 'bind/bindDetail')

const bindEdit = (params) => http(params, pcHost + 'bind/bindEdit')
const bindDetail2 = (params) => http(params, pcHost + 'bind/detail/' + params.id)
const profile = (params) => http(params, host + 'profile/detail/all')


// 推广
const spread = (params) => http(params, host + 'poster/list?pageSize=72')
const spreadRank = (params) => http(params, wxHost + 'comm/poster/userlist')
const posters = (params) => http(params, netHost + 'qrcode_poster/api/poster')

const analysis = (params) => http(params, pcHost + 'analysis/detail')
const analysisSave = (params) => http(params, pcHost + 'analysis/save')
const authLogin = (params) => http(params, pcHost + 'authLogin/detail')
// Sitemap生成
const sitemapBuild = (params) => http(params, pcHost + 'sitemap/build')
const sitemap = (params) => http(params, pcHost + 'sitemap/detail')
const sitemapSave = (params) => http(params, pcHost + 'sitemap/save')
// seo
const seoNav = (params) => http(params, pcHost + 'navigator/list')
const seoNavDetail = (params) => http(params, pcHost + 'navigator/detail' + (params ? '/' + params.id : ''))
const seoDetail = (params) => http(params, host + 'seo/pc/detail' + (params ? '/' + params.id : ''))
const seoSave = (params) => http(params, host + 'seo/pc/save/' + params.id)
const seoTemplate = (params) => http(params, host + 'seoTemplate/list')
const seoTemplateDetail = (params) => http(params, host + 'seoTemplate/detail')
const changeLayoutId = (params) => http(params, host + 'submember/changeLayoutId')
// 附件
const attachment = (params) => http(params, pcHost + 'third_app/attachment/list')
const attachmentSave = (params) => http(params, pcHost + 'third_app/attachment/save/' + params.id)

// seo管理
const keywords = (params) => http(params, host + 'keywords/list')
const keywordsDetail = (params) => http(params, host + 'keywords/detail' + (params.id ? '/' + params.id : ''))
const keywordsSave = (params) => http(params, host + 'keywords/savaName')
const innerLinks = (params) => http(params, host + 'keywords/innerLinks/list')
const innerLinksDetail = (params) => http(params, host + 'keywords/innerLinks/detail' + (params && params.id ? '/' + params.id : ''))


/***************** 公司信息 ************/
const enterprise = (params) => http(params, host + 'enterprise/detail' + (params ? '/' + params.id : ''))
const link = (params) => http(params, host + 'link/list')
const linkDetail = (params) => http(params, host + 'link/detail' + (params.id ? '/' + params.id : ''))
const cert = (params) => http(params, host + 'cert/list')
const certDetail = (params) => http(params, host + 'cert/detail' + (params.id ? '/' + params.id : ''))
const recruit = (params) => http(params, host + 'job/list')
const recruitDetail = (params) => http(params, host + 'job/detail' + (params.id ? '/' + params.id : ''))
const distribution = (params) => http(params, host + 'distribution/' + params.url)


/***************** 新闻*产品 ************/
const news = (params) => http(params, host + 'news/list')
const newsDetail = (params) => http(params, host + 'news/detail' + (params.id ? '/' + params.id : ''))
const product = (params) => http(params, host + 'product/list')
const productDetail = (params) => http(params, host + 'product/detail' + (params.id ? '/' + params.id : ''))
const exportProductsToExcel = (params) => http(params, host + 'product/exportProductsToExcel')
const exportProductImg = (params) => http(params, host + 'product/exportProductImg')
const downloadProductExcel = (params) => http(params, host + 'product/downloadProductExcel')


// 分类
const category = (params) => http(params, host + 'category/' + params.url + '?pageSize=1000')
const categoryDisplay = (params) => http(params, host + 'category/display')
const categoryDel = (params) => http(params, host + 'category/batchDel')
const categoryDetail = (params) => http(params, host + 'category/detail' + (params.id ? '/' + params.id : ''))
// 批量
const batchMove = (params) => http(params, host + params.type + '/batch/transfer')
const batchCopy = (params) => http(params, host + params.url)
const batchDel = (params) => http(params, host + params.type + '/batch/del')
const batchDisplay = (params) => http(params, host + params.url)
const batchMarketable = (params) => http(params, host + 'product/' + params.url)
// 标签
const tag = (params) => http(params, host + 'tag/list?pageSize=1000')
const tagDetail = (params) => http(params, host + 'tag/detail' + (params.id ? '/' + params.id : ''))


/***************** 相册 ************/
const album = (params) => http(params, host + 'album/list?pageSize=100')
const albumDetail = (params) => http(params, host + 'album/detail' + (params.id ? '/' + params.id : ''))
const albumAttr = (params) => http(params, host + 'album/attr/list/' + params.id)
// 批量
const albumCopy = (params) => http(params, host + 'album/albumCopy')
const imgDetail = (params) => http(params, host + 'album/attr/img/detail' + (params.id ? '/' + params.id : ''))
const imgCopy = (params) => http(params, host + 'album/attr/img/copy')
const imgDel = (params) => http(params, host + 'album/attr/img/delete')
const imgMove = (params) => http(params, host + 'album/attr/img/move')
const refurbish = (params) => http(params, host + 'album/single/refurbish')
// 回收站
const albumRecycle = (params) => http(params, host + 'album/recycle/list')
const albumAttrRecycle = (params) => http(params, host + 'album/attr/recycle/' + params.id)
const restoreImg = (params) => http(params, host + 'album/restoreImg?attIds=' + params.id)
const restore = (params) => http(params, host + 'album/restore?albumIds=' + params.id)
const attCleanAll = (params) => http(params, host + 'album/attCleanAll')
const recycleDel = (params) => http(params, host + 'album/recycleDel?albumIds=' + params.id)
const attBatchDel = (params) => http(params, host + 'album/attBatchDel?attIds=' + params.id)


/***************** 会员 ************/
const member = (params) => http(params, host + 'member/list')
const memberDetail = (params) => http(params, host + 'member/detail' + (params.id ? '/' + params.id : ''))
const memberRank = (params) => http(params, host + 'member/rank/list')
const memberRankDetail = (params) => http(params, host + 'member/rank/detail' + (params.id ? '/' + params.id : ''))
const memberAttr = (params) => http(params, host + 'member/attr/list')
const memberAttrDetail = (params) => http(params, host + 'member/attr/detail' + (params.id ? '/' + params.id : ''))
const memberBatchDel = (params) => http(params, host + 'member/butchDel')


/***************** 商城 ************/
const order = (params) => http(params, host + 'order/list')
const webinfo = (params) => http(params, host + 'webinfo/detail/' + params.id)
const orderDetail = (params) => http(params, host + 'order/detail/' + params.id)
const orderReview = (params) => http(params, host + 'productreview/list')
const orderReviewDetail = (params) => http(params, host + 'productreview/detail/' + params.id)
const orderRefund = (params) => http(params, host + 'orderDispute/list')
const orderRefundDetail = (params) => http(params, host + 'orderDispute/detail/' + params.id)
const orderPay = (params) => http(params, host + 'paymentconfig/list')
const orderPayDetail = (params) => http(params, host + 'paymentconfig/detail' + (params.id ? '/' + params.id : ''))
const orderDelivery = (params) => http(params, host + 'deliverycorp/list')
const coupon = (params) => http(params, host + 'coupon/list')
const couponDetail = (params) => http(params, host + 'coupon/detail' + (params.id ? '/' + params.id : ''))
const orderBill = (params) => http(params, host + 'deliverycorpSingle/list')
const orderBillDetail = (params) => http(params, host + 'deliverycorpSingle/detail' + (params.id ? '/' + params.id : ''))
// 订单详情
const orderCompleted = (params) => http(params, host + 'order/completed/' + params.id)
const orderShipping = (params) => http(params, host + 'orderShipping/detail/' + params.id)
const orderPayment = (params) => http(params, host + 'orderPayment/detail/' + params.id)
const deliverySnEdit = (params) => http(params, host + 'orderPayment/deliverySnEdit')


/***************** 首页 ************/
// 案例
const applet = (params) => http(params, netHost + 'jihuiapi/products/multi_category')
const website = (params) => http(params, pcHost + 'comm/layout/listDemoByTagsJsonp')
const product_category = (params) => http(params, netHost + 'jihuiapi/other/product_category/' + params.id)
const newsAll = (params) => http(params, netHost + 'jihuiapi/news/all/' + params.id)
const newsCategoryChild = (params) => http(params, netHost + 'jihuiapi/news/category_child/' + params.id)
const newsSingle = (params) => http(params, netHost + 'jihuiapi/news/single/' + params.id)
const listLayoutByTagsJsonp = (params) => http(params, pcHost + 'layout/listLayoutByTagsJsonp')
const listTagCategory = (params) => http(params, pcHost + 'tag/listTagCategory')
const gonggao = (params) => http(params, pcHost + 'comm/layout/getBindLayout')
const agent = (params) => http(params, host + 'agent/config/getConfigByDomain')
const wxappbanner = (params) => http(params, wxHost + 'comm/album/wxappbanner')


module.exports = {
  wxapplogin, login, logout, api,
  /***************** 基本数据 ************/
  user, userInfo, customData, customUpdate, changeLan,
  area,
  password, feedback,
  /***************** 首页 ************/
  applet, website, product_category, newsAll, newsCategoryChild, newsSingle, listLayoutByTagsJsonp, listTagCategory, gonggao,
  agent, wxappbanner,
  // 推广
  spread, spreadRank, posters,
  /***************** 账号信息 ************/
  accountInfo, accountOauth, employee, employeeDetail, employeeAnalysis, userprivilege, userprivDetail, changeLayoutId,
  costUnPaid, costOrder, costPaid, costDetail,
  point, pointProduct, pointRule, signIn,
  userOauth, sendCellphone,
  /***************** 消息中心 ************/
  message, messageDetail,
  /***************** 站点 ************/
  staticList, staticDetail,
  bind, bindDel, bindAdd, bindDetail, bindEdit, bindDetail2, profile,
  analysis, analysisSave,
  authLogin,
  sitemapBuild, sitemap, sitemapSave,
  seoNav, seoNavDetail,
  seoDetail, seoSave, seoTemplate, seoTemplateDetail,
  attachment, attachmentSave,
  // seo管理
  keywords, keywordsDetail, keywordsSave, innerLinks, innerLinksDetail,
  /***************** 公司信息 ************/
  enterprise,
  link, linkDetail,
  cert, certDetail,
  recruit, recruitDetail,
  distribution,
  /***************** 新闻*产品 ************/
  news, newsDetail,
  product, productDetail, exportProductsToExcel, exportProductImg, downloadProductExcel,
  // 分类
  category, categoryDisplay, categoryDel, categoryDetail,
  // 批量
  batchMove, batchCopy, batchDel, batchDisplay, batchMarketable,
  // 标签
  tag, tagDetail,
  /***************** 相册 ************/
  album, albumDetail, albumAttr, albumCopy, imgDetail, imgCopy, imgDel, imgMove, refurbish,
  albumRecycle, albumAttrRecycle, restoreImg, restore, attCleanAll, recycleDel, attBatchDel,
  /***************** 会员 **********/
  member, memberDetail, memberRank, memberRankDetail, memberAttr, memberAttrDetail, memberBatchDel,
  /***************** 商城 ************/
  order, webinfo, orderRefund, orderRefundDetail, orderReview, orderReviewDetail, orderPay, orderPayDetail, orderDetail, orderDelivery,
  orderCompleted, orderShipping, orderPayment, deliverySnEdit,
  coupon, couponDetail, orderBill, orderBillDetail
}
