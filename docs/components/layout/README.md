---
title: 布局
---
## Grid 网格布局
通过基础的24格分栏，快速构建网页布局。
<br></br>
<ClientOnly/>
  <n-row/>
</ClientOnly>
### 基础用法

```js
<n-row class="row"  :gutter="10" align="top" justify="space-between">
  <n-col :span="4" class="col" :offset="4">
    ...
  </n-col>
  <n-col :xs="4" :offset="4" >
    ...
  </n-col>
  <n-col :xs="{span:4,offset:4}">
    ...
  </n-col>
</n-row>
```
`xs` , `sm` 等属性可以直接传入对象: `:xs="{span:4,offset:4}"`
<br><br/>
### n-row Attributes

| 属性名  | 含义                                                         | 类型            | 必填 | 默认值 |
| ------- | ------------------------------------------------------------ | --------------- | ---- | ------ |
| gutter  | 栅格的间隙，单位为 px                                        | String , Number | -    | -      |
| align   | flex 布局下的垂直对齐方式：`top` `middle` `bottom`           | String          | -    | top    |
| justify | flex 布局下的水平排列方式：`start` `end` `center` `space-around` `space-between` | String          | -    | start  |

### n-col Attributes

| 属性名 | 含义                                                     | 类型                       | 必填 | 默认值 |
| ------ | -------------------------------------------------------- | -------------------------- | ---- | ------ |
| offset | 栅格左侧的间隔格数，间隔内不可以有栅格                   | number \| String           | -    | 0      |
| span   | 栅格占位格数，为 0 时相当于 `display: none`              | number \| String           | -    | -      |
| xs     | `<576px` 响应式栅格，可为栅格数或一个包含其他属性的对象  | object \| number \| String | -    | -      |
| sm     | `≥576px` 响应式栅格，可为栅格数或一个包含其他属性的对象  | object \| number \| String | -    | -      |
| md     | `≥768px` 响应式栅格，可为栅格数或一个包含其他属性的对象  | object \| number \| String | -    | -      |
| lg     | `≥992px` 响应式栅格，可为栅格数或一个包含其他属性的对象  | object \| number \| String | -    | -      |
| xl     | `≥1200px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | object \| number \| String | -    | -      |

## Container 布局容器
容器布局，可快速搭建页面的基本结构，需浏览器支持flex布局。在使用容器布局时，container组件的子组件只能是header，main，footer，sider或container，同时，上述子组件的父组件也只能是container。
<br></br>
<ClientOnly/>
  <n-container/>
</ClientOnly>

```vue
<n-layout>
  <n-header>header</n-header>
  <n-content>content</n-content>
  <n-footer>footer</n-footer>
</n-layout>
```
<ClientOnly/>
  <n-container2/>
</ClientOnly>

```vue
<n-layout>
  <n-header>header</n-header>
  <n-layout>
    <n-sider>sider</n-sider>
    <n-content>content</n-content>
  </n-layout>
  <n-footer>footer</n-footer>
</n-layout>
```
<ClientOnly/>
  <n-container3/>
</ClientOnly>

```vue
<n-layout>
  <n-sider>sider</n-sider>
  <n-layout>
    <n-header>header</n-header>
    <n-content>content</n-content>
    <n-footer>footer</n-footer>
  </n-layout>
</n-layout>
```
<br></br>
## Collapse 折叠面板
将内容区域折叠/展开。
<br></br>
<ClientOnly/>
  <n-collapse/>
</ClientOnly>
### 基本用法
```vue
<n-collapse v-model="collapseSelected" :single="true">
  <n-collapse-item name="1">
    <template #title> 新闻 </template>
    ...
  </n-collapse-item>
  <n-collapse-item name="2">
    <template #title> 财经 </template>
    ...
  </n-collapse-item>
  <n-collapse-item name="3">
    <template #title> 体育 </template>
    ...
  </n-collapse-item>
</n-collapse>
```
### n-collapse Attributes

| 属性名   | 含义                                                    | 类型    | 必填 | 默认值 |
| -------- | ------------------------------------------------------- | ------- | ---- | ------ |
| collapseSelected | 当前展开 item 的 name 组成的数组。v-model双向数据绑定。 | Array   | -    | []     |
| single   | 是否允许同时展开多个 item。                             | Boolean | -    | true   |



### n-collapse-item Attributes

<table style="width: 100%;margin-bottom: 4em">
<thead>
  <tr style=" font-weight:bold;">
    <td>属性名</td>
    <td style="width:25em">含义</td>
    <td>类型</td>
    <td>必填</td>
    <td>默认值</td>
  </tr>
</thead>
<tbody>
  <tr>
    <td>name</td>
    <td>item 的 name 属性，唯一且必填。</td>
    <td>String</td>
    <td>true</td>
    <td>-</td>
  </tr>
   <tr>
    <td>title</td>
    <td>标题插槽</td>
    <td>slot</td>
    <td>-</td>
    <td>-</td>
  </tr>
   <tr>
    <td>default</td>
    <td>列表项插槽</td>
    <td>slot</td>
    <td>-</td>
    <td>-</td>
  </tr>
</tbody>
</table>


