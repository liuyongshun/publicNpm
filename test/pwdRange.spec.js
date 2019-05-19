import { pwdRange } from '../src/pwdRange.js';
let assert = require('assert');

describe('first test', function() {
  it('password range', function() {
    assert(pwdRange('abcdef', ['length', 'number', 'upper', 'lower', 'special']).status === false);
  });
  it('password range', function() {
    assert(pwdRange('abcdef', ['length', 'number', 'upper', 'lower', 'special']).type === 'number');
  });
  it('password range', function() {
    assert(pwdRange('Ddd33)(', ['length', 'number', 'upper', 'lower', 'special']).status === true);
  });
});
