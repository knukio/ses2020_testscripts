
describe('generated test cases', () => {
  beforeEach('open top page', () => {
    browser.url('http://129.60.239.201:8080/');
  });
  
  it(`/ -> /owners(\?lastName=.+|/find) -> /owners\?lastName=$ -> /owners/\d+$ -> /owners/(new|\d+/)`,
  () => {
    new _()
      .go_owners_lastName_find()
      .doFind_Owner({
        lastName: '',
      })
      .go_owners_d()
      .go_owners_new_d_()
      .doAdd_Owner({
        firstName: 'test',
        lastName: 'test',
        address: 'test',
        city: 'test',
        telephone: '000',
      });
  });

  it(`/ -> /owners(\?lastName=.+|/find) -> /owners\?lastName=$ -> /owners/\d+$ -> /owners/\d+/pets -> /vets.html -> /oups`,
  () => {
    new _()
      .go_owners_lastName_find()
      .doFind_Owner({
        lastName: '',
      })
      .go_owners_d()
      .go_owners_d_pets()
      .go_vetshtml()
      .go_oups()
      .go_();
  });

  it(`/ -> /owners(\?lastName=.+|/find) -> /owners\?lastName=$ -> /owners/\d+$ -> /owners/\d+/pets/\d+/visits`,
  () => {
    new _()
      .go_owners_lastName_find()
      .doFind_Owner({
        lastName: '',
      })
      .go_owners_d()
      .go_owners_d_pets_d_visits()
      .doAdd_Visit({
        description: '体調不良',
      });
  });

  it(`/ -> /owners(\?lastName=.+|/find) -> /owners/(new|\d+/) -> /owners/\d+$`,
  () => {
    new _()
      .go_owners_lastName_find()
      .go_owners_new_d_()
      .doAdd_Owner({
        firstName: 'test',
        lastName: 'test',
        address: 'test',
        city: 'test',
        telephone: '000',
      })
      .go_owners_d_pets();
  });

  it(`/ -> /owners(\?lastName=.+|/find) -> /owners/\d+$`,
  () => {
    new _()
      .go_owners_lastName_find()
      .doFind_Owner3({
        lastName: 'test',
      })
      .go_owners_d_pets();
  });

  it(`/ -> /owners(\?lastName=.+|/find) -> /vets.html`,
  () => {
    new _()
      .go_owners_lastName_find()
      .go_vetshtml()
      .go_oups();
  });

  it(`/ -> /vets.html -> /owners(\?lastName=.+|/find)`,
  () => {
    new _()
      .go_vetshtml()
      .go_owners_lastName_find()
      .doFind_Owner({
        lastName: '',
      });
  });

  it(`/ -> /vets.html -> /oups -> /owners(\?lastName=.+|/find)`,
  () => {
    new _()
      .go_vetshtml()
      .go_oups()
      .go_owners_lastName_find()
      .doFind_Owner({
        lastName: '',
      });
  });

});
