<template>
  <div class="toast-container" :class="[positionClass]">
    <div class="content" data-test="content">
      <slot v-if="!enabledHtml">{{ content }}</slot>
      <div v-else v-html="content" data-test="content-html"></div>
    </div>
    <span class="line" v-if="closeBtn" ref="line"></span>
    <div class="btn" v-if="closeBtn" ref="btn" @click="handleClose" data-test="btn">
      {{ closeBtn }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: 'This is a normal message',
    },
    duration: {
      type: [Number, String],
      default: 2,
    },
    onClose: {
      type: Function,
      default: null,
    },
    closeBtn: {
      type: String,
      default: '',
    },
    enabledHtml: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      default: 'top',
      validator(val) {
        return ['top', 'middle', 'bottom'].indexOf(val) >= 0;
      },
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.setLineSize();
    this.autoClose();
  },
  computed: {
    positionClass() {
      return this.position;
    },
  },
  methods: {
    handleClose() {
      this.$emit('close');
      this.$el.remove();
      if (this.onClose && typeof this.onClose === 'function') {
        this.onClose(this);
      }
      this.$destroy();
    },
    setLineSize() {
      if (!this.closeBtn) {
        return;
      }
      this.$nextTick(() => {
        const height = this.$el.offsetHeight;
        this.$refs.line.style.height = `${height}px`;
        this.$refs.btn.style.height = `${height}px`;
      });
    },
    autoClose() {
      if (this.duration > 0) {
        setTimeout(() => {
          this.handleClose();
        }, this.duration * 1000);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.toast-container {
  position: fixed;
  z-index: 9999;
  max-width: 268px;
  left: 50%;
  background: rgba(0, 0, 0, 0.7);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    padding: 0.5em 1em;
  }
  .line {
    display: block;
    width: 1px;
    background: #666666;
  }
  .btn {
    cursor: pointer;
    width: 50px;
    height: 100%;
    white-space: nowrap;
    padding: 0 1.1em;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
  }
  &.top {
    top: 1em;
    bottom: auto;
    transform: translateX(-50%);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    animation: up 0.2s;
  }
  &.bottom {
    top: auto;
    bottom: 1em;
    transform: translateX(-50%);
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    animation: down 0.2s;
  }
  &.middle {
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 4px;
    animation: fade 0.2s;
  }
  @keyframes up {
    0% {
      margin-top: -2em;
      opacity: 0;
    }
    100% {
      margin-top: 0;
      opacity: 100%;
    }
  }
  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 100%;
    }
  }
  @keyframes down {
    0% {
      margin-bottom: -2em;
      opacity: 0;
    }
    100% {
      margin-bottom: 0;
      opacity: 100%;
    }
  }
}
</style>
