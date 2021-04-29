<template>
  <div class="n-cascader">
    <div class="header" ref="header" @click="handleSwitchBody">
      {{ inputTxt }}
      <div
        class="n-cascader-header-placeholder"
        v-show="!cascaderSourced.length"
      >
        {{ placeholder }}
      </div>
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
    placeholder: {
      type: String,
      default: '',
    },
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
  beforeDestroy() {
    this.eventBus.$off('update:list');
    this.eventBus.$off('update:bodyVisible');
    this.eventBus.$off('update:cascaderSourced');
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
@import '../../../styles/var.scss';
.n-cascader {
  position: relative;
  width: 20em;
  font-size: 14px;
  .header {
    position: relative;
    height: 32px;
    border-radius: $base-radius;
    border: 1px solid $gray;
    display: flex;
    align-items: center;
    padding-left: 0.5em;
    cursor: pointer;
    .n-cascader-header-placeholder {
      color: $gray;
    }
    .icon {
      position: absolute;
      right: 0.5em;
      top: 50%;
      transform: translateY(-50%);
      z-index: 11;
      color: $lightWords;
    }
  }
  .body {
    margin-top: 0.1em;
    position: absolute;
    left: 0;
    top: 100%;
    z-index: 1;
    width: 40%;
  }
}
</style>
