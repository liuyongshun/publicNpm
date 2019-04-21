/**
 * remove white space
 * @param  {string} str [The original string [necessary]]
 * @return {number} type   [The type of remove white space [select]]
 * 只有一个参数默认移除在字符串前后空格；
 * type : all 移除所有空格；
 * type : justify 移除两端的空格；
 * type : suffix 移除结尾的空格；
 * type : prefix 移除开始的空格；
 */

/**
 * 1. 手机号隐藏hideNumber ('18330235246', 0) ：183*****246  必须是合格的手机号，加了正则限定。
 * 2. 姓名隐藏hideNumber ('刘二狗', 1) ：刘**
 * 3. 自定义：hideNumber('sdfslf', [2, 4],'-',8) ：字符串、开始和结束的位置、代替样式、该样式出现的次数。
 */
function dealPhone (str, pos, sty, styCount) {
  var argLength, mobileReg, checkType, defaultSty, endPos
  argLength = arguments.length
  mobileReg = /^1[3|4|5|7|8][0-9]{9}$/
  checkType = typeof str
  function strRepeat (str, count) {
    var text = ''
    for (var i = 0; i < count; i++) {
      text += str
    }
    return text
  }
  if (checkType === 'string' || checkType === 'number') {
    if (argLength === 2 && mobileReg.test(str) && pos === 0) {
      defaultSty = strRepeat('*', 5)
      return str.replace(/(\d{3})(\d{5})(\d{3})/, '$1' + defaultSty + '$3')
    }
    if (argLength === 2 && pos === 1) {
      defaultSty = strRepeat('*', 2)
      str = str.substring(0, 1) + defaultSty
      return str
    }
    if (argLength === 4) {
      defaultSty = strRepeat(sty, styCount)
      if (pos.length === 2 && pos[1] > pos[0]) {
        endPos = pos[1] - pos[0]
        return str.replace(new RegExp('(.{' + pos[0] + '})(.{' + endPos + '})(.?)'), '$1' + defaultSty + '$3')
      }
    }
  } else {
    console.log('请输入正确的字符串')
  }
}
export default {
  dealPhone
}
