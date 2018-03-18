import { mount } from 'vue-test-utils'; // eslint-disable-line 
import ComoListComponent from '@/components/ComoListComponent';

describe('ComoList.spec.js', () => {
  const wrapper = mount(ComoListComponent);
  const list = wrapper.findAll('li');
  it('Click event on Atrial fibrillation emitted and check should be true', () => {
    list.at(1).trigger('click');
    expect(wrapper.emitted().clickEvent).toBeTruthy();
    expect(wrapper.vm.cardioDiseases[0].check).toBe(true);
    expect(wrapper.emitted().clickEvent[0]).toEqual([{ currentComorbiditySelection: 'Atrial fibrillation / History of irregular heart beat' }]);
    expect(wrapper.vm.currentComorbiditySelection.length).toBe(1);
  });
  it('Another click event on Atrial fibrillation emitted but check should be now false', () => {
    list.at(1).trigger('click');
    expect(wrapper.emitted().clickEvent).toBeTruthy();
    expect(wrapper.vm.cardioDiseases[0].check).toBe(false);
    expect(wrapper.emitted().clickEvent[0]).toEqual([{ currentComorbiditySelection: 'Atrial fibrillation / History of irregular heart beat' }]);
    expect(wrapper.vm.currentComorbiditySelection.length).toBe(1);
  });

  it('Hover event on Atrial fibrillation emitted', () => {
    list.at(1).trigger('mouseover');
    expect(wrapper.emitted().hoverEvent).toBeTruthy();
    expect(wrapper.emitted().hoverEvent[0]).toEqual([{ currentComorbiditySelection: 'Glossary entry for: Atrial fibrillation / History of irregular heart beat' }]);
  });
});
