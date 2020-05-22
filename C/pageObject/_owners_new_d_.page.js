import Page from './page';
import _owners_d from './_owners_d.page';
import _ from './_.page';
import _owners_lastName_find from './_owners_lastName_find.page';
import assert from 'assert';

class _owners_new_d_ extends Page {
  constructor() { super('/owners/(new|\d+/)') }
  get firstName() { return $('#firstName'); }
  get lastName() { return $('#lastName'); }
  get address() { return $('#address'); }
  get city() { return $('#city'); }
  get telephone() { return $('#telephone'); }
  get Add_Owner() { return $('/HTML/BODY/DIV[1]/DIV/FORM/DIV[2]/DIV/BUTTON'); }
  get Update_Owner() { return $('/HTML/BODY/DIV[1]/DIV/FORM/DIV[2]/DIV/BUTTON'); }
  get HOME() { return $('*=HOME'); }
  get FIND_OWNERS() { return $('*=FIND OWNERS'); }

  doAdd_Owner({
    firstName,
    lastName,
    address,
    city,
    telephone
  }) {
    this.firstName.setValue(firstName);
    this.lastName.setValue(lastName);
    this.address.setValue(address);
    this.city.setValue(city);
    this.telephone.setValue(telephone);
    this.Add_Owner.click();
    return new _owners_d();
  }

  doUpdate_Owner({
    firstName,
    lastName,
    address,
    city,
    telephone
  }) {
    this.firstName.setValue(firstName);
    this.lastName.setValue(lastName);
    this.address.setValue(address);
    this.city.setValue(city);
    this.telephone.setValue(telephone);
    this.Update_Owner.click();
    return new _owners_d();
  }

  doUpdate_Owner2({
    address,
    lastName,
    telephone
  }) {
    this.address.setValue(address);
    this.lastName.setValue(lastName);
    this.telephone.setValue(telephone);
    this.Update_Owner.click();
    return new _owners_new_d_();
  }

  doAdd_Owner2({
    address
  }) {
    this.address.setValue(address);
    this.Add_Owner.click();
    return new _owners_new_d_();
  }

  doUpdate_Owner3({
    firstName
  }) {
    this.firstName.setValue(firstName);
    this.Update_Owner.click();
    return new _owners_new_d_();
  }

  go_() {
    this.HOME.click();
    return new _();
  }

  go_owners_lastName_find() {
    this.FIND_OWNERS.click();
    return new _owners_lastName_find();
  }

}
export default _owners_new_d_;
