<template>
  <div class="navmenu-container" :class="{ vertical }">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'NNavMenu',
  model: {
    prop: 'selectedIndex',
    event: 'update:selectedIndex',
  },
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
@import '../../../styles/var.scss';
.navmenu-container {
  background: white;
  font-size: $base-size + 2px;
  display: flex;
  position: relative;
  z-index: 3;
  background: white;
  border: 1px solid lighten($color: $lightWords, $amount: 35%);
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