import { randomNum } from '../src/randomNum.js';
let assert = require('assert');

describe('first test', function() {
  it('random number', function() {
    assert(1 <= randomNum(1, 5));
  });
  it('random number', function() {
    assert(randomNum(1, 5) < 5);
  });
  it('random number', function() {
    assert(7 > randomNum(7));
  });
});
