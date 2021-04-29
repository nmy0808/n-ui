<template>
  <transition
    :name="animationDirection"
    mode="out-in"
    v-on:enter="enter"
    v-on:after-leave="afterLeave"
  >
    <div class="carouser-item-container" v-if="show">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'NCarouselItem',
  inject: ['eventBus'],
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      firstRenterLock: true,
      show: false,
      animationDirection: '',
    };
  },
  methods: {
    enter() {
      if (!this.firstRenterLock) {
        this.eventBus.$emit('update:playlock', true);
      }
    },
    afterLeave() {
      this.eventBus.$emit('update:playlock', false);
    },
  },
  mounted() {
    this.eventBus.$on('update:animationDirection', (animationDirection) => {
      if (this.firstRenterLock) {
        setTimeout(() => {
          this.animationDirection = animationDirection;
          this.firstRenterLock = false;
        });
      } else {
        this.animationDirection = animationDirection;
      }
    });
    this.eventBus.$on('update:curindex', (name) => {
      this.$nextTick(() => {
        if (this.name === name) {
          this.show = true;
        } else {
          this.show = false;
        }
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.carouser-item-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  background: #f1f3f5;
}
.next-leave-active,
.next-enter-active,
.prev-leave-active,
.prev-enter-active {
  transition: all 0.3s;
}
.next-leave-to {
  transform: translateX(-100%);
}
.next-enter {
  transform: translateX(100%);
}
.prev-leave-to {
  transform: translateX(100%);
}
.prev-enter {
  transform: translateX(-100%);
}
</style>