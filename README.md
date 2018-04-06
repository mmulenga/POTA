# Preop testing recommendation webapp
The definition for all relevant medical items in the app must be set in `src/constants.js`

All configuration for the application is to be done in the `src/configuration.js` file.

In the event of entirely new items being added to the system, changes to `data()` must be made
in `src/ComoListComponent.vue` and `src/MobileComoListComponent.vue`.


## Build Setup

``` bash
# install dependencies (you will need to `npm install yarn` first)
yarn install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm run test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
