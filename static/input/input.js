import Lang from '../input/lang';
import v from '../input/validate';
import tips from '../utils/tips';
export default{
  // 判断字符串是否为空
  isEmpty(str) {
    return Lang.isEmpty(str);
  },
  // 判断字符串是否不为空
  isNotEmpty(str) {
    return !Lang.isEmpty(str);
  },
  // 提示错误（调用FormTips）
  tips(message) {
    tips.toast(message)
  },
  // 校验
  check(rules) {
    for (let rule of rules) {
      const value = rule.value;
      if (rule.method != 'noDuplicate' && Lang.isArray(value)) {
        // 数组校验每个值
        for (let innerValue of value) {
          const isValid = this.execCheck(rule, innerValue);
          if (!isValid) {
            return false;
          }
        }
      } else {
        // 单元素直接校验
        const isValid = this.execCheck(rule, value);
        if (!isValid) {
          return false;
        }
      }
    }
    return true;
  },
  execCheck(rule, value) {
    const method = v[rule.method].bind(v);
    const isValid = method(value, rule.param);
    if (!isValid) {
      this.tips(rule.message);
      return false;
    }
    return true;
  },
  onInput(e) {
    const fieldName = e.currentTarget.id;
    this.data.detail[fieldName] = e.detail.value;
    this.setData({
      detail: this.data.detail
    })
  },
  // 处理输入事件
  input(e) {
    const fieldName = e.currentTarget.id;
    this.data.detail[fieldName] = e.detail.value;
  },
  // 处理单选事件
  radio(e) {
    const fieldName = e.currentTarget.id;
    this.data.detail[fieldName] = e.detail.value;
  },
  picker(e) {
    const index = e.detail.value
    const fieldName = e.currentTarget.id
    const list = e.currentTarget.dataset.list
    this.picker[fieldName] = index
    this.data.detail[fieldName] = this[list][index].value
  }
}
