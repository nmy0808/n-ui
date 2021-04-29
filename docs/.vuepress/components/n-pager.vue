<template>
  <div style="margin-top:2em;">
    <NPager :total="50" :current.sync="curPage" />
  </div>
</template>

<script>
import NPager from '../../../src/components/navigation/pager/Pager.vue';

export default {
  components: { NPager },
  data() {
    return {
      curPage: 5,
    };
  },
};
</script>

<style lang='scss' >
@import url('//at.alicdn.com/t/font_2449846_m1f2230a1zk.css');
</style>
