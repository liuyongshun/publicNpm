import { dealPhone } from '../src/dealPhone.js';
let assert = require('assert');

describe('first test', function() {
  it('dealPhone number', function() {
    assert(dealPhone('18333335246', [0]) === '183*****246');
  });
  it('dealPhone number', function() {
    assert(dealPhone('刘永顺', [1]) === '刘**');
  });
  it('dealPhone number', function() {
    assert(dealPhone('123456789', [2, 4], '-', 3) === '12---56789');
  });
});
