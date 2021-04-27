<template>
  <div class="collapse-item-container">
    <div class="title-wrapper" @click="handleChangeSelected" data-test="title">
      <slot name="title"></slot>
    </div>
    <div
      class="items-wrapper"
      :class="{ close: show }"
      ref="items"
      data-test="items"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NCollapseItem',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  inject: ['eventBus'],
  data() {
    return {
      show: false,
    };
  },
  methods: {
    handleChangeSelected() {
      this.eventBus.$emit('update:collapseSelected', +this.name);
    },
    changeData(data) {
      if (data.includes(+this.name)) {
        this.show = false;
      } else {
        this.show = true;
      }
      this.data = data;
    },
  },
  mounted() {
    this.eventBus.$on('update:data', this.changeData);
  },
  beforeDestroy() {
    this.eventBus.$off('update:data', this.changeData);
  },
};
</script>

<style lang="scss" scoped>
$bg: #f3f3f3;
$border-color: #ccc;
.collapse-item-container {
  width: 100%;
  .title-wrapper {
    background: $bg;
    padding: 0.5em 1em;
    cursor: pointer;
    font-size: 14px;
  }
  .items-wrapper {
    &.close {
      height: 0;
      padding: 0;
      overflow: hidden;
      border: 1px solid transparent;
    }
    background: #f5f5f548;
    font-size: 12px;
    padding: 0.5em 1em;
  }
}
</style>
