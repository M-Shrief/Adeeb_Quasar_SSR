import ShowCasePoems from './ShowCasePoems.vue';

describe("render a group of poems' intros", () => {
  it('two samples of poems intros, one with poetInfo and the other without it', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(ShowCasePoems, {
      props: {
        poems: [
          {
            "id": "6f3b81da-c5ae-43c9-b576-1936b80b9a34",
            "intro": "حُكمُ المَنِيَّةِ في البَرِيَّةِ جاري",
            "reviewed": true,
            "poet": {
              "id": "c08f57cf-95b7-48b7-ba7b-abab3b8622ee",
              "name": "التهامي"
            }
          }        ],
      },
    });

    cy.get('.poem p').should(
      'contain',
      'حُكمُ المَنِيَّةِ في البَرِيَّةِ جاري - التهامي'
    );
    cy.get('.poem p').should(
      'contain',
      'حُكمُ المَنِيَّةِ في البَرِيَّةِ جاري..'
    );
  });
});
