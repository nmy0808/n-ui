import { shallowMount } from '@vue/test-utils';
import Col from '@/components/layout/grid/Col.vue';

describe('Col.vue', () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = shallowMount(Col);
  });
  describe('props', () => {
    it('span', async () => {
      const num = 24;
      await wrapper.setProps({
        span: num,
      });
      expect(wrapper.classes('col-24')).toBe(true);
    });
    it('offset', async () => {
      const num = 24;
      await wrapper.setProps({
        offset: num,
      });
      expect(wrapper.classes('offset-24')).toBe(true);
    });
    it('xs', async () => {
      const num = 24;
      await wrapper.setProps({
        xs: num,
      });
      expect(wrapper.classes('col-xs-24')).toBe(true);
    });
    it('sm', async () => {
      const num = 24;
      await wrapper.setProps({
        sm: num,
      });
      expect(wrapper.classes('col-sm-24')).toBe(true);
    });
    it('md', async () => {
      const num = 24;
      await wrapper.setProps({
        md: num,
      });
      expect(wrapper.classes('col-md-24')).toBe(true);
    });
    it('lg', async () => {
      const num = 24;
      await wrapper.setProps({
        lg: num,
      });
      expect(wrapper.classes('col-lg-24')).toBe(true);
    });
    it('xl', async () => {
      const num = 24;
      await wrapper.setProps({
        xl: num,
      });
      expect(wrapper.classes('col-xl-24')).toBe(true);
    });
  });
});
