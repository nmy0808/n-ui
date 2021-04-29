<template>
  <div class="tabs-container" :class="activeClass" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'NTabTitle',
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
@import '../../../styles/var.scss';
.tabs-container {
  font-size: $base-size;
  padding: 0.7em;
  cursor: pointer;
  color: $words;
  border-top-left-radius: $base-radius;
  border-top-right-radius: $base-radius;
  transition: all 0.1s;
  &.active {
    color: $primary;
    font-weight: bold;
    background: lighten($color: $gray, $amount: 22%);
  }
  &.disabled {
    color: lighten($color: $gray, $amount: 10%);
    font-weight: normal;
    cursor: not-allowed;
  }
}
</style>
