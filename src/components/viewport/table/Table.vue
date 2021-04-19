<template>
  <div class="table-container">
    <table class="striped bordered">
      <thead>
        <tr>
          <th><input type="checkbox" /></th>
          <th v-if="numberVisible">#</th>
          <th v-for="column in columns" :key="column.field">
            {{ column.text }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in dataSource" :key="item.id">
          <td>
            <input
              type="checkbox"
              @click="changeItem($event.target.checked, item, i)"
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
export default {
  name: 'NTable',
  props: {
    columns: {
      type: Array,
      required: true,
    },
    dataSource: {
      type: Array,
      required: true,
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
    changeItem(checked, data, index) {
      this.$emit('changeItem', { checked, data, index });
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