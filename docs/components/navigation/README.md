---
title: 导航 
---
## pager 分页
当数据量较多时，使用分页器进行数据切换。
<ClientOnly>
<n-pager/>
</ClientOnly>
### 基础用法
```vue
<n-pager :total="50" :current.sync="curPage" />
```
### n-pager Attributes

| 属性名      | 含义                                     | 类型    | 必填 | 默认值 |
| ----------- | ---------------------------------------- | ------- | ---- | ------ |
| total       | 总页数，必填                             | Number  | 是   | -      |
| current     | 当前页数，必填，用 .sync 绑定            | Number  | 是   | -      |
| single-hide | 当只有一页时隐藏分页器，默认隐藏（true） | Boolean | 否   | true   |



### n-pager Events

| 属性名 <div style="width: 5em;"></div> | 含义   <div style="width: 19.8em;"></div>          | 回调参数<div style="width: 13em;"></div> |
| ------ | -------------- | -------- |
| change | 切换页码时触发 | 页码     |


<br><br/>
## tabs 标签
分隔内容上有关联的数据内容。
<ClientOnly>
  <n-tabs/>
</ClientOnly>
### 基础用法
```vue
<n-tabs v-model="selected" @tabClick="onTabClick">
  <n-tab-head>
    <n-button primary slot="tabBarExtraContent">按钮</n-button>
    <n-tab-title name="tab1">标签一</n-tab-title>
    <n-tab-title name="tab2">标签二</n-tab-title>
    <n-tab-title name="tab3" disabled>标签三</n-tab-title>
  </n-tab-head>
  <n-tab-body>
    <n-tab-pane name="tab1">内容1</n-tab-pane>
    <n-tab-pane name="tab2">内容2</n-tab-pane>
    <n-tab-pane name="tab3">内容3</n-tab-pane>
  </n-tab-body>
</n-tabs>
```
### n-tabs Attributes

| 属性名             | 含义                                     | 类型    | 必填 | 默认值 |
| ------------------ | ---------------------------------------- | ------- | ---- | ------ |
| selected           | 当前选中的标签名，可用.v-model双向绑绑定 | strings | 是   | -      |
| tabBarExtraContent | tab bar 上额外的元素                     | slot    | -    | -      |

### tab-head Attributes

| 属性名             | 含义                 | 类型 | 必填 | 默认值 |
| ------------------ | -------------------- | ---- | ---- | ------ |
| tabBarExtraContent | tab bar 上额外的元素 <div style="width: 19.8em;"></div>| slot | -    | -      |

### tab-title Attributes

| 属性名   | 含义         | 类型            | 必填 | 默认值 |
| -------- | ------------ | --------------- | ---- | ------ |
| name  <div style="width: 9em;"></div>    | title 的名称<div style="width: 14.5em;"></div> | String , Number| 是   | -      |
| disabled | 禁用         | Boolean         | 否   | false  |



### tab-pane Attributes

| 属性名 | 含义                                    | 类型            | 必填 | 默认值 |
| ------ | --------------------------------------- | --------------- | ---- | ------ |
| name <div style="width: 9em;"></div>   | title 的名称，唯一、必填且与 title 一致 | String , Number | 是   | -      |



### n-tabs Events

| 事件名   | 含义                    | 事件参数 | 参数类型 |
| -------- | ----------------------- | -------- | -------- |
| tabClick<div style="width: 9em;"></div>  | tab上的按钮被点击的事件<div style="width: 20.6em;"></div>  | event    | -        |
<br></br>
<br></br>

## Sticky 粘滞
当数据量较多时，使用分页器进行数据切换。
<ClientOnly>
<n-sticky/>
</ClientOnly>
### 基础用法
```vue
<n-sticky :distance="60">
  <div>....</div>
</n-sticky>
```


### n-sticky Attributes

| 属性名   | 含义                                         | 类型   | 必填 | 默认值 |
| -------- | -------------------------------------------- | ------ | ---- | ------ |
| distance | 粘滞位置距离窗口顶部的距离，单位 px，默认100 | Number | -    | 0      |
<br></br>
<br></br>

## NavMenu 菜单
当数据量较多时，使用分页器进行数据切换。
<ClientOnly>
<n-navmenu2/>
</ClientOnly>
<ClientOnly>
<n-navmenu/>
</ClientOnly>
### 基础用法
```vue
 <n-nav-menu v-model="selectedIndex" vertical>
  <n-menu-item index="1">
    <n-icon icon="xxx" />
    首页
  </n-menu-item>
  <n-sub-menu index="2">
    <template #title>
      <n-icon icon="xxx" />
      关于
    </template>
    <n-menu-item index="2-1">企业文化</n-menu-item>
    <n-menu-item index="2-2">开发团队</n-menu-item>
    <n-menu-item index="2-3">联系方式</n-menu-item>
    <n-sub-menu index="2-4">
      <template #title> 更多 </template>
      <n-menu-item index="2-4-1">更多1</n-menu-item>
      <n-menu-item index="2-4-2">更多2</n-menu-item>
      <n-menu-item index="2-4-3">更多3</n-menu-item>
    </n-sub-menu>
  </n-sub-menu>
  <n-menu-item index="3">
    <n-icon icon="xxx" />
    联系</n-menu-item
  >
</n-nav-menu>
```

### n-nav-menu Attributes

| 属性名         | 含义                                     | 类型    | 必填 | 默认值 |
| -------------- | ---------------------------------------- | ------- | ---- | ------ |
| selected-index | 默认选中子菜单的 index ，v-model双向绑定 | Array   | 是   | -      |
| multiple       | 是否支持多选                             | Boolean | 否   | false  |
| vertical       | 是否竖向导航                             | Boolean | 否   | false  |



### n-carousel-Item Attributes

| 属性名 | 含义                        | 类型   | 必填 | 可选值 | 默认值 |
| ------ | --------------------------- | ------ | ---- | ------ | ------ |
| index  | item 子菜单的唯一标志，必填 | String | 是   | -      | -      |

