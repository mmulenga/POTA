// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

Vue.config.productionTip = process.env.NODE_ENV === 'production';

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>',
// });

/* Simple addition function for testing */
export function add(a, b) {
  return a + b;
}


/**
 * Asserts a condition is true and prints a message to console otherwise.
 * Becomes a null operation when in a production deployment
 * @param {Boolean} condition The condition to be verified
 * @param {String} message Message to print out on failure
 */
export function assert(condition, message) {
  if (!Vue.config.productionTip && !condition) {
    // eslint-disable-next-line no-console
    console.assert(`ASSERT failed: ${message}`);
  }
}

<<<<<<< HEAD
export default { assert, add };
=======
>>>>>>> 61cd46f72d7b8296933c4e94eb3d42ce00fa92a8
