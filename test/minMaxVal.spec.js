import { minMaxVal } from '../src/minMaxVal.js';
describe('first test', function() {
  it('max', function() {
    assert(minMaxVal([1, 6, 2], 'max').value === 6);
  });
  it('min', function() {
    assert(minMaxVal([1, 6, 2], 'min').value === 1);
  });
});
