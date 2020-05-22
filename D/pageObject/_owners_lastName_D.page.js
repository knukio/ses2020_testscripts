import Page from './page';
import _owners_lastName_find from './_owners_lastName_find.page';
import __app from './__app.page';
import _owners_d from './_owners_d.page';
import assert from 'assert';

class _owners_lastName_D extends Page {
  constructor() { super('/owners\?lastName=($|D)') }
  get FIND_OWNERS() { return $('/HTML/BODY/NAV/DIV/DIV[2]/UL/LI[3]/A/SPAN[2]'); }
  get HOME() { return $('*=HOME'); }
  get Taro_Goto() { return $('*=Taro Goto'); }
  get Taro_Tanaka() { return $('*=Taro Tanaka'); }
  get Harold_Davis() { return $('*=Harold Davis'); }
  get _1_1() { return $('*=1 1'); }

  go_owners_lastName_find() {
    this.FIND_OWNERS.click();
    return new _owners_lastName_find();
  }

  go__app() {
    this.HOME.click();
    return new __app();
  }

  go_owners_d() {
    this.Taro_Goto.click();
    return new _owners_d();
  }

  go_owners_d2() {
    this.Taro_Tanaka.click();
    return new _owners_d();
  }

  go_owners_d3() {
    this.Harold_Davis.click();
    return new _owners_d();
  }

  go_owners_d4() {
    this._1_1.click();
    return new _owners_d();
  }

}
export default _owners_lastName_D;
