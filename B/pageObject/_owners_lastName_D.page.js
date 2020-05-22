import Page from './page';
import _owners_d from './_owners_d.page';
import _owners_lastName_find from './_owners_lastName_find.page';
import assert from 'assert';

class _owners_lastName_D extends Page {
  constructor() { super('/owners\?lastName=($|D$)') }
  get Betty_Davis() { return $('*=Betty Davis'); }
  get FIND_OWNERS() { return $('/HTML/BODY/NAV/DIV/DIV[2]/UL/LI[3]/A/SPAN[2]'); }
  get Betty2_Davis2() { return $('*=Betty2 Davis2'); }

  go_owners_d() {
    this.Betty_Davis.click();
    return new _owners_d();
  }

  go_owners_lastName_find() {
    this.FIND_OWNERS.click();
    return new _owners_lastName_find();
  }

  go_owners_d2() {
    this.Betty2_Davis2.click();
    return new _owners_d();
  }

}
export default _owners_lastName_D;
