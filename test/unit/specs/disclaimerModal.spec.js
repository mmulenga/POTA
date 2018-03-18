import { mount } from 'vue-test-utils'; // eslint-disable-line 
import DisclaimerModalComponent from '@/components/DisclaimerModalComponent';

describe('disclaimerModal.spec.js', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(DisclaimerModalComponent);
  });

  it('isVisible should be true at the start', () => {
    expect(wrapper.vm.isVisible).toBe(true);
  });

  it('isVisible should be false after button is pressed', () => {
    wrapper.vm.hideModal();
    expect(wrapper.vm.isVisible).toBe(false);
  });
});
