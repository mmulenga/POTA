import Vue from 'vue';
import { mount } from 'vue-test-utils';
import ResultModalComponent from '@/components/ResultModalComponent';

Vue.component('ResultModalComponent', ResultModalComponent);

describe('resultsModal.test.js', () => {
  const Component = Vue.extend(ResultModalComponent);
  Vue.use(ResultModalComponent);
  const vm = new Component().$mount();

  describe('testing showModal()', () => {
    it('isVisable is false at the start', () => {
      expect(vm.isVisible).toBe(false);
    });
    it('isVisable is true after showModal() method', () => {
      vm.showModal();
      expect(vm.isVisible).toBe(true);
      vm.showModal();
      expect(vm.isVisible).toBe(false);
    });
  });
  describe('testing getExams()', () => {
    it('exams and conditionalExams are empty at the start', () => {
      expect(vm.exams).toHaveLength(0);
      expect(vm.conditionalExams).toHaveLength(0);
    });
    it('exams array to be filled in', () => {
      // Mocking data to be used for getExam() method
      const cmp = mount(ResultModalComponent, {
        propsData: {
          resultArray: ['Atrial fibrillation / History of irregular heart beat'],
        },
      });
      expect(cmp.vm.resultArray).toEqual(['Atrial fibrillation / History of irregular heart beat']);
      // Find the "submit" button
      const button = cmp.findAll('button').at(0);
      // Clicking button should run getExams() method.
      button.trigger('click');
      // After getExams() is called, exam array should be filled
      expect(cmp.vm.exams).toEqual(['Group and Screen','ECG']);
    });
    it('ConditionalExams array to be filled in', () => {
      // Mocking data to be used for getExam() method
      const cmp = mount(ResultModalComponent, {
        propsData: {
          resultArray: ['Valvular heart disease / Valve Replacement'],
        },
      });
      // Find the "submit" button
      const button = cmp.findAll('button').at(0);
      // Clicking button should run getExams() method.
      button.trigger('click');
      // After getExams() is called, exam array should be filled
      expect(cmp.vm.exams).toEqual(['Group and Screen']);
    });
  });
  describe('Testing emit methods', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(ResultModalComponent);
    });

    it('clearResultArray() should emit an "clear-results" event', () => {
      const stub = jest.fn();
      wrapper.vm.$on('clear-results', stub);
      wrapper.vm.clearResultArray();
      expect(stub).toHaveBeenCalled();
    });
    it('drawerToggle() should emit an "drawer-toggle" event', () => {
      const stub = jest.fn();
      wrapper.vm.$on('drawer-toggle', stub);
      wrapper.vm.drawerToggle();
      expect(stub).toHaveBeenCalled();
    });
    it('toggleReset() should emit an "reset-toggle" event', () => {
      const stub = jest.fn();
      wrapper.vm.$on('reset-toggle', stub);
      wrapper.vm.toggleReset();
      expect(stub).toHaveBeenCalled();
    });
    it('hideButtons() should emit an "hide-buttons" event', () => {
      const stub = jest.fn();
      wrapper.vm.$on('hide-buttons', stub);
      wrapper.vm.hideButtons();
      expect(stub).toHaveBeenCalled();
    });
  });
});

