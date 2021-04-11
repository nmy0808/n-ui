<template>
  <div class="collapse-item-container">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  model: {
    prop: 'collapseSelected',
    event: 'update:collapseSelected',
  },
  props: {
    collapseSelected: {
      type: Array,
      default: () => [],
    },
    single: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  provide() {
    return {
      eventBus: this.eventBus,
      selecteds: this.collapseSelected,
    };
  },
  mounted() {
    this.eventBus.$on('update:collapseSelected', this.changeSelected);
    this.eventBus.$emit('update:data', this.collapseSelected);
  },
  beforeDestroy() {
    this.eventBus.$off('update:collapseSelected', this.changeSelected);
  },
  methods: {
    changeSelected(name) {
      let collapseSelectedCopy = JSON.parse(
        JSON.stringify(this.collapseSelected),
      );
      const emitMethods = {
        single: () => {
          if (collapseSelectedCopy.includes(name)) {
            collapseSelectedCopy = collapseSelectedCopy.filter(
              (it) => it !== name,
            );
          } else {
            collapseSelectedCopy.push(name);
          }
        },
        noSingle: () => {
          if (collapseSelectedCopy.includes(name)) {
            collapseSelectedCopy = [];
          } else {
            collapseSelectedCopy = [name];
          }
        },
      };
      const type = this.single ? 'single' : 'noSingle';
      emitMethods[type]();
      this.$emit('update:collapseSelected', collapseSelectedCopy);
    },
  },
  watch: {
    collapseSelected() {
      this.eventBus.$emit('update:data', this.collapseSelected);
    },
  },
};
</script>

<style lang="scss" scoped>
.collapse-item-container {
  // border: 1px solid $border-color;
  border-radius: 2px;
}
</style>
