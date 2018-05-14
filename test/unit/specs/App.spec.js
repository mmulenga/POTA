import { mount } from 'vue-test-utils';
import App from '@/App';

describe('App.spec.js', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(App);
  });
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
  it('clearDescription() displays an empty glossary', () => {
    wrapper.vm.updateDescription({ currentComorbiditySelection: 'Atrial fibrillation / History of irregular heart beat' });
    wrapper.vm.clearDescription();
    expect(wrapper.vm.glossaryEntry).toEqual('');
  });
  it('updateArray() displays the correct list for resultArray', () => {
    wrapper.vm.updateArray({ currentComorbiditySelection: 'Atrial fibrillation / History of irregular heart beat' });
    expect(wrapper.vm.resultArray).toEqual(['Atrial fibrillation / History of irregular heart beat']);
  });
  it('clearResults() displays an empty list for resultArray', () => {
    wrapper.vm.updateArray({ currentComorbiditySelection: 'Atrial fibrillation / History of irregular heart beat' });
    wrapper.vm.clearResults();
    expect(wrapper.vm.resultArray).toEqual([]);
  });
  it('updateArray() displays the correct list for resultArray when selection is delselected', () => {
    wrapper.vm.updateArray({ currentComorbiditySelection: 'Atrial fibrillation / History of irregular heart beat' });
    wrapper.vm.updateArray({ currentComorbiditySelection: 'Atrial fibrillation / History of irregular heart beat' });
    expect(wrapper.vm.resultArray).toEqual([]);
  });

  describe('Testing toggles()', () => {
    it('drawerToggle() changes drawerShow correctly', () => {
      expect(wrapper.vm.drawerShow).toBe(false);
      wrapper.vm.drawerToggle();
      expect(wrapper.vm.drawerShow).toBe(true);
    });
    it('buttonsToggle() changes buttonsHidden correctly', () => {
      expect(wrapper.vm.buttonsHidden).toBe(false);
      wrapper.vm.buttonsToggle();
      expect(wrapper.vm.buttonsHidden).toBe(true);
    });
  });
  describe('Testing resetScrollPosition()', () => {
    it('.show !== null', () => {
      expect(wrapper.vm.$el.querySelector('.show')).not.toBeNull();
      wrapper.vm.$el.querySelector('.show').scrollTop = 1000;
      expect(wrapper.vm.$el.querySelector('.show').scrollTop).toBe(1000);
      wrapper.vm.resetScrollPosition();
      expect(wrapper.vm.$el.querySelector('.show').scrollTop).toBe(0);
    });
    it('.show === null', () => {
      wrapper.vm.$el.querySelector('.show').scrollTop = 1000;
      wrapper.vm.$el.querySelector('.show').remove();
      expect(wrapper.vm.$el.querySelector('.show')).toBeNull();
      wrapper.vm.resetScrollPosition();
    });
  });
  describe('Testing $ref methods for desktop version', () => {
    it('resetComoList() should call resetData', () => {
      wrapper.setData({ windowWidth: 1200 });
      wrapper.vm.$refs.ComoListComponent.cardioDiseases[0].check = true;
      wrapper.vm.resetComoList();
      expect(wrapper.vm.$refs.ComoListComponent.cardioDiseases[0].check).toBe(false);
    });
    it('submitExams() should call getExams() and showModal() from $refs.ResultModalComponent', () => {
      wrapper.setData({ windowWidth: 1200 });

      wrapper.vm.$refs.ResultModalComponent.resultArray = ['Valvular heart disease / Valve Replacement'];
      wrapper.vm.submitExams();
      expect(wrapper.vm.drawerShow).toBe(true);
      expect(wrapper.vm.buttonsHidden).toBe(true);
      expect(wrapper.vm.$refs.ResultModalComponent.exams).toEqual(['Group and Screen']);
    });
    it('updateDescription() should not display the correct glossary for AF for desktop', () => {
      wrapper = mount(App);
      wrapper.setData({ windowWidth: 1200 });
      wrapper.vm.updateDescription({ currentComorbiditySelection: 'Atrial fibrillation / History of irregular heart beat' });
      expect(wrapper.vm.$refs.ComoListComponent.currentComorbidityDescription).not.toEqual('Atrial fibrillation / History of irregular heart beat');
    });
  });
  describe('Testing $ref methods for mobile version', () => {
    it('resetMobileComoList() should call resetData', () => {
      Object.defineProperty(window.navigator, 'userAgent', {
        value: 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Mobile Safari/537.36',
        writable: true,
      });
      wrapper = mount(App);
      wrapper.vm.$refs.MobileComoListComponent.cardioDiseases[0].check = true;
      wrapper.vm.resetMobileComoList();
      expect(wrapper.vm.$refs.MobileComoListComponent.cardioDiseases[0].check).toBe(false);
    });
    it('submitExams() should call getExams() and showModal() from $refs.ResultModalComponent', () => {
      wrapper.vm.$refs.MobileResultModalComponent.resultArray = ['Valvular heart disease / Valve Replacement'];
      wrapper.vm.submitExams();
      expect(wrapper.vm.drawerShow).toBe(true);
      expect(wrapper.vm.buttonsHidden).toBe(true);
      expect(wrapper.vm.$refs.MobileResultModalComponent.exams).toEqual(['Group and Screen']);
    });
    it('updateDescription() displays the correct glossary for AF for mobile devices', () => {
      wrapper.vm.updateDescription({ currentComorbiditySelection: 'Atrial fibrillation / History of irregular heart beat' });
      expect(wrapper.vm.$refs.MobileComoListComponent.currentComorbidityDescription).toEqual('Atrial fibrillation / History of irregular heart beat');
    });
  });
  describe('Updating mobileComoListComponent glossary', () => {
    describe('Testing getWindowWidth', () => {
      it('getWindowWidth() should reset to 0', () => {
        wrapper.vm.windowWidth = 1000;
        wrapper.vm.getWindowWidth();
        expect(wrapper.vm.windowWidth).not.toEqual(1000);
      });
    });
  });
});
