<template>
  <div class="sticky-container" ref="container">
    <div class="sticky-content" :style="styles" ref="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    distance: {
      type: [Number],
      default: 0,
    },
  },
  data() {
    return {
      container: null,
      styles: {
        width: null,
        height: null,
        top: null,
        left: null,
        position: null,
      },
    };
  },
  mounted() {
    this.init();
    this.handleScroll();
    document.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    init() {
      this.container = this.$refs.container;
      this.content = this.$refs.content;
      const style = getComputedStyle(this.container);
      this.styles.width = style.width;
      this.styles.height = style.height;
    },
    handleScroll() {
      const scrollTop = window.scrollY;
      const top = this.container.getBoundingClientRect().top + scrollTop;
      if (scrollTop + this.distance > top) {
        const {
          left,
          width,
          height,
        } = this.content.getBoundingClientRect();
        this.styles.top = `${0 + this.distance}px`;
        this.styles.left = `${left}px`;
        this.styles.position = 'fixed';
        this.styles.width = `${width}px`;
        this.styles.height = `${height}px`;
      } else {
        this.styles.position = null;
        this.styles.left = null;
        this.styles.top = null;
        this.styles.width = null;
        this.styles.height = null;
      }
    },
  },
  beforeMount() {
    document.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style lang="scss" scoped>
.sticky-content {
  z-index: 19;
}
</style>