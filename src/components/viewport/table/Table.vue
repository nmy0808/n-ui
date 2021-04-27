<template>
  <div class="table-container" :height="height + 'px'">
    <div class="thead-move-target" ref="thead_target"></div>
    <n-scroll
      class="table-scroll-container"
      :height="scrollHeight"
      ref="scroll"
    >
      <table class="striped bordered" ref="table">
        <thead ref="thead">
          <tr ref="thead_tr">
            <th v-if="expended" style="width: 10px">
              <n-icon
                icon="i-arrow-right table-icon-expended"
                style="visibility: hidden; opacity: 0"
              />
            </th>
            <th style="width: 10px" v-if="checkable">
              <input
                type="checkbox"
                @click="changeAllItem"
                ref="allCheckbox"
                :checked="checkedAllState"
              />
            </th>
            <th v-if="numberVisible">#</th>
            <th
              :style="{ width: column.width }"
              v-for="column in columns"
              :key="column.field"
            >
              <div class="table-th">
                {{ column.text }}
                <div
                  v-if="orderBy[column.field]"
                  @click="handleChangeOrder(column.field)"
                  class="table-order-icons"
                >
                  <NIcon
                    class="icon-top"
                    :class="{ active: orderBy[column.field] === 'asc' }"
                    icon="i-sanjiaotop"
                    style="font-size: 0.8em"
                  />
                  <NIcon
                    class="icon-bottom"
                    :class="{ active: orderBy[column.field] === 'desc' }"
                    icon="i-sanjiaoxia"
                    style="font-size: 0.8em"
                  />
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody ref="tbody">
          <template v-for="(item, i) in dataSource">
            <tr :key="item.id">
              <td
                v-if="expended"
                style="width: 10px"
                @click="changeExpendeds(item)"
              >
                <n-icon
                  :class="[includeExpended(item.id) ? 'active' : '']"
                  icon="i-arrow-right table-icon-expended"
                  v-if="item.description"
                />
              </td>
              <td class="table-checkBox" v-if="checkable">
                <input
                  type="checkbox"
                  @click="changeItem($event.target.checked, item)"
                  :checked="getCheckedState(item)"
                />
              </td>
              <td v-if="numberVisible">{{ i + 1 }}</td>
              <template v-for="column in columns">
                <template v-if="column.render">
                  <td
                    :key="column.field"
                    :style="{
                      width: column.width,
                    }"
                  >
                    <slot></slot>
                    <vnodes
                      :key="column.field"
                      :vnodes="
                        column.render({
                          value: item[column.field],
                          item,
                          $index: i,
                        })
                      "
                    />
                  </td>
                </template>
                <template v-else>
                  <td
                    :key="column.field"
                    :style="{
                      width: column.width,
                    }"
                  >
                    {{ item[column.field] }}
                  </td>
                </template>
              </template>
            </tr>
            <transition :key="`${item.id}-desc`">
              <tr v-if="includeExpended(item.id) && item.description">
                <td :colspan="spareColNum"></td>
                <td :colspan="columns.length">
                  <div class="table-expend-tr">
                    {{ item.description }}
                  </div>
                </td>
              </tr>
            </transition>
          </template>
        </tbody>
      </table>
    </n-scroll>
    <div class="table-loading" v-show="loading">
      <n-icon icon="i-loading" />
    </div>
  </div>
</template>

<script>
import NIcon from '../../basic/icon/Icon.vue';
import NScroll from '../scroll/Scroll.vue';

export default {
  name: 'NTable',
  components: {
    NScroll,
    NIcon,
    vnodes: {
      functional: true,
      render: (h, ctx) => ctx.props.vnodes,
    },
  },
  data() {
    return {
      scrollHeight: 0,
      expendeds: [],
      columns: [],
    };
  },
  props: {
    expended: {
      type: Boolean,
      default: false,
    },
    checkable: {
      type: Boolean,
      default: false,
    },
    height: {
      type: [Number, String],
    },
    loading: {
      type: Boolean,
      default: false,
    },
    orderBy: {
      type: Object,
    },
    selectedItems: {
      type: Array,
      default: () => [],
    },
    dataSource: {
      type: Array,
      required: true,
      validator(array) {
        //  必须保证每一项都有id
        return array.find((it) => it.id === undefined) === undefined;
      },
    },
    striped: {
      type: Boolean,
      default: true,
    },
    bordered: {
      type: Boolean,
      default: false,
    },
    numberVisible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    includeExpended(id) {
      return this.expendeds.includes(id);
    },
    changeExpendeds(item) {
      if (!item.description) {
        return;
      }
      if (this.expendeds.includes(item.id)) {
        this.expendeds = this.expendeds.filter((it) => it !== item.id);
      } else {
        this.expendeds.push(item.id);
      }
    },
    handleChangeOrder(field) {
      const copy = JSON.parse(JSON.stringify(this.orderBy));
      const validator = copy[field];
      if (validator === 'asc') {
        copy[field] = 'desc';
      } else if (validator === 'desc') {
        copy[field] = true;
      } else {
        copy[field] = 'asc';
      }
      this.$emit('update:orderBy', copy);
    },
    getCheckedState(item) {
      const res = this.selectedItems.find((it) => it.id === item.id);
      return res !== undefined;
    },
    changeItem(checked, item) {
      let copy = JSON.parse(JSON.stringify(this.selectedItems));
      if (checked) {
        copy.push(item);
      } else {
        copy = copy.filter((it) => it.id !== item.id);
      }
      this.$emit('update:selectedItems', copy);
    },
    changeAllItem(e) {
      if (e.target.checked) {
        this.$emit('update:selectedItems', this.dataSource);
      } else {
        this.$emit('update:selectedItems', []);
      }
    },
  },
  computed: {
    spareColNum() {
      let res = 0;
      if (this.checkable) {
        res += 1;
      }
      if (this.expended) {
        res += 1;
      }
      return res;
    },
    checkedAllState() {
      let equal = true;
      const dataSourceIds = this.dataSource.map((it) => it.id);
      const selectedItemsIds = this.selectedItems.map((it) => it.id);
      for (let i = 0; i < dataSourceIds.length; i += 1) {
        if (dataSourceIds[i] !== selectedItemsIds[i]) {
          equal = false;
          break;
        }
      }
      return equal;
    },
  },
  watch: {
    selectedItems(val) {
      const el = this.$refs.allCheckbox;
      if (val.length > 0 && val.length < this.dataSource.length) {
        el.indeterminate = true;
      } else {
        el.indeterminate = false;
      }
    },
  },
  mounted() {
    console.log(this.$refs.scroll);
    console.log(this.$refs.scroll.directives);
    this.$slots.default.forEach((vNode) => {
      const { width, text, field } = vNode.data.attrs;
      const render = vNode.data.scopedSlots && vNode.data.scopedSlots.default;
      this.columns.push({
        width,
        text,
        field,
        render,
      });
    });

    //
    const target = this.$refs.thead_target;
    const NewTable = this.$refs.table.cloneNode(false);
    const NewThead = document.createElement('thead');
    //
    const { thead } = this.$refs;
    const theadTr = this.$refs.thead_tr;
    NewThead.appendChild(theadTr);
    NewTable.appendChild(NewThead);
    target.appendChild(NewTable);
    thead.remove();
    //
    this.scrollHeight = parseFloat(this.height) - this.$refs.thead_target.offsetHeight;
  },
};
</script>

<style lang="scss" scoped>
$gray: #f4f3f4;
.table-container {
  position: relative;
  background: white;
  .table-scroll-container {
    &::-webkit-scrollbar {
      // position: relative;
      // left: 1px;
    }
    position: relative;
    // overflow: hidden;
  }
  table {
    text-align: left;
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    .table-checkBox {
      width: 10px;
    }
    thead {
      text-align: left;
    }
    tr {
      background: white;
      height: 3em;
      border-bottom: 1px solid $gray;
      td,
      th {
        padding: 0 1em;
        .table-th {
          display: flex;
          align-items: center;
          .table-order-icons {
            margin-left: 0.3em;
            cursor: pointer;
            display: inline-flex;
            flex-direction: column;
            transform: scale(0.8) translateY(0.1em);
            color: lighten($color: #000000, $amount: 75%);
            .icon-top {
              transform: translateY(0.2em);
              &.active {
                color: #3b73fb;
              }
            }
            .icon-bottom {
              transform: translateY(-0.2em);
              &.active {
                color: #3b73fb;
              }
            }
          }
        }
      }
    }
    &.striped {
      tbody {
        tr:nth-child(odd) {
          background: $gray;
        }
      }
    }
    &.bordered {
      border: 1px solid $gray;
      td,
      th {
        border: 1px solid darken($gray, 5%);
      }
    }
  }
  .table-loading {
    position: absolute;
    background: white;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    opacity: 0.5;
    .n-icon {
      font-size: 1.5em;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%);
      animation: turn 2s linear infinite;
    }
    @keyframes turn {
      0% {
        -webkit-transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
      }
    }
  }
  .table-icon-expended {
    display: inline-block;
    font-size: 12px;
    color: lighten($color: #000000, $amount: 10%);
    transition: 0.1s;
    &.active {
      transform: rotateZ(90deg);
    }
  }
}
</style>