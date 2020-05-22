
describe('generated test cases', () => {
  beforeEach('open top page', () => {
    browser.url('http://localhost:8080/');
  });
  
  it(`/ -> /owners(\?lastName=.+|/find) -> /vets.html -> /oups`,
  () => {
    new _()
      .go_owners_lastName_find()
      .go_vetshtml()
      .go_oups()
      .go_();
  });

  it(`/ -> /owners(\?lastName=.+|/find) -> /owners\?lastName=$`,
  () => {
    new _()
      .go_owners_lastName_find()
      .doFind_Owner3()
      .go_owners_lastName_find();
  });

  it(`/ -> /owners(\?lastName=.+|/find) -> /owners/\d+$ -> /owners/(new|\d+/)`,
  () => {
    new _()
      .go_owners_lastName_find()
      .doFind_Owner2({
        lastName: 'TEST2',
      })
      .go_owners_new_d_()
      .doUpdate_Owner({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        telephone: '',
      });
  });

  it(`/ -> /owners(\?lastName=.+|/find) -> /owners/\d+$ -> /owners/\d+/pets`,
  () => {
    new _()
      .go_owners_lastName_find()
      .doFind_Owner2({
        lastName: 'TEST2',
      })
      .go_owners_d_pets()
      .doAdd_Pet({
        name: 'SAMPLE',
        birthDate: '2020-05-10',
      });
  });

  it(`/ -> /owners(\?lastName=.+|/find) -> /owners/\d+$ -> /owners/\d+/pets/\d+/visits`,
  () => {
    new _()
      .go_owners_lastName_find()
      .doFind_Owner2({
        lastName: 'TEST2',
      })
      .go_owners_d_pets_d_visits()
      .doAdd_Visit({
        description: 'TEST',
      });
  });

  it(`/ -> /owners(\?lastName=.+|/find) -> /owners/\d+$ -> /vets.html`,
  () => {
    new _()
      .go_owners_lastName_find()
      .doFind_Owner2({
        lastName: 'TEST2',
      })
      .go_vetshtml()
      .go_oups();
  });

  it(`/ -> /owners(\?lastName=.+|/find) -> /owners/(new|\d+/) -> /owners/\d+$`,
  () => {
    new _()
      .go_owners_lastName_find()
      .go_owners_new_d_()
      .doUpdate_Owner2({
        firstName: 'Betty2',
        lastName: 'Davis2',
        address: '638 Cardinal Ave.2',
        city: 'Sun Prairie2',
        telephone: '6085551740',
      })
      .go_owners_d_pets();
  });

});
