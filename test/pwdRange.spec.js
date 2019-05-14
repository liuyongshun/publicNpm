import { pwdRange } from '../src/pwdRange.js';
describe('first test', function() {
  it('password range', function() {
    assert(pwdRange('abcdef', ['length', 'number', 'upper', 'lower', 'special']).status === false);
  });
  it('password range', function() {
    assert(pwdRange('abcdef', ['length', 'number', 'upper', 'lower', 'special']).type === 'number');
  });
});
