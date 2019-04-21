/**
 * [randomNum description]
 * @param  {[type]} n1 [description]
 * @param  {[type]} n2 [description]
 * @return {[type]}    [description]
 */
function randomNum (n1, n2) {
  if (arguments.length === 2) {
    return Math.round(n1 + Math.random() * (n2 - n1))
  }
  if (arguments.length === 1) {
    return Math.round(Math.random() * n1)
  }
}

export default {
  randomNum
}
