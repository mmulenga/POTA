// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

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

function assert(condition, message) {
  if (!condition) {
    // eslint-disable-next-line no-console
    console.log(`ASSERT failed: ${message}`);
  }
}

export default { add, assert };
