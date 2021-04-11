import { shallowMount } from '@vue/test-utils';
import Popover from '@/components/viewport/popover/Popover.vue';
import { findTestWrapper } from '@/utils';

describe('Popover', () => {
  describe('props', () => {
    it('position', async () => {
      const wrapper = shallowMount(Popover);
      const position = 'bottom';
      const button = findTestWrapper(wrapper, 'button').at(0);
      await button.trigger('click');
      expect(findTestWrapper(wrapper, 'content').at(0).classes('top')).toBeTruthy();
      await wrapper.setProps({ position });
      expect(findTestWrapper(wrapper, 'content').at(0).classes(position)).toBeTruthy();
    });
    it('trigger', async () => {
      const wrapper = shallowMount(Popover, {
        propsData: {
          trigger: 'hover',
        },
      });
      const button = findTestWrapper(wrapper, 'button').at(0);
      await button.trigger('mouseenter');
      expect(findTestWrapper(wrapper, 'content').at(0).exists()).toBeTruthy();
    });
    it('content', async () => {
      const wrapper = shallowMount(Popover, {
        propsData: {
          trigger: 'hover',
        },
        slots: {
          content: '<div>test</div>',
        },
      });
      const button = findTestWrapper(wrapper, 'button').at(0);
      await button.trigger('mouseenter');
      expect(findTestWrapper(wrapper, 'content').at(0).text()).toMatch('test');
    });
    it('default', async () => {
      const wrapper = shallowMount(Popover, {
        propsData: {
          trigger: 'hover',
        },
        slots: {
          default: '<div>test</div>',
        },
      });
      const button = findTestWrapper(wrapper, 'button').at(0);
      expect(button.text()).toMatch('test');
    });
  });
});
