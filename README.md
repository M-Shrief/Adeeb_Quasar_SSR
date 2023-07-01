# All in TypeScript, front-end for "Adeeb أديب" developed to be **SSR** with Quasar, Vuejs, Pinia and vue-router.

**Overview**:

- \_./css file for our app.scss and mixins.scss

- _./components_ file for our reusable components across the app, and a
  component test for each one of them with cypress.

- _./composables_ file for our contained and reusable stateful logic across the app.

- _./pages_ separated pages to separate logic groups from each other, and map
  each group of logic to specific route.

- _./router_ file to contain our routing.

- _./stores_ file for to manage our app state, logic and api requests, while
  leveraging its reactivity.

- _App.vue_ to hold and render our router-view.

- _quasar.config.js_ used to set configuration for our app.

### Working on:

- handle cookies and authentication better at the front end.
- persist pinia's data on the same session
