import Vue from 'vue';
import { mount } from 'vue-test-utils';
import ResultModalComponent from '@/components/ResultModalComponent';

describe('resultsModal.test.js', () => {
  const Component = Vue.extend(ResultModalComponent);
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
    it('resultArray to be filled in', () => {
      const cmp = mount(ResultModalComponent, {
      // Beware that props is overriden using `propsData`
        propsData: {
          resultArray: ['Atrial fibrillation / History of irregular heart beat'],
        },
      });
      expect(cmp.vm.resultArray).toEqual(['Atrial fibrillation / History of irregular heart beat']);
      cmp.vm.getExams();
      expect(cmp.vm.resultArray).toEqual(['ECG']);
    });
  });
});

