import { shallowMount, mount } from '@vue/test-utils';
import Input from '@/components/form/input/Input.vue';
import { findTestWrapper } from '@/utils';

describe('Input.vue', () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = shallowMount(Input);
  });
  describe('props', () => {
    it('value', async () => {
      const msg = 'hello';
      await wrapper.setProps({ value: msg });
      const input = findTestWrapper(wrapper, 'input').at(0);
      expect(input.element.value).toBe(msg);
    });
    it('placeholder', async () => {
      const msg = 'hello';
      await wrapper.setProps({ placeholder: msg });
      const input = findTestWrapper(wrapper, 'input').at(0);
      expect(input.element.placeholder).toBe(msg);
    });
    it('disabled', async () => {
      await wrapper.setProps({ disabled: true });
      const input = findTestWrapper(wrapper, 'input').at(0);
      expect(input.element.disabled).toBeTruthy();
    });
    it('error', async () => {
      const msg = 'hello';
      await wrapper.setProps({ error: msg });
      const span = findTestWrapper(wrapper, 'span').at(0);
      expect(span.text()).toBe(msg);
    });
    it('success', async () => {
      const msg = 'hello';
      await wrapper.setProps({ success: msg });
      const span = findTestWrapper(wrapper, 'span').at(0);
      expect(span.text()).toBe(msg);
    });
    it('prefix', async () => {
      const msg = 'hello';
      await wrapper.setProps({ prefix: msg });
      const icon = findTestWrapper(wrapper, 'icon').at(0);
      expect(icon).toBeTruthy();
    });
    it('type', async () => {
      const msg = 'textarea';
      await wrapper.setProps({ type: msg });
      const icon = findTestWrapper(wrapper, 'input').at(0);
      expect(icon.element.type).toMatch(msg);
    });
  });
  describe('events', () => {
    it('change', () => {
      const msg = 'hello';
      const input = findTestWrapper(wrapper, 'input').at(0);
      input.setValue(msg);
      input.trigger('change');
      expect(wrapper.emitted('change')[0]).toContain(msg);
      expect(wrapper.emitted('change')).toBeTruthy();
    });
    it('input', () => {
      const msg = 'hello';
      const input = findTestWrapper(wrapper, 'input').at(0);
      input.setValue(msg);
      input.trigger('input');
      expect(wrapper.emitted('input')[0]).toContain(msg);
      expect(wrapper.emitted('input')).toBeTruthy();
    });
    it('keyup.enter', () => {
      const msg = 'hello';
      const input = findTestWrapper(wrapper, 'input').at(0);
      input.setValue(msg);
      input.trigger('keyup.enter');
      expect(wrapper.emitted('enter')[0]).toContain(msg);
      expect(wrapper.emitted('enter')).toBeTruthy();
    });
    it('focus', async () => {
      const msg = 'hello';
      const input = findTestWrapper(wrapper, 'input').at(0);
      input.setValue(msg);
      await input.trigger('focus');
      expect(wrapper.emitted('focus')[0][0].target.value).toBe(msg);
      expect(wrapper.emitted('focus')).toBeTruthy();
    });
    it('blur', async () => {
      const msg = 'hello';
      const input = findTestWrapper(wrapper, 'input').at(0);
      input.setValue(msg);
      await input.trigger('blur');
      expect(wrapper.emitted('blur')[0][0].target.value).toContain(msg);
      expect(wrapper.emitted('blur')).toBeTruthy();
    });
  });
});
