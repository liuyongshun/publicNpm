import { formChecked } from '../src/formChecked.js';
describe('first test', function() {
  it('checked', function() {
    assert(formChecked('abc@qq.com', 'email') === true);
  });
  it('checked', function() {
    assert(formChecked('18330235246', 'phone') === true);
  });
});
