import Page from './page';
import _petclinic_ from './_petclinic_.page';
import _owners_new_d_ from './_owners_new_d_.page';
import _owners_d_pets from './_owners_d_pets.page';
import _owners_d_pets_d_visits from './_owners_d_pets_d_visits.page';
import assert from 'assert';

class _owners_d extends Page {
  constructor() { super('/owners/\d+$') }
  get HOME() { return $('/HTML/BODY/NAV/DIV/DIV[2]/UL/LI/A/SPAN[2]'); }
  get Edit_Owner() { return $('*=Edit Owner'); }
  get Add_New_Pet() { return $('*=Add New Pet'); }
  get Edit_Pet() { return $('*=Edit Pet'); }
  get Add_Visit() { return $('*=Add Visit'); }

  go_petclinic_() {
    this.HOME.click();
    return new _petclinic_();
  }

  go_owners_new_d_() {
    this.Edit_Owner.click();
    return new _owners_new_d_();
  }

  go_owners_d_pets() {
    this.Add_New_Pet.click();
    return new _owners_d_pets();
  }

  go_owners_d_pets2() {
    this.Edit_Pet.click();
    return new _owners_d_pets();
  }

  go_owners_d_pets_d_visits() {
    this.Add_Visit.click();
    return new _owners_d_pets_d_visits();
  }

}
export default _owners_d;
