import ShowCaseProse from './ShowCaseProse.vue';

describe("It's renders properly", () => {
  it(' a Prose on Main page', () => {
    // see: https://on.cypress.io/mounting-vue
    const onPrintSpy = cy.spy().as('onPrintSpy');
    cy.mount(ShowCaseProse, {
      props: {
        proses: [
          {
            "id": "005552f5-2ffd-4860-8f6c-13a53de956de",
            "tags": "حكمة, رثاء",
            "qoute": "يرحل الراحلون ليبعثوا في القلوب الذكرى، ويجددوا في الأفئدة بنيان الحسرة، ويورثوا المهج نيران الألم.",
            "reviewed": true,
            "poet": {
              "id": "b1f1911b-0aeb-4925-b38e-cfec7a692ac4",
              "name": "محمود شاكر (أبو فهر)"
            }
          }
        ],
        routeName: 'main',
        onPrint: onPrintSpy,
      },
    });
    cy.get('.prose-item>.qoute').should(
      'contain',
      "يرحل الراحلون ليبعثوا في القلوب الذكرى، ويجددوا في الأفئدة بنيان الحسرة، ويورثوا المهج نيران الألم."
    );
    cy.get('.details').should('contain', 'محمود شاكر (أبو فهر)');
    cy.get('.details').should(
      'have.attr',
      'to',
      '/poet/b1f1911b-0aeb-4925-b38e-cfec7a692ac4'
    );

    cy.get('.print-button').click();
    cy.get('@onPrintSpy').should('have.been.calledWith', {
      id: '005552f5-2ffd-4860-8f6c-13a53de956de',
      qoute: "يرحل الراحلون ليبعثوا في القلوب الذكرى، ويجددوا في الأفئدة بنيان الحسرة، ويورثوا المهج نيران الألم.",

    });
  });

  it(' a Prose on Poet page', () => {
    // see: https://on.cypress.io/mounting-vue
    const onPrintSpy = cy.spy().as('onPrintSpy');
    cy.mount(ShowCaseProse, {
      props: {
        proses: [
          {
            "id": "005552f5-2ffd-4860-8f6c-13a53de956de",
            "tags": "حكمة, رثاء",
            "qoute": "يرحل الراحلون ليبعثوا في القلوب الذكرى، ويجددوا في الأفئدة بنيان الحسرة، ويورثوا المهج نيران الألم.",
            "reviewed": true,
            "poet": {
              "id": "b1f1911b-0aeb-4925-b38e-cfec7a692ac4",
              "name": "محمود شاكر (أبو فهر)"
            }
          }
        ],
        routeName: 'poet',
        onPrint: onPrintSpy,
      },
    });
    cy.get('.prose-item>.qoute').should(
      'contain',
      "يرحل الراحلون ليبعثوا في القلوب الذكرى، ويجددوا في الأفئدة بنيان الحسرة، ويورثوا المهج نيران الألم."
    );

    cy.get('.grid-poet');
    cy.get('.print-button').click();
    cy.get('@onPrintSpy').should('have.been.calledWith', {
      id: '005552f5-2ffd-4860-8f6c-13a53de956de',
      qoute:
      "يرحل الراحلون ليبعثوا في القلوب الذكرى، ويجددوا في الأفئدة بنيان الحسرة، ويورثوا المهج نيران الألم.",
    });
  });
});
