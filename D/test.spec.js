
describe('generated test cases', () => {
  beforeEach('open top page', () => {
    browser.url('http://localhost:8080/app/');
  });
  
  it(`(/$|/app$) -> /owners(\?lastName=.+|/find) -> /owners/\d+$ -> /owners/(new|\d+/)`,
  () => {
    new __app()
      .go_owners_lastName_find()
      .doFind_Owner3({
        lastName: 'b',
      })
      .go_owners_new_d_()
      .doAdd_Owner({
        firstName: 'Taro',
        lastName: 'Tanaka',
        address: 'Shibuya',
        city: 'Tokyo',
        telephone: '1234567890',
      });
  });

  it(`(/$|/app$) -> /owners(\?lastName=.+|/find) -> /owners/\d+$ -> /owners/\d+/pets`,
  () => {
    new __app()
      .go_owners_lastName_find()
      .doFind_Owner3({
        lastName: 'b',
      })
      .go_owners_d_pets()
      .doUpdate_Pet({
        birthDate: '2000-01-02',
        name: 'Piyotaro2',
        type: 'cat',
      });
  });

  it(`(/$|/app$) -> /owners(\?lastName=.+|/find) -> /owners/\d+$ -> /owners/\d+/pets/\d+/visits`,
  () => {
    new __app()
      .go_owners_lastName_find()
      .doFind_Owner3({
        lastName: 'b',
      })
      .go_owners_d_pets_d_visits()
      .doAdd_Visit({
        date: '2000-01-01',
        description: 'aaa',
      });
  });

  it(`(/$|/app$) -> /owners(\?lastName=.+|/find) -> /owners/\d+$ -> /owners\?lastName=($|D)`,
  () => {
    new __app()
      .go_owners_lastName_find()
      .doFind_Owner3({
        lastName: 'b',
      })
      .go_owners_lastName_find();
  });

  it(`(/$|/app$) -> /owners(\?lastName=.+|/find) -> /owners/\d+$ -> /vets.html`,
  () => {
    new __app()
      .go_owners_lastName_find()
      .doFind_Owner3({
        lastName: 'b',
      })
      .go_vetshtml()
      .go_owners_lastName_find();
  });

  it(`(/$|/app$) -> /owners(\?lastName=.+|/find) -> /owners/\d+$ -> /oups`,
  () => {
    new __app()
      .go_owners_lastName_find()
      .doFind_Owner3({
        lastName: 'b',
      })
      .go_oups();
  });

  it(`(/$|/app$) -> /owners(\?lastName=.+|/find) -> /owners\?lastName=($|D) -> /owners/\d+$`,
  () => {
    new __app()
      .go_owners_lastName_find()
      .doFind_Owner2()
      .go_owners_d()
      .go_owners_lastName_find();
  });

  it(`(/$|/app$) -> /owners(\?lastName=.+|/find) -> /owners/(new|\d+/) -> /owners/\d+$`,
  () => {
    new __app()
      .go_owners_lastName_find()
      .go_owners_new_d_()
      .doAdd_Owner({
        firstName: 'Taro',
        lastName: 'Tanaka',
        address: 'Shibuya',
        city: 'Tokyo',
        telephone: '1234567890',
      })
      .go_owners_lastName_find();
  });

  it(`(/$|/app$) -> /owners(\?lastName=.+|/find) -> /vets.html`,
  () => {
    new __app()
      .go_owners_lastName_find()
      .go_vetshtml()
      .go_owners_lastName_find();
  });

});
