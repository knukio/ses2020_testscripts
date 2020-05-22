import Page from './page';
import _ from './_.page';
import _owners_lastName_find from './_owners_lastName_find.page';
import assert from 'assert';

class _oups extends Page {
  constructor() { super('/oups') }
  get HOME() { return $('/HTML/BODY/NAV/DIV/DIV[2]/UL/LI[2]/A/SPAN[2]'); }
  get FIND_OWNERS() { return $('/HTML/BODY/NAV/DIV/DIV[2]/UL/LI[3]/A/SPAN[2]'); }

  go_() {
    this.HOME.click();
    return new _();
  }

  go_owners_lastName_find() {
    this.FIND_OWNERS.click();
    return new _owners_lastName_find();
  }

}
export default _oups;
