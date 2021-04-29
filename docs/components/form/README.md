---
title: 表单
---
## Cascader 级联选择器
导航组件，可无限嵌套子菜单，支持横向和纵向。导航菜单一般配合路由实现页面跳转功能，在selected属性上使用v-model可实现数据绑定，也可以监听selected-change事件，菜单被点击时将抛出对应条目的name值。
<br></br>
<ClientOnly/>
  <n-cascader/>
</ClientOnly>
<br></br>
### 基础用法

```js
<Cascader
  placeholder="请选择"
  :cascaderSourced.sync="cascaderSourced"
  :cascaderSource="cascaderSource"
/>
source 数据结构如下
const cascaderSource = [
  {
    label: '一级a',
    value: '一级a',
    children: [
      {
        label: '二级a-a',
        value: '二级a-a',
        children: [
          { label: '三级a-a', value: '三级a-a' },
          { label: '三级a-b', value: '三级a-b' },
          { label: '三级a-c', value: '三级a-c' },
        ],
      },
      { label: '二级a-b', value: '二级a-b' },
      { label: '二级a-c', value: '二级a-c' },
    ],
  },
  {
    label: '一级b',
    value: '一级b',
    children: [
      { label: '二级b-a', value: '二级b-a' },
      { label: '二级b-b', value: '二级b-b' },
      { label: '二级b-c', value: '二级b-c' },
    ],
  },
  {
    label: '一级c',
    value: '一级c',
    children: [
      { label: '二级c-a', value: '二级c-a' },
      {
        label: '二级c-b',
        value: '二级c-b',
        children: [
          { label: '三级c-a', value: '三级c-a' },
          { label: '三级c-b', value: '三级c-b' },
          { label: '三级c-c', value: '三级c-c' },
        ],
      },
      { label: '二级c-c', value: '二级c-c' },
    ],
  },
];
```

### n-cascader Attributes


| 属性名   | 含义                                                         | 类型  | 必填 | 默认值 |
| -------- | ------------------------------------------------------------ | ----- | ---- | ------ |
| cascaderSource  | 级联选择器的数据源，格式较严格                               | Array | -    | -      |
| cascaderSourced | 当前选中的数据 value 值的集合，按层级次序排序，用 .sync 绑定 | Array | -    | -      |
| placeholder  | 占位文字                               | String | -    | -      |
<br></br>
## Datapicker 日期选择器
导航组件，可无限嵌套子菜单，支持横向和纵向。导航菜单一般配合路由实现页面跳转功能，在selected属性上使用v-model可实现数据绑定，也可以监听selected-change事件，菜单被点击时将抛出对应条目的name值。
<br></br>
<ClientOnly/>
  <n-datapicker/>
</ClientOnly>
<br></br>
### 基础用法
```vue
<NDatapicker 
 :defaultDate.sync="defaultDate" 
 :minScoped=" new Date('2000-3-20')" 
 :maxScoped=" new Date('2025-10-8')" 
 />
// ...
data(){
  return {
    defaultDate: new Date(),
  }
}
```
### n-datapicker Attributes


<table style="width: 100%;margin-bottom: 4em">
<thead>
  <tr style=" font-weight:bold;">
    <td>属性名</td>
    <td style="width:23em">含义</td>
    <td>类型</td>
    <td>必填</td>
    <td>默认值</td>
  </tr>
</thead>
<tbody>
  <tr>
    <td>defaultDate</td>
    <td>默认事件, sync绑定</td>
    <td>Date</td>
    <td>true</td>
    <td>-</td>
  </tr>
  <tr>
    <td>minScoped</td>
    <td>日期最小范围</td>
    <td>Date</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>maxScoped</td>
    <td>日期最大范围</td>
    <td>Date</td>
    <td>-</td>
    <td>-</td>
  </tr>
</tbody>
</table>
<br></br>

## Input 输入框
基础表单组件，支持v-model绑定和原生事件。
<br></br>
</br>
<ClientOnly/>
  <n-input/>
</ClientOnly>
</br>

### 基础用法
```vue
<n-input placeholder="请输入内容" v-model="value" />
<n-input prefix='i-user'/>
<n-input type="password" prefix='i-lock'/>
<n-input placeholder="禁用状态" disabled />
<n-input error="错误提示消息"/>
<n-input success="成功提示消息"/>
<n-input type="textarea"/>
```
### n-input Attributes

| 属性名         | 含义                 | 类型           | 必填 | 默认值 |
| -------------- | -------------------- | -------------- | ---- | ------ |
| value(v-model) | 输入框内容           | String         | 是   | -      |
| placeholder    | 提示信息             | String         | -    | -      |
| prefix         | 带有前缀图标的 input | String         | -    |        |
| disabled       | [状态]禁用           | Boolean        | -    | false  |
| error          | [状态]错误提示       | Boolean/String | -    | false  |
| success        | [状态]正确提示       | Boolean/String | -    | false  |



### n-input Events

| 事件名     | 含义                                   | 事件参数   | 参数类型 |
| ---------- | -------------------------------------- | ---------- | -------- |
| change     | 仅在输入框失去焦点或用户按下回车时触发 | 绑定值     | String   |
| input      | 在 Input 值改变时触发                  | 绑定值     | String   |
| pressEnter | 按 enter 时触发                        | pressEnter | String   |
| focus      | 在 Input 获得焦点时触发                | event      | Event    |
| blur       | 在 Input 失去焦点时触发                | event      | Event    |

