<template>
  <div
    class="scroll-container"
    @wheel.prevent="handleWheel"
    ref="parent"
    @touchstart.prevent="handleStart"
    @touchmove="handleMove"
    :style="{ height : height + 'px'}"
  >
    <div class="scroll-items" ref="child">
      <slot></slot>
    </div>
    <div class="scroll-bar-container" ref="scrollBarCon">
      <div
        class="scroll-bar"
        ref="scrollBar"
        v-drag="{ x: false, y: true }"
      ></div>
    </div>
  </div>
</template>

<script>
import { TranslateUtil } from '../../../utils';
import { dragDirective } from '../../../directives';

export default {
  name: 'NScroll',
  directives: { drag: dragDirective },
  props: {
    height: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      // 按下元素时的pageY
      startPointY: 0,
      // 按下元素时的距离
      eleTop: 0,
      parent: null,
      child: null,
      childTransLate: null,
      scrollBar: null,
      scrollBarTransLate: null,
    };
  },
  mounted() {
    this.$eventBus.$on('update:drag', ({ y }) => {
      const toY = (y / this.parent.offsetHeight) * this.parent.scrollHeight;
      this.childTransLate.setTranslateY(-toY);
    });
    this.parent = this.$refs.parent;
    this.child = this.$refs.child;
    this.childTransLate = new TranslateUtil(this.child);
    this.scrollBar = this.$refs.scrollBar;
    this.scrollBarTransLate = new TranslateUtil(this.scrollBar);
    this.initScrollSize();
    this.activeBarStyleEvent();
  },
  methods: {
    activeBarStyleEvent() {
      let isMove = false;
      this.scrollBar.addEventListener('mousedown', () => {
        isMove = true;
        this.child.style.transition = 'none';
      });
      window.addEventListener('mouseup', () => {
        if (!isMove) {
          return;
        }
        this.child.style.transition = null;
        isMove = false;
      });
    },
    initScrollSize() {
      const barHeight = (this.parent.offsetHeight / this.parent.scrollHeight)
        * this.parent.offsetHeight;
      this.scrollBar.style.height = `${barHeight}px`;
      if (barHeight === this.parent.offsetHeight) {
        this.$refs.scrollBarCon.classList.add('hide');
      } else {
        this.$refs.scrollBarCon.classList.remove('hide');
      }
    },
    updateScrollbarPosition(eleTop) {
      const y = (Math.abs(eleTop) / this.parent.scrollHeight)
        * this.parent.offsetHeight;
      this.scrollBarTransLate.setTranslateY(y);
    },
    handleStart(e) {
      const touch = e.changedTouches[0];
      this.startPointY = touch.pageY;
      this.eleTop = this.childTransLate.getTranslate('y');
    },
    handleMove(e) {
      const touch = e.changedTouches[0];
      const diffPointY = touch.pageY - this.startPointY;
      let toY = this.eleTop + diffPointY;
      const max = this.$refs.parent.scrollHeight - this.$refs.parent.offsetHeight;
      if (toY > 0) {
        toY = 0;
      }
      if (toY < -max) {
        toY = -max;
      }
      this.eleTop = this.childTransLate.getTranslate('y');
      this.childTransLate.setTranslateY(toY);
    },
    handleWheel(e) {
      const toY = this.$refs.parent.scrollTop - e.wheelDelta;
      this.eleTop += toY;
      const max = this.$refs.parent.scrollHeight - this.$refs.parent.offsetHeight;
      // 拉到头后,恢复body滚动
      if (-this.eleTop > 0) {
        this.eleTop = 0;
      } else if (-this.eleTop < -max) {
        this.eleTop = max;
      } else {
        // 没拉到头时,禁止body滚动
        e.preventDefault();
      }
      this.childTransLate.setTranslateY(-this.eleTop);
    },
  },
  watch: {
    eleTop(val) {
      this.updateScrollbarPosition(val);
    },
    height() {
      this.$nextTick(() => {
        this.initScrollSize();
      });
    },
  },
};
</script>

<style scoped>
.scroll-container {
  width: 100%;
  overflow: hidden;
  position: relative;
}
.scroll-items {
  transition: all 0.3s ease;
}
.scroll-bar-container {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 0.6em;
  background: #f9f9f9;
  border-left: 1px solid #eeeded;
  user-select: none;
}
.scroll-bar-container.hide {
  display: none;
}
.scroll-bar {
  width: 60%;
  margin: 0 auto;
  background: #dfdfdf;
  border-radius: 1em;
  transition: transform 0.3s ease;
}

.scroll-bar:hover {
  background: #c9c9c9;
}
.scroll-bar:active {
  background: #bdbdbd;
  box-shadow: 1px 1px 1px #d8d8d8;
  transition: none;
}
</style>