<template>
  <div style="margin-top: 2em; width: 100%;">
      <n-nav-menu v-model="selectedIndex">
        <n-menu-item index="1">首页</n-menu-item>
        <n-sub-menu index="2">
          <template #title> 关于 </template>
          <n-menu-item index="2-1">企业文化</n-menu-item>
          <n-menu-item index="2-2">开发团队</n-menu-item>
          <n-menu-item index="2-3">联系方式</n-menu-item>
          <n-sub-menu index="2-4">
            <template #title> 更多 </template>
            <n-menu-item index="2-4-1">更多1</n-menu-item>
            <n-menu-item index="2-4-2">更多2</n-menu-item>
            <n-menu-item index="2-4-3">更多3</n-menu-item>
          </n-sub-menu>
        </n-sub-menu>
        <n-menu-item index="3">联系</n-menu-item>
      </n-nav-menu>
  </div>
</template>

<script>
import NButton from '../../../src/components/basic/button/Button.vue';
import NNavMenu from '../../../src/components/navigation/navmenu/NavMenu.vue';
import NSubMenu from '../../../src/components/navigation/navmenu/SubMenu.vue';
import NMenuItem from '../../../src/components/navigation/navmenu/MenuItem.vue';
import NIcon from '../../../src/components/basic/icon/Icon.vue';

export default {
  components: {NIcon, NButton, NNavMenu, NSubMenu, NMenuItem },
  data() {
    return {
      selectedIndex: ['2-4-1'],
    };
  },
  methods: {
    tabClick() {
      this.$toast('回调哦!');
    },
  },
};
</script>

<style lang='scss' scoped>
@import url('//at.alicdn.com/t/font_2449846_ex1jr70sibe.css');
.tab-body {
  height: 10em;
}
</style>
