import { shallowMount } from '@vue/test-utils';
import Row from '@/components/layout/grid/Row.vue';

describe('Row.vue', () => {
  describe('props', () => {
    let wrapper = null;
    beforeEach(() => {
      wrapper = shallowMount(Row);
    });
    it('gutter', async () => {
      const gutter = 10;
      await wrapper.setProps({ gutter });
      const { marginLeft, marginRight } = getComputedStyle(wrapper.element);
      expect(parseInt(marginLeft)).toBe(-gutter / 2);
      expect(parseInt(marginRight)).toBe(-gutter / 2);
    });
    it('align', async () => {
      const align = 'middle';
      await wrapper.setProps({ align });
      const { alignItems } = getComputedStyle(wrapper.element);
      expect(alignItems).toEqual('center');
    });
    it('justify', async () => {
      const justify = 'start';
      await wrapper.setProps({ justify });
      const { justifyContent } = getComputedStyle(wrapper.element);
      expect(justifyContent).toEqual('start');
    });
  });
});
