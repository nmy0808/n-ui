<template>
  <div class="box" style="padding-top:1em;">
    选中对象: 
    <div style="height:50px;  margin-top: 0.5em; margin-bottom: 2em;overflow: auto; font-size: 12px;">
      {{selectedItems}}
    </div>
    <n-table
      class="table"
      :data-source="dataSource"
      :selected-items.sync="selectedItems"
      :orderBy.sync="orderBy"
      :loading="tableLoading"
      height="455"
      checkable
      expended
      @update:orderBy="onUpdateOrder"
    >
      <n-table-column text="姓名" field="name" width="100px">
        <template slot-scope="scope">
          <a href="#">{{ scope.value }}</a>
        </template>
      </n-table-column>
      <n-table-column text="年龄" field="age" width="50px" />
      <n-table-column text="地址" field="address" align="left" />
      <n-table-column text="操作" width="130px">
        <template slot-scope="scope">
          <n-button @click="handleEdit(scope.item)">修改</n-button>
          <n-button @click="handleEdit(scope.item)">删除</n-button>
        </template>
      </n-table-column>
    </n-table>
  </div>
</template>

<script>
import Vue from 'vue';
import plugins from '../../../src/plugins/plugin';
Vue.use(plugins);
import NButton from '../../../src/components/basic/button/Button.vue';
import NTable from '../../../src/components/viewport/table/Table.vue';
import NTableColumn from '../../../src/components/viewport/table/TableColumn.vue';

export default {
  components: { NButton, NTableColumn, NTable },
  data() {
    return {
      dataSource: [
        {
          id: 1,
          name: 'a某某',
          age: 22,
          sex: '男',
          address: '左对齐...',
          description: '测试...',
        },
        {
          id: 2,
          name: 'b某某',
          age: 19,
          sex: '女',
          address: '左对齐...',
          description: '测试...',
        },
        {
          id: 3,
          name: 'c某某',
          age: 18,
          sex: '男',
          address: '左对齐...',
          description: '测试...',
        },
        {
          id: 4,
          name: 'd某某',
          age: 21,
          sex: '女',
          address: '左对齐...',
          description: '测试...',
        },
        {
          id: 5,
          name: 'e某某',
          age: 18,
          sex: '男',
          address: '左对齐...',
          description: '测试...',
        },
        {
          id: 6,
          name: 'f某某',
          age: 23,
          sex: '女',
          address: '左对齐...',
          description: '测试...',
        },
        {
          id: 7,
          name: 'g某某',
          age: 22,
          sex: '男',
          address: '左对齐...',
          description: '测试...',
        },
        {
          id: 8,
          name: 'a某某',
          age: 21,
          sex: '男',
          address: '左对齐...',
          description: '测试...',
        },
        {
          id: 9,
          name: 'b某某',
          age: 18,
          sex: '男',
          address: '左对齐...',
          description: '测试...',
        },
        {
          id: 10,
          name: 'c某某',
          address: '左对齐...',
          sex: '女',
          age: 18,
        },
        {
          id: 11,
          name: 'd某某',
          address: '左对齐...',
          sex: '男',
          age: 22,
        },
        {
          id: 12,
          name: 'e某某',
          address: '左对齐...',
          sex: '女',
          age: 23,
        },
        {
          id: 13,
          name: 'f某某',
          address: '左对齐...',
          sex: '男',
          age: 22,
        },
        {
          id: 14,
          name: 'g某某',
          address: '左对齐...',
          sex: '女',
          age: 20,
        },
      ],
      tableLoading: false,
      selectedItems: [],
      orderBy: {
        name: true,
        age: 'desc',
      },
    };
  },
  methods: {
    handleEdit(item) {
      console.log(item);
      this.$toast(`学生id:\b${item.id}, \b\b\b 学生姓名:\b${item.name}\b\b`);
    },
    onUpdateOrder(order){
       this.$toast(`name:\b${order.name}, \b\b\b age:\b${order.age}\b\b`);
    }
  },
};
</script>

<style lang='scss'>
@import url('//at.alicdn.com/t/font_2449846_m1f2230a1zk.css');
.box {
  box-sizing: border-box !important;
}
.table {
  box-sizing: border-box;
  table,
  tr,
  td,
  th,
  thead,
  tbody {
    padding: 0;
    margin: 0;
    border: none;
  }
  tr,
  td {
    padding: 0;
    margin: 0;
  }
}
</style>
