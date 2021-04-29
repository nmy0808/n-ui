---
title: 基础组件
---
## Icon 图标
提供一些常用图标集合。
<ClientOnly>
<n-icon/>
</ClientOnly>
### 基础用法
```vue
<n-icon icon="xxxx"/>
```
<br><br/>
## Button 按钮
基础组件，点击触发业务逻辑。
<ClientOnly>
  <n-button/>
</ClientOnly>
### 基础用法
```vue
<n-button>按钮</n-button>
<n-button icon="i-setup">按钮</n-button>
<n-button position="right" icon="i-setup">按钮</n-button>
<n-button disable>按钮</n-button>
<n-button primary>按钮</n-button>
<n-button loading>按钮</n-button>
```
### n-button Attributes

<table style="width: 100%">
<thead>
  <tr style="font-weight:bold;">
    <td>属性名</td>
    <td>含义</td>
    <td>类型</td>
    <td style="width:2em;">必填</td>
    <td>可选</td>
    <td style="width:3em;">默认值</td>
  </tr>
</thead>
<tbody >
  <tr>
    <td>icon</td>
    <td>icon 图标名</td>
    <td>String</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>position</td>
    <td>icon 位置</td>
    <td>String</td>
    <td>-</td>
    <td>left</td>
    <td>0</td>
  </tr>
  <tr>
    <td>loading</td>
    <td>loading 加载效果</td>
    <td>Boolean	</td>
    <td>-</td>
    <td>false</td>
    <td>true</td>
  </tr>
  <tr>
    <td>disable</td>
    <td>禁用</td>
    <td>Boolean	</td>
    <td>-</td>
    <td>-</td>
    <td>false</td>
  </tr>
  <tr>
    <td style="width:15em">danger / primary / gray/<div style="margin-top:0.5em">dark / normal </div></td>
    <td>按钮主题颜色</td>
    <td>Boolean	</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
</tbody>
</table>
<br><br/>
<br><br/>

## ButtonGroup 按钮组合
横向排列的按钮组合。
<ClientOnly>
  <n-button-group/>
</ClientOnly>

```vue
<n-button-group :border="false">
  <n-button>选项一</n-button>
  <n-button>选项二</n-button>
  <n-button>选项三</n-button>
  <n-button disable>选项四</n-button>
</n-button-group>
```
### n-button-group Attributes

<table style="width: 100%;margin-bottom: 4em">
<thead>
  <tr style=" font-weight:bold;">
    <td>属性名</td>
    <td style="width:20em">含义</td>
    <td>类型</td>
    <td>必填</td>
    <td>可选</td>
    <td>默认值</td>
  </tr>
</thead>
<tbody>
  <tr>
    <td>border</td>
    <td>是否显示内部边框</td>
    <td>Boolean</td>
    <td>-</td>
    <td>-</td>
    <td>true</td>
  </tr>
</tbody>
</table>

