import ShowCasePoetry from './ShowCasePoetry.vue';

describe('Renders properly', () => {
  it('a ChosenVerse on Main page with one Verse', () => {
    // see: https://on.cypress.io/mounting-vue
    const onPrintSpy = cy.spy().as('onPrintSpy');
    cy.mount(ShowCasePoetry, {
      props: {
        chosenVerses: [
          {
            "id": "5f1bf8c1-4859-4857-8bec-95ce7c70b045",
            "tags": "الرثاء,الحزن",
            "verses": [
              {
                "first": "وَأَكُفُّ نيران الأَسى وَلَرُبَّما",
                "sec": "غلب التَصَبُّر فارتَمَت بِشَرارِ"
              }
            ],
            "reviewed": true,
            "poet": {
              "id": "c08f57cf-95b7-48b7-ba7b-abab3b8622ee",
              "name": "التهامي"
            },
            "poem": {
              "id": "6f3b81da-c5ae-43c9-b576-1936b80b9a34"
            }
          },
        ],
        routeName: 'main',
        onPrint: onPrintSpy,
      },
    });

    cy.get('.one-verse>.first').should(
      'contain',
      "وَأَكُفُّ نيران الأَسى وَلَرُبَّما"
    );
    cy.get('.one-verse>.sec').should(
      'contain',
      "غلب التَصَبُّر فارتَمَت بِشَرارِ"
    );
    cy.get('.details').should('contain', 'التهامي - القصيدة الكاملة');
    cy.get('.print-button:first').click();
    cy.get('@onPrintSpy').should('have.been.calledWith', {
      id: '5f1bf8c1-4859-4857-8bec-95ce7c70b045',
      verses: [
        {
          "first": "وَأَكُفُّ نيران الأَسى وَلَرُبَّما",
          "sec": "غلب التَصَبُّر فارتَمَت بِشَرارِ"
        },
      ],
    });
  });

  it('a ChosenVerse on Poet page with two Verse', () => {
    // see: https://on.cypress.io/mounting-vue
    const onPrintSpy = cy.spy().as('onPrintSpy');
    cy.mount(ShowCasePoetry, {
      props: {
        chosenVerses: [
          {
            "id": "5f1bf8c1-4859-4857-8bec-95ce7c70b045",
            "tags": "الرثاء,الحزن",
            "verses": [
              {
                "first": "وَأَكُفُّ نيران الأَسى وَلَرُبَّما",
                "sec": "غلب التَصَبُّر فارتَمَت بِشَرارِ"
              },
              {
                "first": "وَأَكُفُّ نيران الأَسى وَلَرُبَّما",
                "sec": "غلب التَصَبُّر فارتَمَت بِشَرارِ"
              }
            ],
            "reviewed": true,
            "poet": {
              "id": "c08f57cf-95b7-48b7-ba7b-abab3b8622ee",
              "name": "التهامي"
            },
            "poem": {
              "id": "6f3b81da-c5ae-43c9-b576-1936b80b9a34"
            }
          },
        ],
        routeName: 'poet',
        onPrint: onPrintSpy,
      },
    });

    cy.get('.two-verse>.first').should(
      'contain',
      "وَأَكُفُّ نيران الأَسى وَلَرُبَّما"
    );
    cy.get('.two-verse>.sec').should(
      'contain',
      "غلب التَصَبُّر فارتَمَت بِشَرارِ"
    );
    cy.get('.details').should('contain', 'القصيدة الكاملة');
    cy.get('.print-button').click();
    cy.get('@onPrintSpy').should('have.been.calledWith', {
      id: '5f1bf8c1-4859-4857-8bec-95ce7c70b045',
      verses: [
        {
          "first": "وَأَكُفُّ نيران الأَسى وَلَرُبَّما",
          "sec": "غلب التَصَبُّر فارتَمَت بِشَرارِ"
        },
        {
          "first": "وَأَكُفُّ نيران الأَسى وَلَرُبَّما",
          "sec": "غلب التَصَبُّر فارتَمَت بِشَرارِ"
        }
      ],
    });
  });
});
