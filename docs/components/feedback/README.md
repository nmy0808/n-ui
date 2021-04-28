---
title: 反馈组件
---

## toast

用于交互反馈。
<br>
</br>
<ClientOnly/>
<toast/>
</ClientOnly>

### 基础用法

```js
import Vue from 'vue';
import { toast } from 'nmy-ui/plugins';

Vue.use(toast);

...
onClick()
{
  this.$toast({
    content: '<a href="#">这是一条消息提示,这是一条消息提示..</a>',
    duration: 2,
    closeBtn: '关闭',
    onClose: () => console.log('toast组件-关闭按钮回调'),
    position: 'bottom',
    enabledHtml: true,
  });
}
...

```

### toask Attributes

| 属性名      | 含义                                          | 类型             | 必填 | 默认值 |
| ----------- | --------------------------------------------- | ---------------- | ---- | ------ |
| content     | 提示内容                                      | strings          | -    | -      |
| duration    | 自动关闭的延时，单位秒。设为 0 时不自动关闭。 | Number \| String | -    | 3      |
| onClose     | 关闭时触发的回调函数                          | Function         | -    | -      |
| closeBtn    | 关闭按钮上的文字                              | String           | -    | ''     |
| enabledHtml | 提示内容支持html                              | Boolean          | -    | false  |
| position    | 组件显示位置：`top` `middle` `bottom`         | String           | -    | top    |



