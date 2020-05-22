import Page from './page';
import _owners_d from './_owners_d.page';
import assert from 'assert';

class _owners_d_pets_d_visits extends Page {
  constructor() { super('/owners/\d+/pets/\d+/visits') }
  get description() { return $('#description'); }
  get date() { return $('#date'); }
  get Add_Visit() { return $('/HTML/BODY/DIV[1]/DIV/FORM/DIV[2]/DIV/BUTTON'); }

  doAdd_Visit({
    description
  }) {
    this.description.setValue(description);
    this.Add_Visit.click();
    return new _owners_d();
  }

}
export default _owners_d_pets_d_visits;
