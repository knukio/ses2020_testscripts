
describe('generated test cases', () => {
  beforeEach('open top page', () => {
    browser.url('http://localhost/petclinic/');
  });
  
  it(`/petclinic/ -> /petclinic/owners/find.html.* -> /petclinic/owners.html?lastName=`,
  () => {
    new _petclinic_()
      .go_petclinic_owners_findhtml()
      .doFind_Owner2()
      .go_petclinic_();
  });

  it(`/petclinic/ -> /petclinic/owners/find.html.* -> /owners/\d+$ -> /owners/(new|\d+/)`,
  () => {
    new _petclinic_()
      .go_petclinic_owners_findhtml()
      .doFind_Owner({
        lastName: 'ltest',
      })
      .go_owners_new_d_()
      .doAdd_Owner({
        firstName: 'ftest',
        lastName: 'ltest',
        address: 'Japan',
        city: 'Tokyo',
        telephone: '09012345678',
      });
  });

  it(`/petclinic/ -> /petclinic/owners/find.html.* -> /owners/\d+$ -> /owners/\d+/pets`,
  () => {
    new _petclinic_()
      .go_petclinic_owners_findhtml()
      .doFind_Owner({
        lastName: 'ltest',
      })
      .go_owners_d_pets()
      .doAdd_Pet({
        name: 'puppy',
        type: 'dog',
      });
  });

  it(`/petclinic/ -> /petclinic/owners/find.html.* -> /owners/\d+$ -> /owners/\d+/pets/\d+/visits`,
  () => {
    new _petclinic_()
      .go_petclinic_owners_findhtml()
      .doFind_Owner({
        lastName: 'ltest',
      })
      .go_owners_d_pets_d_visits()
      .doAdd_Visit({
        description: 'cut',
      });
  });

  it(`/petclinic/ -> /petclinic/owners/find.html.* -> /owners/(new|\d+/) -> /owners/\d+$`,
  () => {
    new _petclinic_()
      .go_petclinic_owners_findhtml()
      .go_owners_new_d_()
      .doAdd_Owner({
        firstName: 'ftest',
        lastName: 'ltest',
        address: 'Japan',
        city: 'Tokyo',
        telephone: '09012345678',
      })
      .go_petclinic_();
  });

  it(`/petclinic/ -> /petclinic/vets.html`,
  () => {
    new _petclinic_()
      .go_petclinic_vetshtml()
      .go_petclinic_();
  });

  it(`/petclinic/ -> /petclinic/oups.html`,
  () => {
    new _petclinic_()
      .go_petclinic_oupshtml()
      .go_petclinic_();
  });

});
