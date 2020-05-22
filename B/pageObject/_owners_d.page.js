import Page from './page';
import _owners_d_pets from './_owners_d_pets.page';
import _owners_lastName_find from './_owners_lastName_find.page';
import _owners_new_d_ from './_owners_new_d_.page';
import _owners_d_pets_d_visits from './_owners_d_pets_d_visits.page';
import _vetshtml from './_vetshtml.page';
import assert from 'assert';

class _owners_d extends Page {
  constructor() { super('/owners/\d+$') }
  get Add_New_Pet() { return $('*=Add New Pet'); }
  get FIND_OWNERS() { return $('/HTML/BODY/NAV/DIV/DIV[2]/UL/LI[3]/A/SPAN[2]'); }
  get Edit_Owner() { return $('*=Edit Owner'); }
  get Edit_Pet() { return $('*=Edit Pet'); }
  get Add_Visit() { return $('*=Add Visit'); }
  get VETERINARIANS() { return $('/HTML/BODY/NAV/DIV/DIV[2]/UL/LI[4]/A/SPAN[2]'); }

  go_owners_d_pets() {
    this.Add_New_Pet.click();
    return new _owners_d_pets();
  }

  go_owners_lastName_find() {
    this.FIND_OWNERS.click();
    return new _owners_lastName_find();
  }

  go_owners_new_d_() {
    this.Edit_Owner.click();
    return new _owners_new_d_();
  }

  go_owners_d_pets2() {
    this.Edit_Pet.click();
    return new _owners_d_pets();
  }

  go_owners_d_pets_d_visits() {
    this.Add_Visit.click();
    return new _owners_d_pets_d_visits();
  }

  go_vetshtml() {
    this.VETERINARIANS.click();
    return new _vetshtml();
  }

}
export default _owners_d;
