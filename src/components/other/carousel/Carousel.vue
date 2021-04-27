<template>
  <div
    class="carousel-container"
    :style="{ height: height + 'px' }"
    @mouseenter="handleEnter"
    @mouseleave="handleLeave"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
  >
    <button class="carousel-btn carousel-btn-prev" @click="prev">
      <n-icon icon="i-arrow-left" />
    </button>
    <button class="carousel-btn carousel-btn-next" @click="next">
      <n-icon icon="i-arrow-right" />
    </button>
    <div class="carousel-inner" ref="inner">
      <slot></slot>
    </div>
    <div class="carousel-indicators">
      <span
        @click="setActiveItem(i)"
        v-for="(it, i) in source"
        :key="it"
        :class="{ active: i === curIndex }"
      ></span>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import NIcon from '../../basic/icon/Icon.vue';

export default {
  name: 'NCarousel',
  components: { NIcon },
  props: {
    height: {
      type: String,
      default: '200',
    },
    initialIndex: {
      type: String,
      default: '0',
    },
    autoplay: {
      type: Boolean,
      default: true,
    },
    interval: {
      type: Number,
      default: 3000,
    },
  },
  data() {
    return {
      eventBus: new Vue(),
      source: [],
      oldIndex: null,
      curIndex: null,
      animationDirection: 'next',
      autoTimer: null,
      touchStart: {},
      touchEnd: {},
    };
  },
  methods: {
    handleTouchStart(e) {
      this.handleEnter();
      const { clientX, clientY } = e.touches[0];
      this.touchStart.clientX = clientX;
      this.touchStart.clientY = clientY;
    },
    handleTouchMove() {
      this.handleEnter();
    },
    handleTouchEnd(e) {
      const { clientX, clientY } = e.changedTouches[0];
      this.touchEnd.clientX = clientX;
      this.touchEnd.clientY = clientY;
      const result = Math.sqrt(
        Math.pow(this.touchEnd.clientX - this.touchStart.clientX, 2)
          + Math.pow(this.touchEnd.clientY - this.touchStart.clientY, 2),
      );
      const h = result / (this.touchEnd.clientY - this.touchStart.clientY);
      if (Math.abs(h) > 2) {
        if (h > 0) {
          this.next();
        } else {
          this.prev();
        }
      }
      this.handleLeave();
    },
    handleEnter() {
      clearTimeout(this.autoTimer);
      this.autoTimer = null;
    },
    handleLeave() {
      this.autoPlay();
    },
    autoPlay() {
      if (this.autoTimer || !this.autoplay) {
        return;
      }
      this.autoTimer = setInterval(() => {
        this.next();
      }, this.interval);
    },
    setActiveItem(index) {
      this.animationDirection = this.curIndex > index ? 'prev' : 'next';
      this.curIndex = index;
    },
    prev() {
      this.animationDirection = 'prev';
      let newIndex = this.curIndex - 1;
      if (newIndex < 0) {
        newIndex = this.maxIndex;
      }
      this.curIndex = newIndex;
    },
    next() {
      this.animationDirection = 'next';
      this.oldIndex = this.curIndex;
      let newIndex = this.curIndex + 1;
      if (newIndex > this.maxIndex) {
        newIndex = 0;
      }
      this.curIndex = newIndex;
    },
  },
  computed: {
    maxIndex() {
      return this.$slots.default.length - 1;
    },
  },
  mounted() {
    this.autoPlay();
    // 获取核心数据源
    const items = this.$children.filter(
      (it) => it.$options.name === 'NCarouselItem',
    );
    this.source = items.map((it) => it.name);
    this.curIndex = this.source.indexOf(this.initialIndex);
  },
  watch: {
    curIndex(val) {
      this.$emit('change', val);
      this.eventBus.$emit('update:animationDirection', this.animationDirection);
      this.eventBus.$emit('update:curindex', this.source[val]);
    },
  },
  provide() {
    return { eventBus: this.eventBus };
  },
};
</script>

<style lang="scss" scoped>
.carousel-container {
  position: relative;
  width: 100%;
  background: #f1f1f1;
  overflow: hidden;
  .carousel-btn {
    width: 2.5em;
    height: 2.5em;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    border-radius: 50%;
    border: none;
    outline: none;
    background: rgba(0, 0, 0, 0.247);
    opacity: 0.4;
    color: white;
    transition: all 0.3s;
    cursor: pointer;
    @media screen and (min-width: 1025px) {
      &:hover {
        font-weight: bold;
        opacity: 1;
      }
    }
    &-prev {
      left: 1em;
    }
    &-next {
      right: 1em;
    }
  }
  .carousel-indicators {
    position: relative;
    left: 0;
    right: 0;
    height: 1em;
    bottom: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      display: block;
      width: 1.5em;
      height: 0.3em;
      margin: 0 0.3em;
      background: white;
      opacity: 0.3;
      z-index: 2;
      cursor: pointer;
      &.active {
        background: white;
        opacity: 1;
      }
    }
  }
  .carousel-inner {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
  }
}
.v-leave-active,
.v-enter-active {
  transition: all 1s;
}
.v-leave-to,
.v-enter {
  opacity: 0;
  background: #000;
  transform: translateX(100%);
}
.v-move {
  transition: opacity 0.3s;
}
</style>
