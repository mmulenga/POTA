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
      expect(cmp.vm.exams).toEqual(['ECG']);
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
      expect(cmp.vm.exams).toEqual(['ECG']);
      expect(cmp.vm.conditionalExams[0].conditionPhrase).toBe('Is valve mechanical?');
      expect(cmp.vm.conditionalExams[0].exams).toEqual(['CBC']);
    });
  });
});

