<template>
  <div class="carousel-container" :style="{ height: height + 'px' }">
    <button @click="handlePrev">prev</button>
    <button @click="handleNext">next</button>
    <div class="carousel-inner" ref="inner">
      <slot></slot>
    </div>

    {{ maxIndex }}
    {{ source }}
    {{ curIndex }}
  </div>
</template>

<script>
import Vue from 'vue';

export default {
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
    };
  },
  methods: {
    handlePrev() {
      this.animationDirection = 'prev';
      let newIndex = this.curIndex - 1;
      if (newIndex < 0) {
        newIndex = this.maxIndex;
      }
      this.curIndex = newIndex;
    },
    handleNext() {
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
    // animationDirection() {
    //   return (this.oldIndex > this.curIndex ? 'prev' : 'next') || 'next';
    // },
  },
  mounted() {
    // 获取核心数据源
    const items = this.$children;
    this.source = items.map((it) => it.name);
    this.curIndex = this.source.indexOf(this.initialIndex);
  },
  watch: {
    curIndex(val) {
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
  width: 200px;
  border: 1px solid;
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
