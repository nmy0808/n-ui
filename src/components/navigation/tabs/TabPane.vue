<template>
  <div class="tabs-pane-container" v-if="isShow">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'NTabPane',
  inject: ['eventBus'],
  props: {
    name: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  computed: {
    isShow() {
      return this.show;
    },
  },
  mounted() {
    this.eventBus.$on('update:selected', (vm) => {
      if (this.name === vm.name) {
        this.show = true;
      } else {
        this.show = false;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
@import '../../../styles/var.scss';
.tabs-pane-container{
  color: $words;
  font-size: $base-size;
  padding: 1em;
}
</style>
