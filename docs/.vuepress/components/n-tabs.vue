<template>
  <div style="margin-top:2em;">
    <n-tabs v-model="selected" @tabClick="tabClick">
      <n-tab-head>
        <n-button primary slot="tabBarExtraContent">按钮</n-button>
        <n-tab-title name="tab1">标签一</n-tab-title>
        <n-tab-title name="tab2">标签二</n-tab-title>
        <n-tab-title name="tab3" disabled>标签三</n-tab-title>
      </n-tab-head>
      <n-tab-body class="tab-body">
        <n-tab-pane name="tab1">内容1</n-tab-pane>
        <n-tab-pane name="tab2">内容2</n-tab-pane>
        <n-tab-pane name="tab3">内容3</n-tab-pane>
      </n-tab-body>
    </n-tabs>
  </div>
</template>

<script>
import Vue from 'vue';
import plugins from '../../../src/plugins/plugin';
import NButton from '../../../src/components/basic/button/Button.vue';
import NTabs from '../../../src/components/navigation/tabs/Tabs.vue';
import NTabBody from '../../../src/components/navigation/tabs/TabBody.vue';
import NTabHead from '../../../src/components/navigation/tabs/TabHead.vue';
import NTabPane from '../../../src/components/navigation/tabs/TabPane.vue';
import NTabTitle from '../../../src/components/navigation/tabs/TabTitle.vue';
Vue.use(plugins);

export default {
  components: { NButton, NTabs, NTabBody, NTabHead, NTabPane, NTabTitle },
  data() {
    return {
      selected: 'tab2',
    };
  },
  methods: {
    tabClick() {
      this.$toast('回调哦!');
    },
  },
};
</script>

<style lang='scss' >
@import url('//at.alicdn.com/t/font_2449846_m1f2230a1zk.css');
.tab-body {
  height: 10em;
}
</style>
