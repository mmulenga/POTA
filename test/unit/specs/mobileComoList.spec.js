import { mount } from 'vue-test-utils';
import MobileComoListComponent from '@/components/MobileComoListComponent';

describe('ComoList.spec.js', () => {
  let wrapper;
  let list;

  beforeEach(() => {
    wrapper = mount(MobileComoListComponent);
    list = wrapper.findAll('li');
  });

  describe('Testing out Click and Hover events for aggregateConditions() and passComorbidityOnHover()', () => {
    it('Click event on Atrial fibrillation emitted but check should be now true', () => {
      list.at(1).trigger('click');
      expect(wrapper.emitted().clickEvent).toBeTruthy();
      expect(wrapper.vm.cardioDiseases[0].check).toBe(true);
      expect(wrapper.emitted().clickEvent[0]).toEqual([{ currentComorbiditySelection: 'Atrial fibrillation / History of irregular heart beat' }]);
      expect(wrapper.vm.currentComorbiditySelection.length).toBe(1);
    });

    it('Atrial fibrillation should be unchecked when clicked twice', () => {
      list.at(1).trigger('click');
      list.at(1).trigger('click');
      expect(wrapper.emitted().clickEvent).toBeTruthy();
      expect(wrapper.vm.cardioDiseases[0].check).toBe(false);
    });

    it('passComorbidityOnHover() on Severe COPD emitted', () => {
      const stub = jest.fn();
      wrapper.vm.$on(['update-glossary', 'toggle-buttons'], stub);
      wrapper.vm.passComorbidityOnHover(wrapper.vm.pulmoDiseases, 0);
      expect(stub).toHaveBeenCalled();
    });

    it('clearComorbidityOnHover() on Severe COPD emitted', () => {
      const stub = jest.fn();
      wrapper.vm.$on(['clear-glossary', 'toggle-buttons'], stub);
      wrapper.vm.clearComorbidityOnHover();
      expect(stub).toHaveBeenCalled();
    });
  });

  describe('Testing out generating IDs', () => {
    it('Generate ID for list item for CV Atrial Fibrillation', () => {
      const liCV = wrapper.vm.generateID('li', 'cv', 0);
      expect(liCV).toBe('mobile_cv_AtrialFib');
    });

    it('Generate ID for checkbox for CV Atrial Fibrillation', () => {
      const cbCV = wrapper.vm.generateID('cb', 'cv', 0);
      expect(cbCV).toBe('mobile_cv_checkbox_AtrialFib');
    });

    it('Generate ID for list item for PD Severe COPD', () => {
      const liPD = wrapper.vm.generateID('li', 'pd', 0);
      expect(liPD).toBe('mobile_pd_PulmonaryVascular');
    });

    it('Generate ID for checkbox for PD Severe COPD', () => {
      const cbPD = wrapper.vm.generateID('cb', 'pd', 0);
      expect(cbPD).toBe('mobile_pd_checkbox_PulmonaryVascular');
    });

    it('Generate ID for list item for Age >= 69 years old OR >= 2 risk factors (HTN, DM, OSA, CKD, BMI > 35)', () => {
      const liOther = wrapper.vm.generateID('li', 'other', 0);
      expect(liOther).toBe('mobile_other_Risk');
    });

    it('Generate ID for checkbox for Age >= 69 years old OR >= 2 risk factors (HTN, DM, OSA, CKD, BMI > 35)', () => {
      const cbOther = wrapper.vm.generateID('cb', 'other', 0);
      expect(cbOther).toBe('mobile_other_checkbox_Risk');
    });

    it('Generate ID for list item for Other Age > 69', () => {
      const liMed = wrapper.vm.generateID('li', 'med', 0);
      expect(liMed).toBe('mobile_med_Digoxin');
    });

    it('Generate ID for checkbox for Other Age > 69', () => {
      const cbMed = wrapper.vm.generateID('cb', 'med', 0);
      expect(cbMed).toBe('mobile_med_checkbox_Digoxin');
    });
  });

  describe('Testing out hasEntry()', () => {
    it('Atrial fibrillation should have no glossary and return false', () => {
      expect(wrapper.vm.hasEntry(wrapper.vm.cardioDiseases[0])).toBe(false);
    });

    it('Severe COPD should have glossary and return true', () => {
      expect(wrapper.vm.hasEntry(wrapper.vm.pulmoDiseases[1])).toBe(true);
    });
  });
  describe('Testing out resetData()', () => {
    it('Should not be equal after reseting data', () => {
      list.at(1).trigger('click');
      expect(wrapper.emitted().clickEvent).toBeTruthy();
      const old = wrapper.vm.$data.cardioDiseases[0].check;
      wrapper.vm.resetData();
      expect(wrapper.vm.$data.cardioDiseases[0].check).not.toEqual(old);
    });
  });
  describe('Testing out resetScrollPosition()', () => {
    it('Should emit an "reset-scroll-position" event', () => {
      const stub = jest.fn();
      wrapper.vm.$on('reset-scroll-position', stub);
      wrapper.vm.resetScrollPosition();
      expect(stub).toHaveBeenCalled();
    });
  });
  describe('Testing out showModal()', () => {
    it('Should set isVisible to be the opposite', () => {
      wrapper.vm.showModal();
      expect(wrapper.vm.isVisible).toBe(true);
    });
  });
});

