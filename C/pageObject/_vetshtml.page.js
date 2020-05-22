import Page from './page';
import _oups from './_oups.page';
import _owners_lastName_find from './_owners_lastName_find.page';
import _ from './_.page';
import assert from 'assert';

class _vetshtml extends Page {
  constructor() { super('/vets.html') }
  get ERROR() { return $('*=ERROR'); }
  get FIND_OWNERS() { return $('*=FIND OWNERS'); }
  get VETERINARIANS() { return $('/HTML/BODY/NAV/DIV/DIV[2]/UL/LI[4]/A/SPAN[2]'); }

  go_oups() {
    this.ERROR.click();
    return new _oups();
  }

  go_owners_lastName_find() {
    this.FIND_OWNERS.click();
    return new _owners_lastName_find();
  }

  go_() {
    this.VETERINARIANS.click();
    return new _();
  }

}
export default _vetshtml;
