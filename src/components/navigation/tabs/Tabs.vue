<template>
  <div class="tab-container">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'NTabWrapper',
  model: {
    prop: 'selected',
    event: 'update:selected',
  },
  props: {
    selected: {
      type: String,
      required: true,
    },
    tabBarExtraContent: {
      type: String,
    },
  },
  provide() {
    return {
      eventBus: this.eventBus,
    };
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  created() {
  },
  mounted() {
    if (this.selected) {
      this.$children.forEach((child) => {
        if (child.$options.name === 'NTabHead') {
          child.$children.forEach((item) => {
            if (
              item.name === this.selected
              && item.$options.name === 'NTabTitle'
            ) {
              this.eventBus.$emit('update:selected', item);
            }
          });
        }
      });
    }
    //  点击`tab-title组件`的监听总线
    this.eventBus.$on('update:selected', (vm) => {
      this.$emit('update:selected', vm.name);
    });
    this.eventBus.$on('tabClick', (e) => {
      this.$emit('tabClick', e);
    });
  },
};
</script>

<style>
</style>
