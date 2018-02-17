import Vue from 'vue';
// import Vue from 'vue/dist/vue';
import App from '@/App';
import Prototype from '@/components/Prototype';
import ComoListComponent from '@/components/ComoListComponent';
import { Condition, Exam } from '@/constants';

describe('Testing all comorbidities in ComoListComponent.vue', () => {
  it('returns correct list of cardiovascular diseases', () => {
    const Component = Vue.extend(ComoListComponent);
    const vm = new Component().$mount();
    const cardiovascularList = [{ comorbidity: Condition.AtrialFib },
      { comorbidity: Condition.Defib },
      { comorbidity: Condition.CAD },
      { comorbidity: Condition.CardiacStent },
      { comorbidity: Condition.CerebralDisease },
      { comorbidity: Condition.PulmonaryVascular },
      { comorbidity: Condition.TIA },
      { comorbidity: Condition.Stroke },
      { comorbidity: Condition.VHD },
      { comorbidity: Condition.HeartFail },
      { comorbidity: Condition.PVD }];
    expect(vm.cardioDiseases).toEqual(cardiovascularList);
  });

  it('returns correct list of pulmonary diseases', () => {
    const Component = Vue.extend(ComoListComponent);
    const vm = new Component().$mount();
    const pulmonaryList = [{ comorbidity: Condition.PulmDisease }];
    expect(vm.pulmoDiseases).toEqual(pulmonaryList);
  });

  it('returns correct list of other diseases', () => {
    const Component = Vue.extend(ComoListComponent);
    const vm = new Component().$mount();
    const otherDiseaseList = [{ comorbidity: Condition.Bleeding },
      { comorbidity: Condition.Anemia },
      { comorbidity: Condition.ActiveBleeding },
      { comorbidity: Condition.Renal },
      { comorbidity: Condition.Diabetes },
      { comorbidity: Condition.Malignancy },
      { comorbidity: Condition.Hepatic },
      { comorbidity: Condition.Adrenal },
      { comorbidity: Condition.Pituitary },
      { comorbidity: Condition.Endocrine }];
    expect(vm.otherDiseases).toEqual(otherDiseaseList);
  });

  it('returns correct list of medications', () => {
    const Component = Vue.extend(ComoListComponent);
    const vm = new Component().$mount();
    const medicationList = [{ comorbidity: Condition.Digoxin },
      { comorbidity: Condition.Lithium },
      { comorbidity: Condition.Diuretics },
      { comorbidity: Condition.ACEI },
      { comorbidity: Condition.ARB },
      { comorbidity: Condition.NSAIDS },
      { comorbidity: Condition.Anticoagulant },
      { comorbidity: Condition.Antiplatelet },
      { comorbidity: Condition.Steroid }];
    expect(vm.medications).toEqual(medicationList);
  });
});

describe('Testing framework in Prototype.vue', () => {
  it('returns correct framework being used', () => {
    const Component = Vue.extend(Prototype);
    const vm = new Component().$mount();
    expect(vm.framework_name).toEqual('VueJS');
  });
});

