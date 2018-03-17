import Vue from 'vue';
import ComoListComponent from '@/components/ComoListComponent';

describe('Testing all comorbidities in ComoListComponent.vue', () => {
  it('List of cardiovascular diseases matches snapshot', () => {
    const Component = Vue.extend(ComoListComponent);
    const vm = new Component().$mount();
    expect(vm.cardioDiseases).toMatchSnapshot();
  });

  it('List of pulmonary diseases matches snapshot', () => {
    const Component = Vue.extend(ComoListComponent);
    const vm = new Component().$mount();
    expect(vm.pulmoDiseases).toMatchSnapshot();
  });

  it('List of other diseases matches snapshot', () => {
    const Component = Vue.extend(ComoListComponent);
    const vm = new Component().$mount();
    expect(vm.otherDiseases).toMatchSnapshot();
  });

  it('List of medications matches snapshot', () => {
    const Component = Vue.extend(ComoListComponent);
    const vm = new Component().$mount();
    expect(vm.medications).toMatchSnapshot();
  });
});

