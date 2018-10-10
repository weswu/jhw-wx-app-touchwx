import Tips from './tips'
import api from './api'
import regeneratorRuntime from 'regenerator-runtime'

/*
 * @author: wes
 * @date: 2018-1-17
 * @desc: 删除单个数组
*/
const del = async (that, e, http, tip) => {
  await Tips.confirm(tip || '确认删除吗？')
  Tips.loading()
  const res = await http({
    method: 'DELETE',
    id: e.currentTarget.dataset.id
  })
  Tips.loaded()
  if (res.success) {
    that.data.list.splice(e.currentTarget.dataset.index, 1);
    that.setData({
      list: that.data.list,
      count: that.data.count - 1
    })
    Tips.success('删除成功')
  } else {
    Tips.error(res.msg)
  }
};


/*
 * @author: wes
 * @date: 2018-1-17
 * @desc: 数组相加
*/
const addAll = (a, b) => {
  if (b.length === 0) return
  for (let i = 0; i < b.length; i++) {
    a.push(b[i])
  }
}
/*
 * @author: wes
 * @date: 2018-1-17
 * @desc: 滚动加载数据
*/
const scrollList = (that, res, text) => {
  let ctx = that.data
  if (res.success) {
    addAll(ctx.list, res.attributes.data)
    if(ctx.params.page === 1){
      ctx.count = res.attributes.count
    }
    let pageSize = ctx.params.pageSize || 16
    if (res.attributes.data.length < pageSize) {
      ctx.more.tip = text || '加载完毕'
    }
  }
  ctx.more.loading = false
  
  that.setData({
    list: ctx.list,
    params: ctx.params,
    count: ctx.count,
    more: ctx.more
  })
}

/*
 * @author: wes
 * @date: 2018-1-24
 * @desc: 金额,过滤2位
*/
const price = (v) => {
  var f = parseFloat(v)
  if (isNaN(f)) {
    return
  }
  f = Math.round(v * 100) / 100
  return f
}
/*
 * @author: wes
 * @date: 2017-7-28
 * @desc: 时间格式化
*/
function formatTime(date, format, week) {
  if (!date) return ''
  date = new Date(parseInt(date))
  format = format || 'yyyy-MM-dd hh:mm'
  var weekday = new Date(new Date() - 1000 * 60 * 60 * 24 * 6)
  if (week && date.getFullYear() === new Date().getFullYear() && date > weekday) {
    var show_day = new Array('星期一','星期二','星期三','星期四','星期五','星期六','星期日')
    format = show_day[date.getDay() - 1]
    var yesterday = new Date(new Date() - 1000 * 60 * 60 * 24)
    if (date > yesterday) {
      format = (Array(2).join(0) + date.getHours()).slice(-2) + ':' + (Array(2).join(0) + date.getMinutes()).slice(-2)
    }
  } else {
    var o = {
      'M+': date.getMonth() + 1, // 月份
      'd+': date.getDate(), // 日
      'h+': date.getHours(), // 小时
      'm+': date.getMinutes(), // 分
      's+': date.getSeconds(), // 秒
      'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
      'S': date.getMilliseconds() // 毫秒
    }
    if (/(y+)/.test(format)) {
      format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(format)) {
        format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
      }
    }
  }
  return format
}

/*
 * @author: wes
 * @date: 2017-7-28
 * @desc: 图片缩略图
*/
function picUrl(src, number) {
  var url = src;
  if (src == null || src.length == 0) return 'http://img.jihui88.com/upload/j/j2/jihui88/picture/2015/04/01/72041ac7-51fa-4163-906d-8b576955d29e.jpg';
  if (number > 10) {
    url = url + '!' + number
  } else {
    var url2 = url.substring(url.lastIndexOf(".") + 1, url.length);
    url = url.substring(0, url.lastIndexOf(".")) + "_" + number + "." + url2;
  }
  return url ? url : '';
}

/*
 * @author: wes
 * @date: 2018-8-24
 * @desc: 加载更多
*/
const loading = (that) => {
  that.setData({
    'more.tip': '',
    'more.loading': true
  }) 
}
const loadMore = (that) => {
  let ctx = that.data
  if (ctx.more.loading) { return false }
  ctx.more.loading = true
  ctx.params.page+= 1
  that.setData({
    more: ctx.more,
    params: ctx.params
  })
  that.get()  
}

// 批量操作
const batchDel = async (that, type) => {
  if (!that.data.ids) {
    return Tips.toast('未选择')
  }
  await Tips.confirm('确认删除吗？')
  api.batchDel({
    data: {ids: that.data.ids},
    type: type,
    method: 'post'
  }).then(res => {
    if (res.success) {
      Tips.success('删除成功')
      that.setData({
        list: [],
        'params.page': 1,
        selected: false
      })
      that.get()
    }
  })
}

const batchMove = (that, type, categoryId) => {
  if (!that.data.ids) {
    return Tips.toast('未选择')
  }
  if (that.data.ids === categoryId) {
    return Tips.toast('相同分类不能转移')
  }
  let data = {
    ids: that.data.ids
  }
  if (type === 'category/news' || type === 'category/product') {
    data.categoryId = categoryId
  } else {
    data.category = categoryId
  }
  api.batchMove({
    data: data,
    type: type,
    method: 'post'
  }).then(res => {
    if (res.success) {
      Tips.success('转移成功')
      that.setData({
        selected: false
      })
    }
  })
}

const batchDisplay = (that, url, data, display) => {
  if (!that.data.ids) {
    return Tips.toast('未选择')
  }
  api.batchDisplay({
    data: data,
    url: url,
    method: 'post'
  }).then(res => {
    if (res.success) {
      Tips.success(data.display === '01' || display === 'On' ? '已显示' : '已隐藏')
      that.setData({
        list: [],
        'params.page': 1,
        selected: false
      })
      that.get()
    }
  })
}

const batchCopy = (that, url, data) => {
  if (!that.data.ids) {
    return Tips.toast('未选择')
  }
  api.batchCopy({
    data: data,
    url: url,
    method: 'post'
  }).then(res => {
    if (res.success) {
      Tips.success('复制成功')
      that.setData({
        list: [],
        'params.page': 1,
        selected: false
      })
      that.get()
    }
  })
}


const upload = (option, number) => {
  var that = this;
  option = Object.assign({
    replace: '00',
    attId: '',
    id: 'all'
  }, option)
  return new Promise(function(resolve, reject){
    wx.chooseImage({
      count: number || 1, // 默认1
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        wx.showLoading({ title: '正在上传', mask: true})
        wx.uploadFile({
          url: 'https://www.jihui88.com/commonutil/uploadUtil2?username=' + getApp().globalData.user.username + '&replace=' + option.replace + '&attId=' + option.attId + '&id=' + option.id,
          filePath: res.tempFilePaths[0],//临时路径
          name: 'Filedata',
          formData: {
            fileLen: res.tempFiles[0].size,
            skey: wx.getStorageSync('skey')
          },
          success: function (res) {
            wx.hideLoading()
            if (res.statusCode === 200) {
              let obj = {}
              if (res.data !== 'null') {
                obj.src = res.data.split(',')[0].replace(/\\/g, '').split('http://img.jihui88.com/')[1].replace(/_5/g, '')
                obj.id = res.data.split(',')[1]
              }
              resolve (obj)
            }
          }
        })
      }
    })
  }) 
}

const prev = () => {
  var pages = getCurrentPages()
  return pages[pages.length - 2];  //上个页面
}

const switcher = (that, e) => {
  let index = e.currentTarget.dataset.index;
  if (that.data.el !== index) {
    if (that.data.el !== "undefined") {
      that.data.list[that.data.el].switcher = "off";
    }
    that.data.list[index].switcher = "on";
    that.setData({
      list: that.data.list
    });
    that.data.el = index;
  }
}

module.exports = {
  del,
  scrollList,
  price,
  formatTime,
  picUrl,
  loading,
  loadMore,
  batchDel,
  batchDisplay,
  batchCopy,
  batchMove,
  upload,
  prev,
  switcher
};
