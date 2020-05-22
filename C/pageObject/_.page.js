import Page from './page';
import _owners_lastName_find from './_owners_lastName_find.page';
import _vetshtml from './_vetshtml.page';
import assert from 'assert';

class _ extends Page {
  constructor() { super('/') }
  get FIND_OWNERS() { return $('*=FIND OWNERS'); }
  get noName() { return $('/HTML/BODY/NAV/DIV/DIV[2]/UL/LI[3]/A/SPAN[1]'); }
  get VETERINARIANS() { return $('*=VETERINARIANS'); }

  go_owners_lastName_find() {
    this.FIND_OWNERS.click();
    return new _owners_lastName_find();
  }

  go_owners_lastName_find2() {
    this.noName.click();
    return new _owners_lastName_find();
  }

  go_vetshtml() {
    this.VETERINARIANS.click();
    return new _vetshtml();
  }

}
export default _;
