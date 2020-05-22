import Page from './page';
import _petclinic_ from './_petclinic_.page';
import assert from 'assert';

class _petclinic_ownershtml_lastName extends Page {
  constructor() { super('/petclinic/owners.html?lastName=') }
  get HOME() { return $('/HTML/BODY/NAV/DIV/DIV[2]/UL/LI/A/SPAN[2]'); }

  go_petclinic_() {
    this.HOME.click();
    return new _petclinic_();
  }

}
export default _petclinic_ownershtml_lastName;
