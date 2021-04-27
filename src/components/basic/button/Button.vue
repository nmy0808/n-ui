<template>
  <button
    class="n-button-container"
    :class="positionClass"
    @click="$emit('click')"
  >
    <n-icon class="icon" v-if="icon && !loading" :icon="icon" />
    <n-icon class="icon loading" v-if="loading" icon="i-loading" />
    <div class="content">
      <slot>按钮</slot>
    </div>
  </button>
</template>

<script>
import NIcon from '../icon/Icon.vue';

export default {
  name: 'NButton',
  components: { NIcon },
  props: {
    icon: {
      type: String,
    },
    position: {
      type: String,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    positionClass() {
      return {
        right: this.position === 'right',
      };
    },
  },
};
</script>

<style lang="scss" scoped>
// @import '~@/styles/var.scss';
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
@keyframes rot {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.n-button-container {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  cursor: pointer;
  padding: 0 9px;
  border-radius: $border-radius;
  height: $button-height;
  font-size: $font-size;
  background: $button-bg;
  border: 1px solid $border-color;
  .loading {
    animation: rot 3s infinite linear;
  }
  .icon {
    margin-right: 0.2em;
  }
  &.right {
    .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.2em;
    }
    .content {
      order: 1;
    }
  }
  &:hover {
    border-color: $border-color-hover;
  }
  &:active {
    border-color: $button-active-bg;
  }
  &:focus {
    outline: none;
  }
}
</style>
