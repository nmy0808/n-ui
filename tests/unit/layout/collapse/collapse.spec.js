import { shallowMount } from '@vue/test-utils';
import Collapse from '@/components/layout/collapse/Collapse.vue';
import CollapseItem from '@/components/layout/collapse/CollapseItem.vue';
import { findTestWrapper } from '@/utils';

describe('Collapse.vue, CollapseItem.vue', () => {
  let collWrap = null;
  beforeEach(async () => {
    collWrap = await shallowMount(Collapse, {
      propsData: {
        collapseSelected: [1, 2],
      },
      slots: {
        default: `
              <n-collapse-item name="1">
              <template #title>
               t1
              </template>
              c1
            </n-collapse-item>
            <n-collapse-item name="2">
              <template #title>
               t2
              </template>
              c2
            </n-collapse-item>
            <n-collapse-item name="3">
              <template #title>
               t3
              </template>
              c3
            </n-collapse-item>
          `,
      },
      stubs: {
        'n-collapse-item': CollapseItem,
      },
    });
  });
  afterEach(() => {
    collWrap.vm.$destroy();
  });
  describe('prop', () => {
    it('selected', () => {
      const items = findTestWrapper(collWrap, 'items');
      expect(items.at(0).classes('close')).toBeFalsy();
      expect(items.at(1).classes('close')).toBeFalsy();
      expect(items.at(2).classes('close')).toBeTruthy();
    });
  });
  describe('event', () => {
    it('click title', async () => {
      const titles = findTestWrapper(collWrap, 'title');
      await titles.at(2).trigger('click');
      expect(collWrap.emitted('update:collapseSelected')[0][0]).toEqual([1, 2, 3]);
    });
  });
});
