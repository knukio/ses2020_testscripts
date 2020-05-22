import Page from './page';
import _owners_d from './_owners_d.page';
import assert from 'assert';

class _owners_d_pets extends Page {
  constructor() { super('/owners/\d+/pets') }
  get name() { return $('#name'); }
  get _30() { return $('*=30'); }
  get type() { return $('#type'); }
  get Add_Pet() { return $('/HTML/BODY/DIV[1]/DIV/FORM/DIV[2]/DIV/BUTTON'); }
  get Update_Pet() { return $('/HTML/BODY/DIV[1]/DIV/FORM/DIV[2]/DIV/BUTTON'); }

  doAdd_Pet({
    name,
    type
  }) {
    this.name.setValue(name);
    this._30.click();
    this.type.setValue(type);
    this.Add_Pet.click();
    return new _owners_d();
  }

  doUpdate_Pet({
    name
  }) {
    this.name.setValue(name);
    this.Update_Pet.click();
    return new _owners_d();
  }

}
export default _owners_d_pets;
