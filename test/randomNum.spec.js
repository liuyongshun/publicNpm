import { randomNum } from '../src/randomNum.js';
describe('first test', function() {
  it('random number', function() {
    assert(1 <= randomNum(1, 5) && randomNum(1, 5) <= 5);
  });
  it('random number', function() {
    assert(7 <= randomNum(7));
  });
});