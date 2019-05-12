/**
 * [minMaxVal description]
 * @param  {[Array]} arr    [original data]
 * @param  {[String]} minMax [min or max]
 * @param  {[Array]} type   [get all index]
 * @return {[Object]}        [message]
 * minMax : min 返回最小值； max或者默认返回最大值；
 * type : all 返回所有出现过的值的位置；
 */
function minMaxVal (arr, minMax, type) {
  let repo = {
    value: null,
    index: null
  }
  try {
    if (minMax === 'min') {
      repo.value = Math.min.apply(null, arr)
    } else {
      repo.value = Math.max.apply(null, arr)
    }
    repo.index = arr.indexOf(repo.value)
    if (type === 'all') {
      repo.allIndex = []
      arr.forEach((n, i) => {
        if (n === repo.value) {
          repo.allIndex.push(i)
        }
      })
    }
    return repo
  } catch (err) {
    console.info(err, 'plugin suffix = . =!!!')
  }
}
export {
  minMaxVal
}
