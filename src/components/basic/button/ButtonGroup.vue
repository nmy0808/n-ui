<template>
  <div class='n-button-group' :class='calcClass'>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'NButtonGroup',
  props: {
    border: {
      type: Boolean,
      default: true,
    },
  },
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
  computed: {
    calcClass() {
      return {
        'no-border': !this.border,
        'has-border': this.border,
      };
    },
  },
};
</script>
<style lang='scss' scoped>
@import '../../../styles/var.scss';

.n-button-group {
  display: inline-flex;
  vertical-align: middle;
  &.no-border {
    .n-button {
      border-radius: 0;
      margin-left: -1px;
      border: 1px solid transparent;
      border-top: 1px solid $gray;
      border-bottom: 1px solid $gray;
      &:first-child {
        border-top-left-radius: $base-radius;
        border-bottom-left-radius: $base-radius;
        margin-left: 0;
        border-left: 1px solid $gray;
      }
      &:last-child {
        border-top-right-radius: $base-radius;
        border-bottom-right-radius: $base-radius;
        border-right: 1px solid $gray;
      }
      &:active {
        background: $primary;
        color: white;
      }
    }
  }
  &.has-border{
    .n-button {
      border-radius: 0;
      margin-left: -1px;
      &:first-child {
        border-top-left-radius: $base-radius;
        border-bottom-left-radius: $base-radius;
        margin-left: 0;
        border-left: 1px solid $gray;
      }
      &:last-child {
        border-top-right-radius: $base-radius;
        border-bottom-right-radius: $base-radius;
        border-right: 1px solid $gray;
      }
      &:active:not(.disable) {
        background: $primary;
        color: white;
      }
    }
  }
}
</style>
