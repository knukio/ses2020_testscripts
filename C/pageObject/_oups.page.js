import Page from './page';
import _ from './_.page';
import _owners_lastName_find from './_owners_lastName_find.page';
import assert from 'assert';

class _oups extends Page {
  constructor() { super('/oups') }
  get noName() { return $('/HTML/BODY/NAV/DIV/DIV[1]/A/SPAN'); }
  get FIND_OWNERS() { return $('*=FIND OWNERS'); }

  go_() {
    this.noName.click();
    this.noName.click();
    return new _();
  }

  go_owners_lastName_find() {
    this.FIND_OWNERS.click();
    return new _owners_lastName_find();
  }

}
export default _oups;
