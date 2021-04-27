<template>
  <div class="row-container" :style="styleObj">
    <slot></slot>
  </div>
</template>

<script>
export default {
  namee: 'NRow',
  props: {
    gutter: {
      type: [String, Number],
    },
    align: {
      type: String,
    },
    justify: {
      type: String,
    },
  },
  computed: {
    styleObj() {
      const alignObj = {
        top: 'flex-start',
        middle: 'center',
        bottom: 'flex-end',
      };
      const res = {};
      if (this.gutter) {
        const size = this.gutter / 2;
        res.marginLeft = `-${size}px`;
        res.marginRight = `-${size}px`;
      }
      if (this.align) {
        res.alignItems = alignObj[this.align];
      }
      if (this.justify) {
        res.justifyContent = this.justify;
      }
      return res;
    },
  },
  mounted() {
    if (this.gutter) {
      this.$children.forEach((item) => {
        const it = item;
        it.gutter = this.gutter;
      });
    }
  },
};
</script>

<style lang='scss' scoped>
.row-container {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: start;
}
</style>
