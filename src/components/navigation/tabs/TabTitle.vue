<template>
  <div class="tabs-container" :class="activeClass" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabsTitle',
  inject: ['eventBus'],
  props: {
    name: {
      type: [Number, String],
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      active: false,
    };
  },
  computed: {
    activeClass() {
      return {
        active: this.active,
        disabled: this.disabled,
      };
    },
  },
  mounted() {
    this.eventBus.$on('update:selected', (vm) => {
      if (vm.name === this.name) {
        this.active = true;
      } else {
        this.active = false;
      }
    });
  },
  methods: {
    handleClick() {
      if (this.disabled) {
        return;
      }
      this.eventBus.$emit('update:selected', this);
    },
  },
};
</script>

<style lang="scss" scoped>
.tabs-container {
  font-size: 14px;
  padding: 0.7em;
  cursor: pointer;
  &.active {
    color: #3584fc;
    font-weight: bold;
  }
  &.disabled {
    color: #999;
    font-weight: normal;
    cursor: not-allowed;
  }
}
</style>
