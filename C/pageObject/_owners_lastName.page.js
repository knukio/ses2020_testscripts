import Page from './page';
import _owners_d from './_owners_d.page';
import assert from 'assert';

class _owners_lastName extends Page {
  constructor() { super('/owners\?lastName=$') }
  get George_Franklin() { return $('*=George Franklin'); }
  get test2_test2() { return $('*=test2 test2'); }
  get test_test() { return $('*=test test'); }
  get Eduardo_Rodriquez() { return $('*=Eduardo Rodriquez'); }
  get Peter_McTavish() { return $('*=Peter McTavish'); }
  get Betty_Davis() { return $('*=Betty Davis'); }

  go_owners_d() {
    this.George_Franklin.click();
    return new _owners_d();
  }

  go_owners_d2() {
    this.test2_test2.click();
    return new _owners_d();
  }

  go_owners_d3() {
    this.test_test.click();
    return new _owners_d();
  }

  go_owners_d4() {
    this.Eduardo_Rodriquez.click();
    return new _owners_d();
  }

  go_owners_d5() {
    this.Peter_McTavish.click();
    return new _owners_d();
  }

  go_owners_d6() {
    this.Betty_Davis.click();
    return new _owners_d();
  }

}
export default _owners_lastName;
