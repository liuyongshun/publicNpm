/**
 * [checkType description]
 * @param  {[type]} str  [description]
 * @param  {[type]} type [description]
 * @return {[type]}      [description]
 */
function formChecked (str, type) {
  switch (type) {
    case 'email':
      return /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/.test(str)
    case 'phone':
      return /^1\d{10}$/.test(str)
    case 'tel':
      return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str)
    case 'chinese':
      return /^[\u4E00-\u9FA5]+$/.test(str)
    case 'idCard':
      return /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(str)
    case 'url':
      return /^((https|http):\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(str)
    case 'carNumber':
      return /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/.test(str)
    default :
      return true
  }
}

export default {
  formChecked
}
