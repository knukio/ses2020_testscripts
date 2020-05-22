import Page from './page';
import _petclinic_ from './_petclinic_.page';
import assert from 'assert';

class _petclinic_oupshtml extends Page {
  constructor() { super('/petclinic/oups.html') }
  get HOME() { return $('*=HOME'); }

  go_petclinic_() {
    this.HOME.click();
    return new _petclinic_();
  }

}
export default _petclinic_oupshtml;
