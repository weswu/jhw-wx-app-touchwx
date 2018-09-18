import {http} from '../utils/http'

const host = 'https://www.jihui88.com/rest/api/'
const pcHost = 'https://www.jihui88.com/rest/pc/api/'
const buyHost = 'https://www.jihui88.com/rest/buy/api/'

const wxHost = 'https://wx.jihui88.net'

// 微信登录
const wxapplogin = (params) => http(params, wxHost + "/rest/api/user/wxapplogin");
// 账号登录
const login = (params) => http(params, wxHost + '/rest/api/user/wxAppLoginByUsernameAndPassword')
const logout = (params) => http(params, host + 'user/logout')
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
const feedback = (params) => http(params, 'https://api.jihui88.net/crm_api/index.php/jihui/jihuifeedback')


/***************** 账号信息 ************/
const accountInfo = (params) => http(params, host + 'user/accountInfo/' + params.id)
const accountOauth = (params) => http(params, host + 'oauth/list')
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
const staticAdd = (params) => http(params, 'http://www.jihui88.com/rest/pc/index/list')
// seo
const seoDetail = (params) => http(params, pcHost + 'baseLayout/detail' + (params.id ? '/' + params.id : ''))
// 域名绑定
const bind = (params) => http(params, host + 'bind/list')
const bindDetail = (params) => http(params, host + 'bind/detail' + (params.id ? '/' + params.id : ''))
// 推广
const spread = (params) => http(params, host + 'poster/list?pageSize=72')
const spreadRank = (params) => http(params, wxHost + '/rest/api/comm/poster/userlist')
const posters = (params) => http(params, 'https://api.jihui88.net/qrcode_poster/api/poster')


/***************** 公司信息 ************/
const enterprise = (params) => http(params, host + 'enterprise/detail' + (params ? '/' + params.id : ''))
const link = (params) => http(params, host + 'link/list')
const linkDetail = (params) => http(params, host + 'link/detail' + (params.id ? '/' + params.id : ''))
const cert = (params) => http(params, host + 'cert/list')
const certDetail = (params) => http(params, host + 'cert/detail' + (params.id ? '/' + params.id : ''))


/***************** 新闻*产品 ************/
const news = (params) => http(params, host + 'news/list')
const newsDetail = (params) => http(params, host + 'news/detail/' + params.id)
const product = (params) => http(params, host + 'product/list')
const productDetail = (params) => http(params, host + 'product/detail/' + params.id)
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
const tagDetail = (params) => http(params, host + 'tag/detail/' + params.id)


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


/***************** 会员 ************/
const member = (params) => http(params, host + 'member/list')
const memberDetail = (params) => http(params, host + 'member/detail' + (params.id ? '/' + params.id : ''))
const memberRank = (params) => http(params, host + 'member/rank/list')
const memberAttr = (params) => http(params, host + 'member/attr/list')
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


module.exports = {
  wxapplogin, login, logout,
  /***************** 基本数据 ************/
  user, userInfo, customData, customUpdate, changeLan,
  area,
  password, feedback,
  // 推广
  spread, spreadRank, posters,
  /***************** 账号信息 ************/
  accountInfo, accountOauth,
  costUnPaid, costOrder, costPaid, costDetail,
  point, pointProduct, pointRule, signIn,
  /***************** 消息中心 ************/
  message, messageDetail,
  /***************** 站点 ************/
  staticList, staticDetail, staticAdd,
  seoDetail,
  bind, bindDetail,
  /***************** 公司信息 ************/
  enterprise, 
  link, linkDetail,
  cert, certDetail,
  /***************** 新闻*产品 ************/
  news, newsDetail,
  product, productDetail,
  // 分类
  category, categoryDisplay, categoryDel, categoryDetail,
  // 批量
  batchMove, batchCopy, batchDel, batchDisplay, batchMarketable,
  // 标签
  tag, tagDetail,
  /***************** 相册 ************/
  album, albumDetail, albumAttr, albumCopy, imgDetail, imgCopy, imgDel, imgMove, refurbish,
  /***************** 会员 ************/
  member, memberDetail, memberRank, memberAttr, memberBatchDel,
  /***************** 商城 ************/
  order, webinfo, orderRefund, orderRefundDetail, orderReview, orderReviewDetail, orderPay, orderPayDetail, orderDetail, orderDelivery,
  coupon, couponDetail
}
