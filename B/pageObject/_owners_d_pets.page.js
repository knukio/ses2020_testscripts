import Page from './page';
import _owners_d from './_owners_d.page';
import _owners_lastName_find from './_owners_lastName_find.page';
import assert from 'assert';

class _owners_d_pets extends Page {
  constructor() { super('/owners/\d+/pets') }
  get name() { return $('#name'); }
  get birthDate() { return $('#birthDate'); }
  get Add_Pet() { return $('/HTML/BODY/DIV/DIV/FORM/DIV[2]/DIV/BUTTON'); }
  get Update_Pet() { return $('/HTML/BODY/DIV[1]/DIV/FORM/DIV[2]/DIV/BUTTON'); }
  get FIND_OWNERS() { return $('/HTML/BODY/NAV/DIV/DIV[2]/UL/LI[3]/A/SPAN[2]'); }

  doAdd_Pet({
    name,
    birthDate
  }) {
    this.name.setValue(name);
    this.birthDate.setValue(birthDate);
    this.Add_Pet.click();
    return new _owners_d();
  }

  doUpdate_Pet({
    name,
    birthDate
  }) {
    this.name.setValue(name);
    this.birthDate.setValue(birthDate);
    this.Update_Pet.click();
    return new _owners_d();
  }

  doUpdate_Pet2({
    name,
    birthDate
  }) {
    this.name.setValue(name);
    this.birthDate.setValue(birthDate);
    this.Update_Pet.click();
    return new _owners_d_pets();
  }

  go_owners_lastName_find() {
    this.FIND_OWNERS.click();
    return new _owners_lastName_find();
  }

  doAdd_Pet2() {
    this.Add_Pet.click();
    return new _owners_d_pets();
  }

}
export default _owners_d_pets;
