<template>
  <div>
      <n-datapicker
        :defaultDate.sync="defaultDate"
        :minScoped="new Date('2000-3-20')"
        :maxScoped="new Date('2025-10-8')"
      />
  </div>
</template>

<script>
import NDatapicker from '../../../src/components/form/datapicker/Datapicker.vue';

export default {
  components: { NDatapicker },
  data() {
    return {
      defaultDate: new Date(),
    };
  },
};
</script>

<style lang='scss' >
@import url('//at.alicdn.com/t/font_2449846_m1f2230a1zk.css');
</style>
