import regeneratorRuntime from 'regenerator-runtime'

const http = async (params = {}, url) => {
  if (url.indexOf('www.jihui88.com') > -1) {
    params.data = params.data || {}
    params.data.skey = wx.getStorageSync('skey')
  }
  if (params.method === 'PUT' || params.method === 'DELETE') {
    url = url + '?' + urlEncode(params.data).substr(1)
    params.data = {}
  }
  let header = {'Content-type': 'application/x-www-form-urlencoded'}
  let token = wx.getStorageSync('token')
  if (url.indexOf('/rest/pc/api/') > -1 || url.indexOf('/rest/buy/api/') > -1) {
    header['X-CSRF-Token'] = token
  }
  let res = await new Promise((resolve, reject) => {
    wx.request({
      url: url,
      method: params.method || 'GET',
      data: params.data || {},
      header: header,
      success: (res) => {
        reject(res)
      },
      fail: (err) => {
        reject(err)
      },
      complete: (e) => {
        console.log(e)
      }
    })
  }).catch(res => {
    return res
  })
  if (res.data.msg === '未登陆1') {
    wx.navigateTo({
      url: '/pages/user/login'
    })
  } else {
    if (url === 'https://www.jihui88.com/rest/api/user/detail') {
      if (res.data.attributes.data) {
        wx.setStorageSync('token', res.header['X-CSRF-Token'])
      }
    }
  }
  return res.data
}

/**
 * param 将要转为URL参数字符串的对象
 * key URL参数字符串的前缀
 * encode true/false 是否进行URL编码,默认为true
 *
 * return URL参数字符串
 */
var urlEncode = function (param, key, encode) {
  if(param==null) return '';
  var paramStr = '';
  var t = typeof (param);
  if (t == 'string' || t == 'number' || t == 'boolean') {
    paramStr += '&' + key + '=' + ((encode==null||encode) ? encodeURIComponent(param) : param);
  } else {
    for (var i in param) {
      var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
      paramStr += urlEncode(param[i], k, encode);
    }
  }
  return paramStr;
};

module.exports = { http }
