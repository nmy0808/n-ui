---
title: 视图 
---
## popover 标签
常用于展示提示信息。
<ClientOnly>
<n-popvoer/>
</ClientOnly>
### 基础用法
```vue
<n-popover trigger="hover" position="right">
  <template #content>
    <div>
      弹窗内容...
    </div>
  </template>
  <n-button>默认插槽</n-button>
</n-popover>
```
### n-popover Attributes

| 属性名         | 含义                             | 类型    | 可选值                      | 必填 | 默认值  |
| -------------- | -------------------------------- | ------- | --------------------------- | ---- | ------- |
| position       | 当前弹窗位于按钮方向             | String  | top , right , left , bottom | 否   | 'top'   |
| trigger        | 触发事件                         | String  | click , hover               | 否   | 'click' |
| content        | 弹窗内容元素                     | slot    | -                           | -    | -       |
| default        | 按钮内容                         | slot    | -                           | -    | -       |
| onlyOuterClose | 组件内点击任何元素都不会关闭弹窗 | Boolean | true,false                  | -    | false   |



### n-popover Events

| 属性名      | 含义             | 回调参数           |
| ----------- | ---------------- | ------------------ |
| change-show | 开关弹窗监听时间 | show, 当前开关状态 |


### n-pager Events

| 属性名 <div style="width: 5em;"></div> | 含义   <div style="width: 19.8em;"></div>          | 回调参数<div style="width: 13em;"></div> |
| ------ | -------------- | -------- |
| change | 切换页码时触发 | 页码     |


<br><br/>
## table 表格
展示行列数据。
<ClientOnly>
  <n-table/>
</ClientOnly>
### 基础用法
```vue
<n-table
  class="table"
  :data-source="dataSource"
  :selected-items.sync="selectedItems"
  :orderBy.sync="orderBy"
  :loading="tableLoading"
  height="300"
  checkable
  expended
>
  <n-table-column text="姓名" field="name" width="100px">
    <template slot-scope="scope">
      <a href="#">{{ scope.value }}</a>
    </template>
  </n-table-column>
  <n-table-column text="年龄" field="age" width="50px" />
  <n-table-column text="地址" field="xx" align="left" />
  <n-table-column text="操作">
    <template slot-scope="scope">
      <n-button @click="handle(scope.item)">xx</n-button>
      <n-button @click="handle(scope.item)">xx</n-button>
    </template>
  </n-table-column>
</n-table>
...
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
        ...
      ],
      tableLoading: false,
      selectedItems: [],
      orderBy: {
        name: true,
        age: 'desc',
      },
      tableLoading: false,
      selectedItems: [],
      orderBy: {
        name: true,
        age: 'desc',
      },
    };
  },
```
注意:  每一个单元格的`对齐方式`和`宽度`, 都可以单独配置。
      `@update:orderBy`的方式就可以监听排序更新。

### n-table Attributes

| 属性名        | 含义                                                         | 类型    | 必填                   | 默认值 |
| ------------- | ------------------------------------------------------------ | ------- | ---------------------- | ------ |
| columns       | 表格列的配置描述                                             | Array   | 是                     | -      |
| dataSource    | 数据数组                                                     | Array   | 是                     | -      |
| selectedItems | 选中数组 , 用sync绑定                                        | Array   | 如果需要选取功能(必填) | []     |
| orderBy       | 排序的受控属性，外界可用此控制列的排序，可设置为`desc`,`asc`,`true` | Object  | 否                     | -      |
| striped       | 斑马线样式                                                   | Boolean | 否                     | true   |
| bordered      | 是否展示外边框和列边框                                       | Boolean | 否                     | false  |
| numberVisible | 是否展示序号                                                 | Boolean | 否                     | false  |
| loading       | 加载中                                                       | Boolean | 否                     | false  |
| checkable     | 是否支持可选                                                 | Boolean | 否                     | fasle  |
| expended      | 支持展开                                                     | Boolean | 否                     | false  |
| description   | 展开详情                                                     | String  | 否                     | -      |
| height        | 表格高度                                                     | String  | 是                     | -      |

### n-table-column Attributes

| 属性名 | 含义                                                         | 类型   | 必填 | 默认值   |
| ------ | ------------------------------------------------------------ | ------ | ---- | -------- |
| text   | 表头标题                                                     | String | 否   | -        |
| field  | 字段                                                         | String | 否   | -        |
| width  | 单独配置单元格宽度, 不配置就是自适应                         | String | 否   | 自适应   |
| align  | 单独配置单元格对齐方式,可配置'left','center' 不配置就是居中对齐 | String | 否   | 'center' |

### n-table-column Scoped Slot

| name    | 说明                                           |
| ------- | ---------------------------------------------- |
| default | 自定义列的内容，参数为 { row, column, $index } |

