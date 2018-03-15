import Vue from 'vue';
import { mount } from 'vue-test-utils'; // eslint-disable-line 
import ComoListComponent from '@/components/ResultModalComponent';

describe('ComoList.spec.js', () => {
  const Component = Vue.extend(ComoListComponent);
  const vm = new Component().$mount(); // eslint-disable-line 
});
