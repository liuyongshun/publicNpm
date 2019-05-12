/**
 * [toggleCase description]
 * @param  {[String]} str  [The original string]
 * @param  {[String]} type [Tte type of operation]
 * @return {[String]}      [description]
 * type : word 将每个单词首字母大写；
 * type : paragraph 将每个段落的首字母大写；
 */
function toggleCase (str, type) {
  const COLLECTION = {
    'word': /\b\w+\b/g,
    'paragraph': /\b\w+[^\n]*\b/g
  }
  try {
    let pattern = COLLECTION[type]
    if (pattern) {
      return str.replace(pattern, function (strSub) {
        return strSub.substring(0, 1).toUpperCase() + strSub.substring(1)
      })
    } else {
      console.log('未指定type，返回原字符串!!!')
      return str
    }
  } catch (err) {
    console.info(err, 'plugin suffix = . =!!!')
  }
}

export {
  toggleCase
}
