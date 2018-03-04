import Vue from 'vue';
// import App from '../../../src/components/Prototype';

describe('App.test.js', () => {
  let cmp;
  let vm;
  beforeEach(() => {
    cmp = Vue.extend(App); // Create a copy of the original component
    vm = new cmp({
      data: { // Replace data value with this fake data
        framework_name: 'Vue',
      },
    }).$mount(); // Instances and mounts the component
  });
  it('equals framework to VueJS', () => {
    expect(vm.framework_name).toEqual('Vue');
  });

  it('has the expected html structure', () => {
    expect(vm.$el).toMatchSnapshot();
  });
});
