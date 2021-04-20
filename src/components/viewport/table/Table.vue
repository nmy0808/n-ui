<template>
  <div class="table-container">
    {{ selectedItems }}
    <table class="striped bordered">
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              @click="changeAllItem"
              ref="allCheckbox"
              :checked="checkedAllState"
            />
          </th>
          <th v-if="numberVisible">#</th>
          <th v-for="column in columns" :key="column.field">
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
      <tbody>
        <tr v-for="(item, i) in dataSource" :key="item.id">
          <td>
            <input
              type="checkbox"
              @click="changeItem($event.target.checked, item)"
              :checked="getCheckedState(item)"
            />
          </td>
          <td v-if="numberVisible">{{ i + 1 }}</td>
          <template v-for="column in columns">
            <td :key="column.field">{{ item[column.field] }}</td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import NIcon from '../../basic/icon/Icon.vue';

export default {
  components: { NIcon },
  name: 'NTable',
  props: {
    orderBy: {
      type: Object,
    },
    selectedItems: {
      type: Array,
      default: () => [],
    },
    columns: {
      type: Array,
      required: true,
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
};
</script>

<style lang="scss" scoped>
$gray: #f4f3f4;
.table-container {
  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    thead {
      text-align: left;
    }
    tr {
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
}
</style>