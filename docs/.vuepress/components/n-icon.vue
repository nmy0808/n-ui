<template>
  <div>
    <div class='section' ref='section' id='section'>
      <template v-for='icon in icons'>
        <div :key='icon' class='icon-item' @click.stop='onClick(icon,$event)'>
          <n-icon :icon='icon' />
          <div>{{ icon }}</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import plugins from '../../../src/plugins/plugin';
import NIcon from '../../../src/components/basic/icon/Icon.vue';

Vue.use(plugins);
const icons = [
  'i-loading',
  'i-date', 'i-triangle-top',
  'i-triangle-bottom', 'i-delete', 'i-download',
  'i-error', 'i-lock', 'i-search', 'i-refresh-left', 'i-refresh-right', 'i-success', 'i-user',
  'i-user-solid', 'i-star-off', 'i-circle-warning', 'i-circle-zoom', 'i-warning',
  'i-plus', 'i-back', 'i-arrow-left', 'i-unlock', 'i-arrow-right', 'i-arrow-up', 'i-alarm-clock', 'i-arrow-down',
  'i-bell', 'i-bottom', 'i-check', 'i-chat-square', 'i-circle-check', 'i-circle-close', 'i-circle-add',
  'i-caret', 'i-close',
];
export default {
  components: { NIcon },
  data() {
    return {
      loading: true,
      icons,
      icon: '',
      section: null,
    };
  },
  methods: {
    onClick(icon) {
      this.icon = icon;
      setTimeout(() => {
        document.execCommand('copy');
      }, 0);
      this.$toast('复制成功');
    },
  },
  mounted() {
    const self = this;
    this.section = this.$refs.section;
    document.addEventListener('copy', function (e) {
      if (self.section.contains(e.target) || self.section == e.target) {
        e.clipboardData.setData('text/plain', self.icon);
        e.preventDefault();
        e.stopPropagation();
      }
    });
  },
};
</script>

<style scoped lang='scss'>
@import '//at.alicdn.com/t/font_2449846_m1f2230a1zk.css';

.section {
  display: flex;
  flex-wrap: wrap;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .icon-item {
    cursor: pointer;
    flex-grow: 1;
    width: 20%;
    height: 8em;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    transition: all 0.1s;
    @media all and (max-width: 967px) {
      width: 30%;
    }
    .n-icon {
      font-size: 24px;
      user-select: none;
    }

    &:hover {
      background: rgba(204, 204, 204, 0.24);
    }
  }

}

.n-button {
  margin: 0.4em;
}
</style>
