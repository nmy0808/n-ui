/* eslint-disable */
import { shallowMount } from '@vue/test-utils';
import Toast from '@/components/feedback/Toast.vue';
import { findTestWrapper } from '@/utils';

describe('Toast.Vue', () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = shallowMount(Toast);
    jest.useFakeTimers();
  })
  describe('props', () => {
    it('content', async () => {
      const content = 'test';
      await wrapper.setProps({ content });
      const contentEl = findTestWrapper(wrapper, 'content').at(0);
      expect(contentEl.text()).toBe(content);
    })
    it('duration, close回调', async () => {
      const duration = 2;
      const fn = jest.fn();
      await wrapper.setProps({ duration, onClose: fn });
      jest.runAllTimers();
      expect(wrapper.emitted('close')).toBeTruthy();
      expect(wrapper.exists()).toBeFalsy();
      expect(fn).toBeCalled();
    })
    it('closeBtn', async () => {
      const closeBtn = 'test';
      await wrapper.setProps({ closeBtn });
      const btn = findTestWrapper(wrapper, 'btn').at(0);
      expect(btn.text()).toBe(closeBtn);
    })
    it('enabledHtml', async () => {
      const enabledHtml = true;
      const content = '<div id="test">test</div>';
      await wrapper.setProps({ enabledHtml, content });
      const btn = findTestWrapper(wrapper, 'content-html').at(0);
      expect(btn.find('#test').exists()).toBeTruthy();
    })
    it('position', async () => {
      const position = 'middle';
      await wrapper.setProps({ position });
      expect(wrapper.classes('middle')).toBeTruthy();
    })
  })
})