<template>
  <div class="popover-container">
    <div
      data-test="content"
      class="content-container"
      :class="[position]"
      v-if="show"
      ref="content"
    >
      <slot name="content"></slot>
    </div>
    <div class="button-container" data-test="button" ref="button">
      <slot>
        <button>按钮</button>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    onlyOuterClose: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      default: 'top',
      validator(val) {
        return ['top', 'right', 'left', 'bottom'].includes(val);
      },
    },
    trigger: {
      type: String,
      default: 'click',
      validator(val) {
        return ['click', 'hover'].includes(val);
      },
    },
  },
  data() {
    return {
      show: false,
    };
  },
  computed: {
    openEvent() {
      if (this.trigger === 'click') {
        return 'click';
      }
      return 'mouseenter';
    },
    closeEvent() {
      if (this.trigger === 'click') {
        return 'click';
      }
      return 'mouseleave';
    },
  },
  mounted() {
    const btn = this.$refs.button;
    btn.addEventListener(this.openEvent, this.handleChangeShow);
    btn.addEventListener(this.closeEvent, this.handleChangeShow);
  },
  beforeDestroy() {
    const btn = this.$refs.button;
    btn.removeEventListener(this.openEvent, this.handleChangeShow);
    btn.removeEventListener(this.closeEvent, this.handleChangeShow);
  },
  watch: {
    show() {
      if (this.show) {
        this.$emit('change-show', this.show);
        this.initContentPosition();
        this.addRootEvent();
      } else {
        this.$emit('change-show', this.show);
        this.removeRootEvent();
      }
    },
  },
  methods: {
    handleChangeShow() {
      let show = !this.show;
      if (this.onlyOuterClose) {
        show = true;
      }
      this.show = show;
    },
    addRootEvent() {
      document.addEventListener('click', this.rootEvent);
    },
    removeRootEvent() {
      document.removeEventListener('click', this.rootEvent);
    },
    rootEvent(e) {
      if (
        this.$el.contains(e.target)
        || this.$refs.content.contains(e.target)
      ) {
        return;
      }
      this.show = false;
    },
    initContentPosition() {
      this.$nextTick(() => {
        const {
          x,
          y,
          width,
          height,
        } = this.$refs.button.getBoundingClientRect();
        const scrollTop = window.scrollY;
        const scrollLeft = window.scrollX;
        document.body.appendChild(this.$refs.content);
        const { content } = this.$refs;
        const config = {
          top: {
            left: x + scrollLeft,
            top: y + scrollTop,
            translateY: '-100%',
          },
          left: {
            left: x + scrollLeft - 8 - content.offsetWidth,
            top: y + scrollTop,
            translateY: `${(height - content.offsetHeight) / 2}px`,
          },
          right: {
            left: x + scrollLeft + width,
            top: y + scrollTop,
            translateY: `${(height - content.offsetHeight) / 2}px`,
          },
          bottom: {
            left: x + scrollLeft,
            top: y + scrollTop,
            translateY: `${height}px`,
          },
        };
        content.style.left = `${config[this.position].left}px`;
        content.style.top = `${config[this.position].top}px`;
        content.style.transform = `translateY(${
          config[this.position].translateY
        })`;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
$border-color: #ccc;
.popover-container {
  display: inline-block;
  .button-container {
    display: inline-block;
  }
}
.content-container {
  position: absolute;
  display: inline-block;
  word-break: break-all;
  max-width: 20em;
  border: 1px solid $border-color;
  padding: 0.5em;
  filter: drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.342));
  background: white;
  &::after,
  &::before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border: 6px solid;
    position: absolute;
    border-top-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
    border-right-color: transparent;
  }
  &.top {
    margin-top: -8px;
    &::before {
      left: 3%;
      bottom: 0;
      transform: translateX(-50%) translateY(100%);
      border-top-color: $border-color;
    }
    &::after {
      left: 3%;
      bottom: 0;
      transform: translateX(-50%) translateY(100%);
      margin-bottom: 2px;
      // border-top-color: white;
      border-top-color: white;
    }
  }
  &.bottom {
    margin-top: 8px;
    &::before {
      left: 3%;
      top: 0;
      border-bottom-color: $border-color;
      transform: translateY(-100%);
    }
    &::after {
      left: 3%;
      top: 0;
      margin-top: 2px;
      border-bottom-color: white;
      transform: translateY(-100%);
    }
  }
  &.right {
    margin-left: 8px;
    &::before {
      top: 50%;
      left: 0;
      border-right-color: $border-color;
      transform: translate(-100%, -50%);
    }
    &::after {
      top: 50%;
      left: 0;
      margin-left: 2px;
      border-right-color: white;
      transform: translate(-100%, -50%);
    }
  }
  &.left {
    &::before {
      top: 50%;
      right: 0;
      border-left-color: $border-color;
      transform: translate(100%, -50%);
    }
    &::after {
      top: 50%;
      right: 0;
      margin-right: 2px;
      border-left-color: white;
      transform: translate(100%, -50%);
    }
  }
}
</style>
