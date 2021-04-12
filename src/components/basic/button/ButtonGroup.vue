<template>
  <div class="n-button-group-container">
    <slot></slot>
  </div>
</template>
<script>
export default {
  mounted() {
    const childs = this.$el.children;
    childs.forEach((element) => {
      const tagName = element.tagName.toLowerCase();
      if (tagName !== 'button') {
        console.warn(
          `异常子元素<${tagName}>, 请检查 <n-button-group> 组件内的子元素必须为 <button> 元素, 否则样式会出现问题`,
        );
      }
    });
  },
};
</script>
<style lang="scss" scoped>
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
.n-button-group-container {
  display: inline-flex;
  vertical-align: middle;
  button {
    border-radius: 0;
    margin-left: -1px;
  }
  & > :first-child {
    border-top-left-radius: $border-radius;
    border-bottom-left-radius: $border-radius;
    margin-left: 0;
  }
  & > :last-child {
    border-top-right-radius: $border-radius;
    border-bottom-right-radius: $border-radius;
  }
  button:hover {
    position: relative;
    z-index: 2;
  }
  button:active {
    position: relative;
    border-right-color: $border-color-hover;
    border-left-color: $border-color-hover;
    // z-index: -1;
    &:first-child{
      border-left-color: $button-active-bg;
    }
    &:last-child{
      border-right-color: $button-active-bg;
    }
  }
}
</style>
