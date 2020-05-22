import Page from './page';
import _owners_lastName from './_owners_lastName.page';
import _owners_d from './_owners_d.page';
import _vetshtml from './_vetshtml.page';
import _owners_new_d_ from './_owners_new_d_.page';
import _ from './_.page';
import assert from 'assert';

class _owners_lastName_find extends Page {
  constructor() { super('/owners(\?lastName=.+|/find)') }
  get lastName() { return $('#lastName'); }
  get Find_Owner() { return $('/HTML/BODY/DIV[1]/DIV/FORM/DIV[2]/DIV/BUTTON'); }
  get VETERINARIANS() { return $('*=VETERINARIANS'); }
  get Add_Owner() { return $('*=Add Owner'); }
  get noName() { return $('/HTML/BODY/NAV/DIV/DIV[2]/UL/LI[2]/A/SPAN[1]'); }
  get HOME() { return $('*=HOME'); }

  doFind_Owner({
    lastName
  }) {
    this.lastName.setValue(lastName);
    this.Find_Owner.click();
    return new _owners_lastName();
  }

  doFind_Owner2({
    lastName
  }) {
    this.lastName.setValue(lastName);
    this.Find_Owner.click();
    return new _owners_lastName_find();
  }

  doFind_Owner3({
    lastName
  }) {
    this.lastName.setValue(lastName);
    this.Find_Owner.click();
    return new _owners_d();
  }

  go_vetshtml() {
    this.VETERINARIANS.click();
    return new _vetshtml();
  }

  go_owners_new_d_() {
    this.Add_Owner.click();
    return new _owners_new_d_();
  }

  go_() {
    this.noName.click();
    return new _();
  }

  go_2() {
    this.HOME.click();
    return new _();
  }

}
export default _owners_lastName_find;
