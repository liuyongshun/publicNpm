/**
 * [toggleCase first letter to upper]
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 * 首字母大写。
 */
function toggleCase (str, type) {
  var pattern
  pattern = /\b[a-zA-Z]+\b/g
  try {
    return str.replace(pattern, function (str) {
      return str.substring(0, 1).toUpperCase() + str.substring(1)
    })
  } catch (err) {
    console.info(err, 'plugin suffix = . =!!!')
  }
}

export default {
  toggleCase
}
