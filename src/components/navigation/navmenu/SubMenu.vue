<template>
  <div class="submenu-container" v-clickOutside="handleClose">
    <div
      class="submenu-title"
      @mouseenter="show = !show"
      :class="{ active, open, 'none-border': noneBorder }"
    >
      <slot name="title"></slot>
      <n-icon class="icon-move" icon="i-arrow-right" v-if="noneBorder" />
    </div>
    <div class="submenu-body" v-show="show">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { clickOutside } from '../../../directives';
import NIcon from '../../basic/icon/Icon.vue';

export default {
  inject: ['eventBus'],
  name: 'SubMenu',
  directives: { clickOutside },
  components: { NIcon },
  data() {
    return {
      show: false,
      open: false,
      active: false,
    };
  },
  props: {
    index: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleClose() {
      this.show = false;
    },
  },
  computed: {
    noneBorder() {
      console.log(this.$parent.$options.name === 'NavMenu', '1');
      // return this.$parent.$options.name === 'NavMenu';
      return this.$parent.$options.name !== 'NavMenu';
    },
  },
  mounted() {
    this.eventBus.$on('delete:active', () => {
      this.active = false;
      console.log(this.active);
    });
    // console.log(this.$slots);
    // console.log(this.$slots.default[0].componentOptions.propsData);
    // console.log(this.$slots.default[3]);
  },
  watch: {
    show(val) {
      if (val) {
        this.open = true;
      } else {
        this.open = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$subMenu-width: 8em;
.submenu-container {
  width: $subMenu-width;
  text-align: center;
  background: white;
  position: relative;
  .submenu-title {
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2em;
    flex: 1;
    .icon-move {
      position: absolute;
      right: 0.5em;
    }
    &.active {
      color: #3b73fb;
      border-bottom: 1px solid #3b73fb;
    }
    &.open {
      background: #f1f1f1;
    }
    &:hover {
      color: #3b73fb;
      background: #f1f1f1;
    }
  }
  .submenu-body {
    width: 100%;
    position: absolute;
    left: 0;
    top: 100%;
    z-index: 3;
    font-size: 14px;
    .submenu-container {
      width: 100%;
    }
  }
  .submenu-container .submenu-body {
    position: absolute;
    width: 100%;
    left: 100%;
    top: 0;
    z-index: 3;
  }
  .menu-item-container {
    &.active {
      color: #3b73fb;
      border-bottom: none;
    }
    width: 100%;
  }
  .none-border {
    border: none !important;
    position: relative;
  }
}
</style>