import { toggleCase } from '../src/toggleCase.js';
// function toggleCase (str, type) {
//   const COLLECTION = {
//     'word': /\b\w+\b/g,
//     'paragraph': /\b\w+[^\n]*\b/g
//   }
//   try {
//     let pattern = COLLECTION[type]
//     if (pattern) {
//       return str.replace(pattern, function (strSub) {
//         return strSub.substring(0, 1).toUpperCase() + strSub.substring(1)
//       })
//     } else {
//       console.log('未指定type，返回原字符串!!!')
//       return str
//     }
//   } catch (err) {
//     console.info(err, 'plugin suffix = . =!!!')
//   }
// }
// function add (x, y) {
//   return x + y
// }
describe('first test', function() {
  it('test string toggleCase => true', function() {
    assert(toggleCase('abc', 'word') == 'Abc');
  });

  it('test string toggleCase => false', function() {
    assert(toggleCase('abc', 'word') == 'Abc');
  });
});
