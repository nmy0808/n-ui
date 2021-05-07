---
title: 反馈组件
---

## toast 插件

用于交互反馈。
<br>
</br>
<ClientOnly/>
<toast/>
</ClientOnly>

### 基础用法

```js
import Vue from 'vue';
import { plugins } from 'nmy-ui';
Vue.use(plugins.toast);
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

<br/>  
<br/>  
<br/>  

## message 插件

用于消息提示。
<br>
</br>
<ClientOnly/>
<n-message/>
</ClientOnly>

### 基础用法

```js
import Vue from 'vue';
import { plugins } from 'nmy-ui';
Vue.use(plugins.message);
...
<n-button @click="onClick">点击</n-button>
...
methods: {
  onClick() {
    this.$message(
      { 
        content: '消息提示', 
        duration: '3000',  // 组件显示总时长	
        success: true,     // 主题
        container: 父容器,  // 默认body
      }
    );
  },
    ...
},
```



### message Attributes

| 属性名                              | 含义                                           | 类型             | 必填 | 默认值  |
| ----------------------------------- | ---------------------------------------------- | ---------------- | ---- | ------- |
| duration                            | 组件显示总时长                                   | String \| Number | 否   | 2000    |
| container                           | 该组件的父级容器, 组件始终居中父容器, body除外 | Dom              | 否   | Body    |
| content                             | 显示内容                                       | String           | 是   | -       |
| primary \| success \| danger\| warn | 组件主题                                       | Boolean          | 否   | primary |


### message Events

| 属性名  | 含义           | 回调参数 |
| ------- | -------------- | -------- |
| onClose | 组件结束时回调 | -        |

<br></br>

