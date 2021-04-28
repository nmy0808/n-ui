<template>
  <button class="n-button" :class="calcClass" @click="$emit('click')">
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
      default: 'left',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    danger: {
      type: Boolean,
      default: false,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    gray: {
      type: Boolean,
      default: false,
    },
    dark: {
      type: Boolean,
      default: false,
    },
    success: {
      type: Boolean,
      default: false,
    },
    normal: {
      type: Boolean,
      default: false,
    },
    warn: {
      type: Boolean,
      default: false,
    },
    disable: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    calcClass() {
      return {
        right: this.position === 'right',
        danger: this.danger,
        success: this.success,
        primary: this.primary,
        gray: this.gray,
        warn: this.warn,
        dark: this.dark,
        normal: this.normal,
        disable: this.disable,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../../styles/var.scss';

.n-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  cursor: pointer;
  border-radius: 4px;
  height: 36px;
  padding: 0 9px;
  font-size: $base-size;
  background: white;
  border: 1px solid $gray;
  &.danger {
    background: $danger;
    color: white;
    border: none;
    &:hover {
      background: lighten($danger, 10%);
    }
    &:active {
      background: $danger;
    }
  }
  &.success {
    background: $success;
    color: white;
    border: none;
    &:hover {
      background: lighten($success, 10%);
    }
    &:active {
      background: $success;
    }
  }
  &.warn {
    background: $warn;
    color: white;
    border: none;
    &:hover {
      background: lighten($warn, 10%);
    }
    &:active {
      background: $warn;
    }
  }
  &.primary {
    background: $primary;
    color: white;
    border: none;
    &:hover {
      background: lighten($primary, 10%);
    }
    &:active {
      background: $primary;
    }
  }
  &.gray {
    background: $gray;
    border: none;
    color: white;
    &:hover {
      background: lighten($gray, 10%);
    }
    &:active {
      background: $gray;
    }
  }
  &.dark {
    background: $dark;
    border: none;
    color: white;
    &:hover {
      background: lighten($dark, 10%);
    }
    &:active {
      background: $dark;
    }
  }
  &.normal {
    background: white;
    border: 1px solid $gray;
  }
  &.disable {
    $bg: lighten($gray, 20%);
    color: $lightWords;
    background: $bg;
    cursor: no-drop;
    &:hover {
      background: $bg;
    }
    &:active {
      background: $bg;
    }
  }
  .loading {
    @include spin;
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
    background: lighten($color: $gray, $amount: 20%);
  }
  &:active {
    background: white;
  }
  &:focus {
    outline: none;
  }
}
</style>
