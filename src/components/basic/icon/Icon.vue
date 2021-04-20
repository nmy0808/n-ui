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
@import '//at.alicdn.com/t/font_2449846_t91setawj1.css';
$button-height: 32px;
$font-size: 14px;
$button-bg: white;
$button-icon-size: 1em;
$button-active-bg: #eee;
$border-radius: 4px;
$color: #333;
$border-color: #999;
$border-color-hover: #666;
$icon-size: 1em;
.n-icon {
  font-size: $icon-size;
  // height: $icon-size;
  vertical-align: middle;
}
</style>
