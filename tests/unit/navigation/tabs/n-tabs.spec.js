/* eslint-disable */
import { mount, createWrapper } from '@vue/test-utils';
import NTab from '@/components/navigation/tabs/Tabs.vue';
import TabHead from '@/components/navigation/tabs/TabHead.vue';
import TabBody from '@/components/navigation/tabs/TabBody.vue';
import TabTitle from '@/components/navigation/tabs/TabTitle.vue';
import TabPane from '@/components/navigation/tabs/TabPane.vue';

describe('Tabs.vue', () => {
  const selected = 'tab2';
  let wrapper = null;
  beforeEach(() => {
    wrapper = mount(NTab, {
      propsData: { selected },
      slots: {
        default: `
            <tab-head>
              <button slot="tabBarExtraContent">按钮</button>
              <tab-title name="tab1">标签1</tab-title>
              <tab-title name="tab2">标签2</tab-title>
              <tab-title name="tab3" disabled>标签3</tab-title>
            </tab-head>
            <tab-body>
              <tab-pane name="tab1">内容1</tab-pane>
              <tab-pane name="tab2">内容2</tab-pane>
              <tab-pane name="tab3">内容3</tab-pane>
            </tab-body>
        `
      },
      stubs: {
        // 用来注册自定义组件
        'tab-head': TabHead,
        'tab-body': TabBody,
        'tab-title': TabTitle,
        'tab-pane': TabPane,
      },
    });
  })
  describe('props', () => {
    it('selected = tab2, 验证对应的标题和内容是否正确激活', () => {
      const TabTitles = wrapper.findAllComponents(TabTitle);
      const TabPanes = wrapper.findAllComponents(TabPane);
      expect(TabTitles.at(0).classes('active')).toBeFalsy();
      expect(TabTitles.at(1).classes('active')).toBeTruthy();
      expect(TabTitles.at(2).classes('active')).toBeFalsy();
      expect(TabPanes.at(0).html()).toBe('');
      expect(TabPanes.at(1).html()).not.toBe('');
      expect(TabPanes.at(2).html()).toBe('');
    })
    it('tabBarExtraContent, ', () => {
      const Button = wrapper.find('button');
      expect(Button).toBeTruthy();
      expect(Button.text()).toBe('按钮');
    })
    it('disabled, ', () => {
      const TabTitles = wrapper.findAllComponents(TabTitle);
      expect(TabTitles.at(0).classes('disabled')).toBeFalsy();
      expect(TabTitles.at(1).classes('disabled')).toBeFalsy();
      expect(TabTitles.at(2).classes('disabled')).toBeTruthy();
    })
  })
  describe('event', () => {
    it('点击切换标签, TabHead事件总线', async () => {
      const fn = jest.fn();
      wrapper.vm.eventBus.$on('update:selected', fn);
      const TabTitles = wrapper.findAllComponents(TabTitle);
      const TabPanes = wrapper.findAllComponents(TabPane);
      await TabTitles.at(0).trigger('click');
      expect(TabTitles.at(0).classes('active')).toBeTruthy();
      expect(TabTitles.at(1).classes('active')).toBeFalsy();
      expect(TabTitles.at(2).classes('active')).toBeFalsy();
      expect(TabPanes.at(0).html()).not.toBe('');
      expect(TabPanes.at(1).html()).toBe('');
      expect(TabPanes.at(2).html()).toBe('');
      expect(fn.mock.calls[0][0].name).toBe('tab1');
    })
  })
})