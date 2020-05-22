import Page from './page';
import _owners_lastName_find from './_owners_lastName_find.page';
import assert from 'assert';

class _ extends Page {
  constructor() { super('/') }
  get FIND_OWNERS() { return $('/HTML/BODY/NAV/DIV/DIV[2]/UL/LI[3]/A/SPAN[2]'); }

  go_owners_lastName_find() {
    this.FIND_OWNERS.click();
    return new _owners_lastName_find();
  }

}
export default _;
