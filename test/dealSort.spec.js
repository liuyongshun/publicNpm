import { dealSort } from '../src/dealSort.js';
describe('first test', function() {
  it('test string that every word to be uppercase', function() {
    assert(dealSort([1, 8, 2, 4], 'up') === 'Abc');
  });
  it('test the first word of each paragraph to be uppercase', function() {
    assert(dealSort('abc\ndcef\nghijk', 'paragraph') === 'Abc\nDcef\nGhijk');
  });
});
