import Page from './page';
import _owners_lastName_D from './_owners_lastName_D.page';
import _owners_d from './_owners_d.page';
import _owners_new_d_ from './_owners_new_d_.page';
import _vetshtml from './_vetshtml.page';
import assert from 'assert';

class _owners_lastName_find extends Page {
  constructor() { super('/owners(\?lastName=.+|/find)') }
  get lastName() { return $('#lastName'); }
  get Find_Owner() { return $('/HTML/BODY/DIV[1]/DIV/FORM/DIV[2]/DIV/BUTTON'); }
  get Add_Owner() { return $('*=Add Owner'); }
  get FIND_OWNERS() { return $('/HTML/BODY/NAV/DIV/DIV[2]/UL/LI[3]/A/SPAN[2]'); }
  get VETERINARIANS() { return $('/HTML/BODY/NAV/DIV/DIV[2]/UL/LI[4]/A/SPAN[2]'); }

  doFind_Owner({
    lastName
  }) {
    this.lastName.setValue(lastName);
    this.Find_Owner.click();
    return new _owners_lastName_D();
  }

  doFind_Owner2({
    lastName
  }) {
    this.lastName.setValue(lastName);
    this.Find_Owner.click();
    return new _owners_d();
  }

  doFind_Owner3({
    lastName
  }) {
    this.lastName.setValue(lastName);
    this.Find_Owner.click();
    return new _owners_lastName_find();
  }

  go_owners_new_d_() {
    this.Add_Owner.click();
    return new _owners_new_d_();
  }

  go_owners_lastName_find() {
    this.FIND_OWNERS.click();
    return new _owners_lastName_find();
  }

  go_vetshtml() {
    this.VETERINARIANS.click();
    return new _vetshtml();
  }

}
export default _owners_lastName_find;
