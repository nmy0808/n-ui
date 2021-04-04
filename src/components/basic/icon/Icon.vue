<template>
  <i class="n-icon" :class="icon"></i>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
      default: 'i-setup',
    },
  },
};
</script>

<style lang="scss" scoped>
@import '//at.alicdn.com/t/font_2449846_sq4i7gxgce.css';
@import '~@/styles/var.scss';
.n-icon {
  font-size: $icon-size;
  // height: $icon-size;
  vertical-align: middle;
}
</style>
