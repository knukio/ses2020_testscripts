import Page from './page';
import _owners_d from './_owners_d.page';
import _owners_new_d_ from './_owners_new_d_.page';
import _petclinic_ownershtml_lastName from './_petclinic_ownershtml_lastName.page';
import assert from 'assert';

class _petclinic_owners_findhtml extends Page {
  constructor() { super('/petclinic/owners/find.html.*') }
  get lastName() { return $('#lastName'); }
  get Find_Owner() { return $('/HTML/BODY/DIV/DIV/FORM/DIV[2]/DIV/BUTTON'); }
  get Add_Owner() { return $('*=Add Owner'); }

  doFind_Owner({
    lastName
  }) {
    this.lastName.setValue(lastName);
    this.Find_Owner.click();
    return new _owners_d();
  }

  go_owners_new_d_() {
    this.Add_Owner.click();
    return new _owners_new_d_();
  }

  doFind_Owner2() {
    this.Find_Owner.click();
    return new _petclinic_ownershtml_lastName();
  }

}
export default _petclinic_owners_findhtml;
