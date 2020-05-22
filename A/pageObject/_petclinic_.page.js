import Page from './page';
import _petclinic_owners_findhtml from './_petclinic_owners_findhtml.page';
import _petclinic_vetshtml from './_petclinic_vetshtml.page';
import _petclinic_oupshtml from './_petclinic_oupshtml.page';
import assert from 'assert';

class _petclinic_ extends Page {
  constructor() { super('/petclinic/') }
  get FIND_OWNERS() { return $('*=FIND OWNERS'); }
  get VETERINARIANS() { return $('/HTML/BODY/NAV/DIV/DIV[2]/UL/LI[3]/A/SPAN[2]'); }
  get ERROR() { return $('/HTML/BODY/NAV/DIV/DIV[2]/UL/LI[4]/A/SPAN[2]'); }

  go_petclinic_owners_findhtml() {
    this.FIND_OWNERS.click();
    return new _petclinic_owners_findhtml();
  }

  go_petclinic_vetshtml() {
    this.VETERINARIANS.click();
    return new _petclinic_vetshtml();
  }

  go_petclinic_oupshtml() {
    this.ERROR.click();
    return new _petclinic_oupshtml();
  }

}
export default _petclinic_;
