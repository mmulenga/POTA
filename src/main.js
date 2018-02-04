// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

// Comment this out for the sake of testing add() function
require('../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss');

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});

/* Simple addition function for testing */
function add(a, b) {
  return a + b;
}
module.exports = add;
