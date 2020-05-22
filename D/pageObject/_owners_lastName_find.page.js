import Page from './page';
import _owners_lastName_D from './_owners_lastName_D.page';
import _vetshtml from './_vetshtml.page';
import _owners_d from './_owners_d.page';
import _owners_new_d_ from './_owners_new_d_.page';
import __app from './__app.page';
import assert from 'assert';

class _owners_lastName_find extends Page {
  constructor() { super('/owners(\?lastName=.+|/find)') }
  get lastName() { return $('#lastName'); }
  get Find_Owner() { return $('/HTML/BODY/DIV/DIV/FORM/DIV[2]/DIV/BUTTON'); }
  get VETERINARIANS() { return $('*=VETERINARIANS'); }
  get FIND_OWNERS() { return $('/HTML/BODY/NAV/DIV/DIV[2]/UL/LI[3]/A/SPAN[2]'); }
  get Add_Owner() { return $('*=Add Owner'); }
  get HOME() { return $('*=HOME'); }

  doFind_Owner({
    lastName
  }) {
    this.lastName.setValue(lastName);
    this.Find_Owner.click();
    return new _owners_lastName_find();
  }

  doFind_Owner2() {
    this.Find_Owner.click();
    return new _owners_lastName_D();
  }

  go_vetshtml() {
    this.VETERINARIANS.click();
    return new _vetshtml();
  }

  doFind_Owner3({
    lastName
  }) {
    this.lastName.setValue(lastName);
    this.Find_Owner.click();
    return new _owners_d();
  }

  go_owners_lastName_find() {
    this.FIND_OWNERS.click();
    return new _owners_lastName_find();
  }

  go_owners_new_d_() {
    this.Add_Owner.click();
    return new _owners_new_d_();
  }

  go__app() {
    this.HOME.click();
    return new __app();
  }

}
export default _owners_lastName_find;
