import { trimSpace } from '../src/trimSpace.js';
describe('first test', function() {
  it('delete all whitespace', function() {
    assert(trimSpace('  a b c  ', 'all') === 'abc');
  });
  it('delete whitespace start', function() {
    assert(trimSpace('abc   ', 'suffix') === 'abc');
  });
  it('delete whitespace end', function() {
    assert(trimSpace('  abc', 'prefix') === 'abc');
  });
});
