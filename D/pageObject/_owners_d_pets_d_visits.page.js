import Page from './page';
import _owners_d from './_owners_d.page';
import _owners_lastName_find from './_owners_lastName_find.page';
import assert from 'assert';

class _owners_d_pets_d_visits extends Page {
  constructor() { super('/owners/\d+/pets/\d+/visits') }
  get date() { return $('#date'); }
  get description() { return $('#description'); }
  get Add_Visit() { return $('/HTML/BODY/DIV/DIV/FORM/DIV[2]/DIV/BUTTON'); }
  get FIND_OWNERS() { return $('/HTML/BODY/NAV/DIV/DIV[2]/UL/LI[3]/A/SPAN[2]'); }

  doAdd_Visit({
    date,
    description
  }) {
    this.date.setValue(date);
    this.description.setValue(description);
    this.Add_Visit.click();
    this.date.setValue(date);
    this.Add_Visit.click();
    return new _owners_d();
  }

  go_owners_lastName_find() {
    this.FIND_OWNERS.click();
    return new _owners_lastName_find();
  }

}
export default _owners_d_pets_d_visits;
