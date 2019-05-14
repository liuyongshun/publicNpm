import { rmDuplicates } from '../src/rmDuplicates.js';
describe('first test', function() {
  it('Remove Duplicates', function() {
    assert(rmDuplicates([1, 3, 2, 3, 2]).length === 3);
  });
  it('Remove Duplicates', function() {
    assert(rmDuplicates([1, 3, 2, 3, 2]).every(n => n === 3).length === 1);
  });
  it('Remove Duplicates', function() {
    assert(rmDuplicates([1, 3, 2, 3, 2]).every(n => n === 2).length === 1);
  });
});
