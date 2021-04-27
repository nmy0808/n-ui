<template>
  <div class="cascader-container">
    <div class="header" ref="header" @click="handleSwitchBody">
      {{ inputTxt }}
      <n-icon
        ref="icon"
        class="icon"
        icon="i-close"
        @click.native="handleClearData"
      ></n-icon>
    </div>
    <div class="body" ref="body" v-show="bodyVisible">
      <CascaderItem
        :cascaderSource="cascaderSource"
        :list="list"
        :cascaderSourced="cascaderSourced"
      />
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import CascaderItem from './CascaderItem.vue';
import NIcon from '../../basic/icon/Icon.vue';

export default {
  name: 'NCascader',
  components: { CascaderItem, NIcon },
  props: {
    cascaderSource: {
      type: Array,
      default: () => [],
      required: true,
    },
    cascaderSourced: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  data() {
    return {
      bodyVisible: false,
      eventBus: new Vue(),
      list: [],
    };
  },
  provide() {
    return {
      eventBus: this.eventBus,
      cascaderSourced: this.cascaderSourced,
    };
  },
  methods: {
    handleSwitchBody(e) {
      if (this.$refs.icon.$el === e.target) {
        return;
      }
      this.bodyVisible = !this.bodyVisible;
    },
    handleClose(e) {
      if (!this.$refs.body.contains(e.target)) {
        this.bodyVisible = false;
      }
    },
    handleClearData() {
      this.$emit('update:cascaderSourced', []);
      this.list = [];
    },
  },
  computed: {
    inputTxt() {
      return this.cascaderSourced.join('/');
    },
  },
  mounted() {
    this.eventBus.$on('update:list', (e) => {
      this.list = e;
    });
    this.eventBus.$on('update:bodyVisible', () => {
      this.bodyVisible = false;
    });
    this.eventBus.$on('update:cascaderSourced', (e) => {
      this.$emit('update:cascaderSourced', e);
    });
  },
  watch: {
    bodyVisible(val) {
      setTimeout(() => {
        if (val) {
          document.addEventListener('click', this.handleClose);
        } else {
          document.removeEventListener('click', this.handleClose);
        }
      }, 0);
    },
  },
};
</script>
<style lang="scss" scoped>
.cascader-container {
  position: relative;
  width: 20em;
  font-size: 14px;
  .header {
    position: relative;
    height: 32px;
    border: 1px solid;
    display: flex;
    align-items: center;
    padding-left: 0.5em;
    cursor: pointer;
    .icon {
      position: absolute;
      right: 0.5em;
      top: 50%;
      transform: translateY(-50%);
      z-index: 11;
    }
  }
  .body {
    position: absolute;
    left: 0;
    top: 100%;
    width: 40%;
    // background: white;
  }
}
</style>