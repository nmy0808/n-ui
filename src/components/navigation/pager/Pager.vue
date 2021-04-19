<template>
  <div
    class="pager-container"
    :class="{ 'pager-none': singleHide && total <= 1 }"
  >
    <span
      class="pager-item pager-prev"
      @click="handleSwitchPage(current - 1)"
      :class="{ disabled: current === 1 }"
      ><NIcon icon="i-arrow-left"
    /></span>
    <template v-for="(page, i) in pages">
      <template v-if="page === '...'">
        <span class="pager-item pager-move" :key="i">{{ page }}</span>
      </template>
      <template v-else-if="page === current">
        <span class="pager-item active" :key="i">{{ page }}</span>
      </template>
      <template v-else>
        <span class="pager-item" @click="handleSwitchPage(page)" :key="i">{{
          page
        }}</span>
      </template>
    </template>
    <span
      class="pager-item pager-next"
      :class="{ disabled: current === total }"
      @click="handleSwitchPage(current + 1)"
      ><NIcon icon="i-arrow-right"
    /></span>
  </div>
</template>

<script>
import NIcon from '../../basic/icon/Icon.vue';

export default {
  components: { NIcon },
  model: {
    prop: 'current',
    event: 'update:current',
  },
  props: {
    total: {
      type: Number,
      required: true,
    },
    current: {
      type: Number,
      required: true,
    },
    singleHide: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    pages() {
      const { total } = this;
      const res = [
        1,
        this.total,
        this.current,
        this.current - 1,
        this.current - 2,
        this.current + 1,
        this.current + 2,
      ]
        .filter(
          (element, index, self) => self.indexOf(element) === index && element > 0
            && element <= total,
        )
        .sort((a, b) => a - b)
        .reduce((pre, cur, i, arr) => {
          const result = pre;
          if (arr[i + 1] - cur > 1) {
            result.push(cur);
            result.push('...');
          } else {
            result.push(cur);
          }
          return result;
        }, []);
      return res;
    },
  },
  methods: {
    handleSwitchPage(page) {
      if (page >= 1 && page <= this.total && page !== this.current) {
        this.$emit('change', page);
        this.$emit('update:current', page);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.pager-container {
  display: inline-flex;
  align-items: center;
  &.pager-none {
    display: none;
  }
  .pager-item {
    font-size: 14px;
    height: 28px;
    min-width: 28px;
    border: 1px solid transparent;
    background: #f1f1f1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 0.3em;
    transition: all 0.2s;
    &.pager-move {
      border: 1px solid transparent;
      background: none;
    }
    &.pager-prev,
    &.pager-next {
      border: 1px solid transparent;
      background: #f1f1f1;
    }
    &:hover {
      color: #3b73fb;
    }
    &.active {
      background: #3b73fb;
      color: white;
      cursor: default;
    }
    &.disabled {
      background: #f1f1f196;
      color: rgb(216, 216, 216);
      cursor: no-drop;
    }
  }
}
</style>