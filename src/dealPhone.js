/**
 * [dealPhone description]
 * @param  {[String]} str      [description]
 * @param  {[Array]} pos      [description]
 * @param  {[String]} sty      [description]
 * @param  {[Number]} styCount [description]
 * @return {[type]}          [description]
 * 1. 手机号隐藏hideNumber ('18330235246', [0])
 * 2. 姓名隐藏hideNumber ('刘二狗', [1]) ：刘**
 * 3. 自定义：hideNumber('sdfslf', [2, 4],'-',8) ：字符串、开始和结束的位置、代替样式、该样式出现的次数。
 */
function dealPhone (str, pos, sty, styCount) {
  var argLength, defaultSty, endPos
  argLength = arguments.length
  function strRepeat (str, count) {
    var text = ''
    for (var i = 0; i < count; i++) {
      text += str
    }
    return text
  }
  try {
    if (typeof str === 'string') {
      if (argLength === 2 && pos[0] === 0) {
        defaultSty = strRepeat('*', 5)
        return str.replace(/(\d{3})(\d{5})(\d{3})/, '$1' + defaultSty + '$3')
      }
      if (argLength === 2 && pos[0] === 1) {
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
  } catch (err) {
    console.info(err, 'plugin suffix = . =!!!')
  }
}
export default {
  dealPhone
}
