<template>
  <div class="submenu-container" @[eventLeave]="handleLeave">
    <div
      class="submenu-title"
      @[eventEnter]="show = !show"
      :class="{ active, open, 'none-border': noneBorder, vertical }"
    >
      <slot name="title"></slot>
      <n-icon
        class="icon-move"
        icon="i-arrow-right"
        v-if="noneBorder && !vertical"
      />
      <span class="icon-move" v-if="vertical && !show">+</span>
      <span class="icon-move" :class="{ 'icon-open': show }" v-if="vertical"
        >-</span
      >
    </div>
    <template v-if="vertical">
      <transition @enter="enter" @leave="leave">
        <div class="submenu-body" :class="{ vertical }" v-show="show">
          <slot></slot>
        </div>
      </transition>
    </template>
    <template v-else>
      <div class="submenu-body" v-show="show">
        <slot></slot>
      </div>
    </template>
  </div>
</template>

<script>
import gsap from 'gsap';
import NIcon from '../../basic/icon/Icon.vue';

export default {
  inject: ['eventBus', 'vertical'],
  name: 'SubMenu',
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
    handleLeave() {
      this.show = false;
    },
    enter(el, done) {
      const ele = el;
      const { height } = getComputedStyle(el);
      ele.style.height = 0;
      gsap.to(ele, {
        height, // 目标值
        duration: 0.3, // 完成时间
        onComplete() {
          ele.style.height = 'auto';
          done();
        },
      });
    },
    leave(el, done) {
      const ele = el;
      gsap.to(ele, {
        height: 0, // 目标值
        duration: 0.3, // 完成时间
        onComplete() {
          ele.style.height = 'auto';
          done();
        },
      });
    },
    handleClose() {
      this.show = false;
    },
  },
  computed: {
    noneBorder() {
      return this.$parent.$options.name !== 'NavMenu';
    },
    eventEnter() {
      return this.vertical ? 'click' : 'mouseenter';
    },
    eventLeave() {
      return this.vertical ? null : 'mouseleave';
    },
  },
  mounted() {
    this.eventBus.$on('delete:active', () => {
      this.active = false;
    });
    this.eventBus.$on('delete:show', () => {
      this.show = false;
    });
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
$subMenu-width: 100%;
.submenu-container {
  width: $subMenu-width;
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
    &.vertical {
      text-indent: 0.5em;
      justify-content: left;
    }
    .icon-move {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0.4em;
      display: block;
      transition: 0.3s;
    }
    &.active {
      color: #3b73fb;
    }
    &.active:not(.vertical) {
      color: #3b73fb;
      border-bottom: 1px solid #3b73fb;
    }
    &.open:not(.vertical) {
      background: #f1f1f1;
    }
    &:hover {
      color: #3b73fb;
      background: #f1f1f1;
    }
  }
  .submenu-body.vertical {
    text-indent: 1.5em;
    overflow: hidden;
    width: 100%;
    .submenu-title {
      width: 100%;
      text-indent: 1.5em;
    }
  }
  .submenu-body:not(.vertical) {
    box-shadow: 1px 1px 1px rgba(31, 31, 31, 0.103);
    width: 100%;
    position: absolute;
    left: 0;
    top: 100%;
    z-index: 3;
    .submenu-container {
      width: 100%;
    }
    .menu-item-container {
      border: none;
    }
  }
  .submenu-container .submenu-body.vertical {
    text-indent: 2.5em;
  }
  .submenu-container .submenu-body:not(.vertical) {
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
