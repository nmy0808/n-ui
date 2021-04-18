<template>
  <div class="navmenu-container" :class="{ vertical }">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  model: {
    prop: 'selectedIndex',
    event: 'update:selectedIndex',
  },
  name: 'NavMenu',
  props: {
    selectedIndex: {
      type: Array,
      required: true,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  mounted() {
    this.eventBus.$emit('add:selectedIndex', this.selectedIndex);
    this.eventBus.$on('update:selectedIndex', (index) => {
      if (!this.multiple) {
        this.$emit('update:selectedIndex', [index]);
      } else {
        let copy = JSON.parse(JSON.stringify(this.selectedIndex));
        if (this.active) {
          copy = copy.filter((it) => it !== index);
        } else {
          copy.push(index);
        }
        this.$emit('update:selectedIndex', copy);
      }
    });
  },
  watch: {
    selectedIndex() {
      this.eventBus.$emit('add:selectedIndex', this.selectedIndex);
    },
  },
  provide() {
    return {
      eventBus: this.eventBus,
      vertical: this.vertical,
    };
  },
};
</script>
<style lang="scss" scoped>
.navmenu-container {
  background: white;
  box-shadow: 1px 1px 1px rgba(31, 31, 31, 0.103);
  font-size: 16px;
  display: flex;
  position: relative;
  z-index: 3;
  background: white;
  &.vertical {
    overflow: hidden;
    flex-direction: column;
    & > .menu-item-container {
      width: 100%;
      text-indent: 0.5em;
    }
  }
}
</style>