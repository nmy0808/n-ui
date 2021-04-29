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
@import '../../../styles/var.scss';
$bg: lighten($gray, 20%);
$border-color: #ccc;
.collapse-item-container {
  width: 100%;
  .title-wrapper {
    background: $bg;
    padding: 0.5em 1em;
    cursor: pointer;
    font-size: $base-size;
    border-radius: $base-radius;
    color: black;
  }
  .items-wrapper {
    &.close {
      height: 0;
      padding: 0 1em;
      overflow: hidden;
    }
    border-bottom: 2px solid white;
    transition: all 0.1s;
    border-radius: $base-radius;
    background: lighten($gray, 26%);
    font-size: $base-size;
    padding: 0.5em 1em;
  }
}

</style>