/**
 * [rmDuplicates description]
 * @param  {[type]} arr      [description]
 * @param  {[type]} property []
 * @return {[type]}          [description]
 * arr : 原数组或者是类数组
 * property : 可提供对象格式的数据的去重，根据属性名去重
 */
function rmDuplicates (arr, property) {
  let temp = []
  let tempHas = {}
  try {
    if (property) {
      temp = arr.filter(n => {
        if (tempHas[n[property]] !== 1) {
          tempHas[n[property]] = 1
          return true
        }
      })
    } else {
      temp = [...new Set(Array.from(arr))]
    }
    return temp
  } catch (err) {
    console.info(err, 'plugin suffix = . =!!!')
  }
}
export {
  rmDuplicates
}
