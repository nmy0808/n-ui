<template>
  <div class='n-cascader-item'>
    <div class='left'>
      <div
        class='item'
        v-for='item in cascaderSource'
        :key='item.value'
        @click='handleClickItem(item)'
        :class='{ active: cascaderSourced[level] === item.value }'
      >
        <n-icon class='icon' icon='i-arrow-right' v-if='item.children' />
        {{ item.label }}
      </div>
    </div>
    <div class='right' v-if='sourcedChildren'>
      <CascaderItem
        :cascaderSource='sourcedChildren'
        :cascaderSourced='cascaderSourced'
        :level='level + 1'
        :list='list'
      />
    </div>
  </div>
</template>

<script>
import NIcon from '../../basic/icon/Icon.vue';

export default {
  components: { NIcon },
  name: 'CascaderItem',
  props: {
    cascaderSource: {
      type: Array,
      default: () => [],
    },
    cascaderSourced: {
      type: Array,
    },
    level: {
      type: [String, Number],
      default: 0,
    },
    list: {
      type: Array,
    },
  },
  inject: ['eventBus'],
  computed: {
    sourcedChildren() {
      if (this.list[this.level]) {
        return this.list[this.level];
      }
      return null;
    },
  },
  methods: {
    handleClickItem(item) {
      this.emitUpdateList(item);
      this.emitUpdateCascaderSourcedList(item);
      this.emitUpdateClose(item);
    },
    emitUpdateClose(item) {
      if (!item.children) {
        this.eventBus.$emit('update:bodyVisible');
      }
    },
    emitUpdateList(item) {
      const cascaderListCopy = JSON.parse(JSON.stringify(this.list));
      cascaderListCopy[this.level] = item.children;
      cascaderListCopy.splice(this.level + 1);
      this.eventBus.$emit('update:list', cascaderListCopy);
    },
    emitUpdateCascaderSourcedList(item) {
      const cascaderSourcedCopy = JSON.parse(
        JSON.stringify(this.cascaderSourced),
      );
      cascaderSourcedCopy[this.level] = item.value;
      cascaderSourcedCopy.splice(this.level + 1);
      this.eventBus.$emit('update:cascaderSourced', cascaderSourcedCopy);
    },
  },
};
</script>
<style lang='scss' scoped>
@import '../../../styles/var.scss';

.n-cascader-item {
  display: flex;
  .left {
    flex-shrink: 0;
    width: 100%;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      z-index: 2;
      width: 1px;
      background: white;
    }
    .item {
      background: white;
      position: relative;
      width: 100%;
      padding: 0.5em 0;
      padding-left: 0.5em;
      cursor: pointer;

      &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 1px;
        background: lighten($gray,20%);
      }

      &:hover {
        background: lighten($gray,24%);
      }

      &.active {
        font-weight: bold;
        color: $primary;
        background: lighten($gray,24%);
      }

      .icon {
        position: absolute;
        right: 0.5em;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }

  .right {
    flex-shrink: 0;
    width: 100%;
  }

  .left, .right {
    box-shadow: $box-shadow;
  }
}
</style>
