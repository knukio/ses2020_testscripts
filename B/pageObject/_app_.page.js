import Page from './page';
import _owners_lastName_find from './_owners_lastName_find.page';
import assert from 'assert';

class _app_ extends Page {
  constructor() { super('/app/') }
  get FIND_OWNERS() { return $('*=FIND OWNERS'); }

  go_owners_lastName_find() {
    this.FIND_OWNERS.click();
    return new _owners_lastName_find();
  }

}
export default _app_;
