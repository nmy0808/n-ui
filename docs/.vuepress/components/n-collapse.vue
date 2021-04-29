<template>
  <div>
    <div class="section">
      <div style="font-size:1em;">
       展开: {{ collapseSelected }}
      </div>
      <br>
      <n-collapse v-model="collapseSelected" :single="true">
        <n-collapse-item name="1">
          <template #title> 新闻 </template>
          <div>
           经过税务机关3个多月的依法调查核实，群众举报范冰冰“阴阳合同”涉税问题有了明确结果。
          税务机关依法向范冰冰作出追缴税款、滞纳金并处以罚款的决定。
          社会各界特别是文艺影视工作者坚决支持税务部门依法查处此案，并从中得到教育警示。
          </div>
        </n-collapse-item>
        <n-collapse-item name="2">
          <template #title> 财经 </template>
          经过税务机关3个多月的依法调查核实，群众举报范冰冰“阴阳合同”涉税问题有了明确结果。
          税务机关依法向范冰冰作出追缴税款、滞纳金并处以罚款的决定。
          社会各界特别是文艺影视工作者坚决支持税务部门依法查处此案，并从中得到教育警示。
        </n-collapse-item>
        <n-collapse-item name="3">
          <template #title> 体育 </template>
          经过税务机关3个多月的依法调查核实，群众举报范冰冰“阴阳合同”涉税问题有了明确结果。
          税务机关依法向范冰冰作出追缴税款、滞纳金并处以罚款的决定。
          社会各界特别是文艺影视工作者坚决支持税务部门依法查处此案，并从中得到教育警示。
        </n-collapse-item>
      </n-collapse>
    </div>
    <br />
  </div>
</template>

<script>
import NCollapse from '../../../src/components/layout/collapse/Collapse.vue';
import NCollapseItem from '../../../src/components/layout/collapse/CollapseItem.vue';

export default {
  components: { NCollapse, NCollapseItem },
  data() {
    return {
      collapseSelected: [1, 2],
    };
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
  background: lighten($color: $bg, $amount: 9%);
}
</style>