<template>
  <div
    class="n-message init"
    :class="[isBody ? 'parent-is-body' : 'parent-no-body']"
  >
    <div class="n-message-left" :class="calcClass">
      <i class="n-icon" :class="calcIconType"></i>
    </div>
    <div class="n-message-right">
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'NMessage',
  props: {
    isBody: {
      type: Boolean,
      default: true,
    },
    primary: {
      type: Boolean,
      default: true,
    },
    success: {
      type: Boolean,
    },
    danger: {
      type: Boolean,
    },
    warn: {
      type: Boolean,
    },
    onClose: {
      type: Function,
    },
    content: {
      type: [String, Number],
      default: '文字...',
    },
    duration: {
      type: [String, Number],
      default: 2000,
    },
  },
  computed: {
    calcClass() {
      return {
        success: this.success,
        primary: this.primary,
        danger: this.danger,
        warn: this.warn,
      };
    },
    calcIconType() {
      return {
        'i-warn-f': this.primary,
        'i-success': this.success,
        'i-error': this.danger,
        'i-warning': this.warn,
      };
    },
  },
  mounted() {
    setTimeout(() => {
      this.$el.classList.remove('init');
    }, 0);
    setTimeout(() => {
      this.$el.classList.add('over');
      this.$el.addEventListener(
        'transitionend',
        () => {
          this.$el.remove();
          if (this.onClose) {
            this.onClose();
          }
        },
        { once: true },
      );
    }, this.duration);
  },
};
</script>

<style lang="scss" scoped>
@import '../../../styles/var.scss';
@import '//at.alicdn.com/t/font_2449846_vuahaq5toi.css';
.n-message {
  min-width: 5em;
  padding: 0.8em 1.1em;
  box-sizing: border-box;
  background: white;
  box-shadow: $box-shadow;
  border-radius: $base-radius;
  display: flex;
  align-items: center;
  z-index: 99;
  transition: 0.5s;
  color: $words;
  &.parent-no-body {
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 99;
    transform: translate(-50%, -50%);
    &.init {
      opacity: 0;
      margin-top: 1em;
    }
    &.over {
      opacity: 0;
      margin-top: -1em;
    }
  }
  &.parent-is-body {
    position: fixed;
    left: 50%;
    bottom: 2em;
    z-index: 99;
    &.init {
      opacity: 0;
      transform: translateY(10px);
    }
    &.over {
      opacity: 0;
      transform: translateY(-10px);
    }
  }
  &-left {
    flex-shrink: 0;
    width: 1em;
    height: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    .n-icon {
      font-size: 20px;
    }
    &.primary {
      color: $primary;
    }
    &.success {
      color: $success;
    }
    &.danger {
      color: $danger;
    }
    &.warn {
      color: $warn;
    }
  }
  &-right {
    font-size: 16px;
    margin-left: 0.4em;
    line-height: 1.4;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    user-select: none;
  }
}
</style>