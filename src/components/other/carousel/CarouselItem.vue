<template>
  <transition :name="animationDirection">
    <div class="carouser-item-container" v-if="show">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  inject: ['eventBus'],
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      flag: true,
      show: false,
      animationDirection: '',
    };
  },
  mounted() {
    this.eventBus.$on('update:animationDirection', (animationDirection) => {
      if (this.flag) {
        setTimeout(() => {
          this.animationDirection = animationDirection;
          this.flag = false;
        }, 0);
      } else {
        this.animationDirection = animationDirection;
      }
    });
    this.eventBus.$on('update:curindex', (name) => {
      console.log(this.animationDirection);
      if (this.name === name) {
        this.show = true;
      } else {
        this.show = false;
      }
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
  color: red;
  border: 1px solid;
}
.next-leave-active,
.next-enter-active,
.prev-leave-active,
.prev-enter-active {
  transition: all 1s;
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