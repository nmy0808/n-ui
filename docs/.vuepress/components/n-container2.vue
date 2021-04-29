<template>
  <div>
    <hr />
    <h4 style="margin-top:4em">上中下三栏布局，主体部分带侧边栏</h4>
    <div class="section">
      <n-layout class="layout">
        <n-header class="layout-item bg2">header</n-header>
        <n-layout>
          <n-sider class="layout-item bg1">sider</n-sider>
          <n-content class="layout-item bg3">content</n-content>
        </n-layout>
        <n-footer class="layout-item bg2">footer</n-footer>
      </n-layout>
    </div>
    <br />
  </div>
</template>

<script>
import NContent from '../../../src/components/layout/container/Content.vue';
import NFooter from '../../../src/components/layout/container/Footer.vue';
import NHeader from '../../../src/components/layout/container/Header.vue';
import NLayout from '../../../src/components/layout/container/Layout.vue';
import NSider from '../../../src/components/layout/container/Sider.vue';
import NRow from '../../../src/components/layout/grid/Row.vue';
import NCol from '../../../src/components/layout/grid/Col.vue';

export default {
  components: { NContent, NFooter, NHeader, NSider, NLayout, NRow, NCol },
  data() {
    return {};
  },
};
</script>


<style scoped lang='scss'>
@import '//at.alicdn.com/t/font_2449846_m1f2230a1zk.css';
* {
  box-sizing: border-box;
}
.section {
  margin-top: 1em;
  width: 100%;
}
.row {
  height: 40px;
  .col {
    height: 100%;
    text-align: center;
    line-height: 40px;
    color: lightslategray;
    .content {
      background: #e6eef5;
      height: 100%;
      border-radius: 4px;
      &.active {
        background: lighten($color: #eef3f7, $amount: 1%);
      }
    }
  }
}
.layout{
  height: 300px;
}
.layout-box {
  height: 200px;
}
.layout-item {
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid white;
}
$bg: #e3ebf3;
.bg1 {
  background: $bg;
  color: lightslategray;
}
.bg2 {
  color: lightslategray;
  background: lighten($color: $bg, $amount: 3%);
}
.bg3 {
  color: lightslategray;
  background: lighten($color: $bg, $amount: 6%);
}
.bg4 {
  color: lightslategray;
  background: lighten($color: $bg, $amount: 12%);
}
</style>