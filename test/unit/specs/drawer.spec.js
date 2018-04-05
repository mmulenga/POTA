import { mount } from 'vue-test-utils';
import Drawer from '@/components/Drawer';

describe('drawer.spec.js', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Drawer);
  });

  describe('Testing out the Watch methods', () => {
    it('Changing the "show" property should emit an "on-show" event ', () => {
      const stub = jest.fn();
      wrapper.vm.$on('on-show', stub);
      wrapper.vm.show = true;
      wrapper.vm.$nextTick(() => {
        expect(stub).toBeCalled();
      });
    });
    it('Changing the "show" property should emit an "on-show" event ', () => {
      wrapper.setProps({ show: true });
      wrapper.props().show = false;
      const stub = jest.fn();
      wrapper.vm.$on('on-show', stub);
      wrapper.vm.$nextTick(() => {
        expect(stub).not.toBeCalled();
      });
    });
  });
  describe('Testing out the methods of Drawer.vue', () => {
    it('Calling hideMask() should emit an "on-hide" event ', () => {
      const stub = jest.fn();
      wrapper.vm.$on('on-hide', stub);
      wrapper.vm.hideMask();
      expect(stub).toBeCalled();
    });
    it('Calling submitExams() should emit an "submit-exams" event ', () => {
      const stub = jest.fn();
      wrapper.vm.$on('submit-exams', stub);
      wrapper.vm.submitExams();
      expect(stub).toBeCalled();
    });
  });
});
