<template>
  <i class="n-icon" :class="icon"></i>
</template>

<script>
export default {
  name: 'NIcon',
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
@import '//at.alicdn.com/t/font_2449846_m1f2230a1zk.css';
//@import '//at.alicdn.com/t/font_2449846_2mycn710dfk.css';
//@import '//at.alicdn.com/t/font_2449846_8m6tw3684ll.css';
@import '../../../styles/var.scss';
.n-icon {
  font-size: $base-size;
  // height: $icon-size;
  vertical-align: middle;
}
</style>
