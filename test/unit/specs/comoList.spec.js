import { mount } from 'vue-test-utils';
import ComoListComponent from '@/components/ComoListComponent';

describe('ComoList.spec.js', () => {
  let wrapper;
  let list;

  beforeEach(() => {
    wrapper = mount(ComoListComponent);
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

    it('MouseEnter and MouseLeave event on Severe COPD emitted', () => {
      wrapper.vm.passComorbidityOnHover(wrapper.vm.pulmoDiseases, 0);
      expect(wrapper.emitted().hoverEvent[0]).toEqual([{ currentComorbiditySelection: '• Spirometric values AND symptomatic assessment should be sought. \n' +
      '• Post Bronchodilator FEV1: 30 - 50% of predicted; FEV1/FVC < 0.70 \n' +
      '• History of exacerbations (including prior hospitalizations) should be recorded.\n' +
      '• Worsening air flow limitation, greater SOB, reduced exercise capacity, having an ' +
      'impact on quality of life, and ability to complete activities of daily living should be present. \n',
      }]);
      wrapper.vm.clearComorbidityOnHover();
      expect(wrapper.emitted().hoverEvent[1]).toEqual([{ currentComorbiditySelection: '' }]);
    });
  });

  describe('Testing out generating IDs', () => {
    it('Generate ID for list item for CV Atrial Fibrillation', () => {
      const liCV = wrapper.vm.generateID('li', 'cv', 0);
      expect(liCV).toBe('cv_AtrialFib');
    });

    it('Generate ID for checkbox for CV Atrial Fibrillation', () => {
      const cbCV = wrapper.vm.generateID('cb', 'cv', 0);
      expect(cbCV).toBe('cv_checkbox_AtrialFib');
    });

    it('Generate ID for list item for PD Severe COPD', () => {
      const liPD = wrapper.vm.generateID('li', 'pd', 0);
      expect(liPD).toBe('pd_PulmDisease');
    });

    it('Generate ID for checkbox for PD Severe COPD', () => {
      const cbPD = wrapper.vm.generateID('cb', 'pd', 0);
      expect(cbPD).toBe('pd_checkbox_PulmDisease');
    });

    it('Generate ID for list item for Age >= 69 years old OR >= 2 risk factors (HTN, DM, OSA, CKD, BMI > 35)', () => {
      const liOther = wrapper.vm.generateID('li', 'other', 0);
      expect(liOther).toBe('other_Risk');
    });

    it('Generate ID for checkbox for Age >= 69 years old OR >= 2 risk factors (HTN, DM, OSA, CKD, BMI > 35)', () => {
      const cbOther = wrapper.vm.generateID('cb', 'other', 0);
      expect(cbOther).toBe('other_checkbox_Risk');
    });

    it('Generate ID for list item for Age >= 69 years old OR >= 2 risk factors (HTN, DM, OSA, CKD, BMI > 35)', () => {
      const liMed = wrapper.vm.generateID('li', 'med', 0);
      expect(liMed).toBe('med_Digoxin');
    });

    it('Generate ID for checkbox for Digoxin)', () => {
      const cbMed = wrapper.vm.generateID('cb', 'med', 0);
      expect(cbMed).toBe('med_checkbox_Digoxin');
    });
  });

  describe('Testing out hasEntry()', () => {
    it('Atrial fibrillation should have no glossary and return false', () => {
      expect(wrapper.vm.hasEntry(wrapper.vm.cardioDiseases[0])).toBe(false);
    });

    it('Severe COPD should have glossary and return true', () => {
      expect(wrapper.vm.hasEntry(wrapper.vm.pulmoDiseases[0])).toBe(true);
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
});
