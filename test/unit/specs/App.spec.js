import { mount } from 'vue-test-utils';
import App from '@/App';

describe('App.spec.js', () => {
  const wrapper = mount(App);
  it('resultArray is empty at the start', () => {
    expect(wrapper.vm.resultArray).toHaveLength(0);
  });
  it('glossaryEntry is empty at the start', () => {
    expect(wrapper.vm.glossaryEntry).toHaveLength(0);
  });
  it('updateDescription() displays the correct glossary for AF', () => {
    wrapper.vm.updateDescription({ currentComorbiditySelection: 'Atrial fibrillation / History of irregular heart beat' });
    expect(wrapper.vm.glossaryEntry).toEqual('Atrial fibrillation / History of irregular heart beat');
  });
  it('updateArray() displays the correct list for resultArray', () => {
    wrapper.vm.updateArray({ currentComorbiditySelection: 'Atrial fibrillation / History of irregular heart beat' });
    expect(wrapper.vm.resultArray).toEqual(['Atrial fibrillation / History of irregular heart beat']);
  });
  it('updateArray() displays the correct list for resultArray when selection is delselected', () => {
    wrapper.vm.updateArray({ currentComorbiditySelection: 'Atrial fibrillation / History of irregular heart beat' });
    expect(wrapper.vm.resultArray).toEqual([]);
  });
});
