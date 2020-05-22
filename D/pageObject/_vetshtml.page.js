import Page from './page';
import _owners_lastName_find from './_owners_lastName_find.page';
import assert from 'assert';

class _vetshtml extends Page {
  constructor() { super('/vets.html') }
  get FIND_OWNERS() { return $('*=FIND OWNERS'); }

  go_owners_lastName_find() {
    this.FIND_OWNERS.click();
    return new _owners_lastName_find();
  }

}
export default _vetshtml;
