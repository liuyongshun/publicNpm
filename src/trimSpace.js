/**
 * remove white space
 * @param  {string} str [The original string [necessary]]
 * @return {number} type   [The type of remove white space [select]]
 * 只有一个参数默认移除在字符串前后空格；
 * type : all 移除所有空格；
 * type : suffix 移除结尾的空格；
 * type : prefix 移除开始的空格；
 */
function trimSpace (str, type) {
  try {
    if (typeof str === 'string') {
      switch (type) {
        case 'all':
          return str.replace(/\s+/g, '')
        case 'suffix':
          return str.replace(/(\s*$)/g, '')
        case 'prefix':
          return str.replace(/(^\s*)/g, '')
        default:
          return str.replace(/(^\s*)|(\s*$)/g, '')
      }
    } else {
      console.info('请输入正确的字符串格式')
    }
  } catch (err) {
    console.info(err, 'plugin suffix = . =!!!')
  }
}

export {
  trimSpace
}
