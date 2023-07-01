import ShowCasePoets from './ShowCasePoets.vue';

describe('<ShowCasePoets />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(ShowCasePoets, {
      props: {
        poets: [
          {
            "id": "c08f57cf-95b7-48b7-ba7b-abab3b8622ee",
            "name": "التهامي",
            "time_period": "عباسي",
          }
        ],
      },
    });

    cy.get('.poet>p').should('contain', 'التهامي');
    cy.get('.poet').should('have.attr', 'to', '/poet/c08f57cf-95b7-48b7-ba7b-abab3b8622ee');
  });
})
