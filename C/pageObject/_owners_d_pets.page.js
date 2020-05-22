import Page from './page';
import _owners_d from './_owners_d.page';
import _vetshtml from './_vetshtml.page';
import _ from './_.page';
import assert from 'assert';

class _owners_d_pets extends Page {
  constructor() { super('/owners/\d+/pets') }
  get birthDate() { return $('#birthDate'); }
  get type() { return $('#type'); }
  get name() { return $('#name'); }
  get Add_Pet() { return $('/HTML/BODY/DIV[1]/DIV/FORM/DIV[2]/DIV/BUTTON'); }
  get VETERINARIANS() { return $('*=VETERINARIANS'); }
  get noName() { return $('/HTML/BODY/NAV/DIV/DIV[2]/UL/LI[1]/A'); }
  get HOME() { return $('/HTML/BODY/NAV/DIV/DIV[2]/UL/LI[2]/A/SPAN[2]'); }

  doAdd_Pet({
    birthDate,
    type,
    name
  }) {
    this.birthDate.setValue(birthDate);
    this.type.setValue(type);
    this.name.setValue(name);
    this.Add_Pet.click();
    this.birthDate.setValue(birthDate);
    this.Add_Pet.click();
    return new _owners_d();
  }

  doAdd_Pet2({
    name,
    birthDate
  }) {
    this.name.setValue(name);
    this.birthDate.setValue(birthDate);
    this.Add_Pet.click();
    return new _owners_d_pets();
  }

  go_vetshtml() {
    this.VETERINARIANS.click();
    return new _vetshtml();
  }

  go_() {
    this.noName.click();
    return new _();
  }

  go_owners_d_pets() {
    this.noName.click();
    return new _owners_d_pets();
  }

  go_2() {
    this.HOME.click();
    return new _();
  }

}
export default _owners_d_pets;
