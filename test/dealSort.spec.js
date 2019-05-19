import { dealSort } from '../src/dealSort.js';
let assert = require('assert');

describe('first test', function() {
  it('test string that every word to be uppercase', function() {
    var arr = dealSort([1, 8, 2, 4], 'up')
    assert(arr[0] === 1 && arr[3] === 8);
  });
  it('test string that every word to be uppercase', function() {
    var arr = dealSort([1, 8, 2, 4], 'lower')
    assert(arr[0] === 8 && arr[3] === 1);
  });
});
