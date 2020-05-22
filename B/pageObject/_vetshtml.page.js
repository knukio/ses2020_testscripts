import Page from './page';
import _oups from './_oups.page';
import assert from 'assert';

class _vetshtml extends Page {
  constructor() { super('/vets.html') }
  get ERROR() { return $('/HTML/BODY/NAV/DIV/DIV[2]/UL/LI[5]/A/SPAN[2]'); }

  go_oups() {
    this.ERROR.click();
    return new _oups();
  }

}
export default _vetshtml;
