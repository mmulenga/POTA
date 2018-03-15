import App from '@/App';
import ResultModalComponent from '@/components/ResultModalComponent'; // eslint-disable-line 
import ComoListComponent from '@/components/ComoListComponent'; // eslint-disable-line 
import GlossaryComponent from '@/components/GlossaryComponent'; // eslint-disable-line 
import StatusComponent from '@/components/StatusComponent'; // eslint-disable-line 
import Vue from 'vue';
import { shallow } from 'vue-test-utils'; // eslint-disable-line 

const Constructor = Vue.extend(App);
const vm = new Constructor().$mount();

describe('App.test.js', () => {
  it('resultArray is empty at the start', () => {
    expect(vm.resultArray).toHaveLength(0);
  });
});

// describe('App.test.js', () => {
//   describe('ResultModalComponent', () => {
//     const wrapper = shallow(ResultModalComponent);
//     it('wrapper exists', () => {
//       expect(wrapper.isVueInstance()).toBe(true);
//     });
//     it('button exists', () => {
//       const button = wrapper.find('button');
//       expect(button.exists()).toBe(true);
//     });
//   });

//   describe('ComoListComponent', () => {
//     const Component = Vue.extend(ComoListComponent);
//     const vm = new Component().$mount();
//     describe('Check if data exists', () => {
//       it('Check if cardioDiseases exists', () => {
//         expect(vm.cardioDiseases).toHaveLength(11);
//       });
//       it('Check if medications exists', () => {
//         expect(vm.medications).toHaveLength(9);
//       });
//       it('Check if otherDiseases exists', () => {
//         expect(vm.otherDiseases).toHaveLength(10);
//       });
//       it('Check if pulmoDiseases exists', () => {
//         expect(vm.pulmoDiseases).toHaveLength(1);
//       });
//     });
//     describe('Check if hover', () => {
//       it('cardioDiseases', () => {
//         vm.$emit('hoverEvent');
//         const como = vm.cardioDiseases[0];
//         expect(como.comorbidity.check).toBe(false);
//       });
//     });
//   });
// });

