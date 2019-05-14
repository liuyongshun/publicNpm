import { toggleCase } from '../src/toggleCase.js';
describe('first test', function() {
  it('test string that every word to be uppercase', function() {
    assert(toggleCase('abc', 'word') === 'Abc');
  });
  it('test the first word of each paragraph to be uppercase', function() {
    assert(toggleCase('abc\ndcef\nghijk', 'paragraph') === 'Abc\nDcef\nGhijk');
  });
});
