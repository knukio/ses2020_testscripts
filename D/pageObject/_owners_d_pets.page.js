import Page from './page';
import _owners_d from './_owners_d.page';
import _owners_lastName_find from './_owners_lastName_find.page';
import __app from './__app.page';
import assert from 'assert';

class _owners_d_pets extends Page {
  constructor() { super('/owners/\d+/pets') }
  get birthDate() { return $('#birthDate'); }
  get Update_Pet() { return $('/HTML/BODY/DIV/DIV/FORM/DIV[2]/DIV/BUTTON'); }
  get name() { return $('#name'); }
  get type() { return $('#type'); }
  get Add_Pet() { return $('/HTML/BODY/DIV/DIV/FORM/DIV[2]/DIV/BUTTON'); }
  get FIND_OWNERS() { return $('/HTML/BODY/NAV/DIV/DIV[2]/UL/LI[3]/A/SPAN[2]'); }
  get HOME() { return $('/HTML/BODY/NAV/DIV/DIV[2]/UL/LI[2]/A/SPAN[2]'); }

  doUpdate_Pet({
    birthDate,
    name,
    type
  }) {
    this.birthDate.setValue(birthDate);
    this.Update_Pet.click();
    this.birthDate.setValue(birthDate);
    this.name.setValue(name);
    this.type.setValue(type);
    this.Update_Pet.click();
    return new _owners_d();
  }

  doAdd_Pet({
    name,
    birthDate
  }) {
    this.name.setValue(name);
    this.birthDate.setValue(birthDate);
    this.Add_Pet.click();
    this.birthDate.setValue(birthDate);
    this.Add_Pet.click();
    return new _owners_d_pets();
  }

  doAdd_Pet2({
    name,
    birthDate
  }) {
    this.name.setValue(name);
    this.birthDate.setValue(birthDate);
    this.Add_Pet.click();
    return new _owners_d();
  }

  doAdd_Pet3({
    type
  }) {
    this.type.setValue(type);
    this.Add_Pet.click();
    return new _owners_d_pets();
  }

  doAdd_Pet4({
    name,
    type
  }) {
    this.name.setValue(name);
    this.type.setValue(type);
    this.Add_Pet.click();
    return new _owners_d();
  }

  go_owners_lastName_find() {
    this.FIND_OWNERS.click();
    return new _owners_lastName_find();
  }

  go__app() {
    this.HOME.click();
    return new __app();
  }

}
export default _owners_d_pets;
