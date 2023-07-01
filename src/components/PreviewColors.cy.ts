import PreviewColors from './components/PreviewColors.vue'

describe('<PreviewColors />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(PreviewColors)
  })
})