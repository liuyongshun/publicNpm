import { formChecked } from '../src/formChecked.js';
describe('first test', function() {
  it('checked', function() {
    assert(formChecked('abc@qq.com', 'email') === true);
  });
  it('checked', function() {
    assert(formChecked('18330235246', 'phone') === true);
  });
  it('checked', function() {
    assert(formChecked('0315-2929292', 'tel') === true);
  });
  it('checked', function() {
    assert(formChecked('129337199309091233', 'idCard') === true);
  });
  it('checked', function() {
    assert(formChecked('http://www.dd.com', 'url') === true);
  });
  it('checked', function() {
    assert(formChecked('浙A39284', 'carNumber') === true);
  });
});
