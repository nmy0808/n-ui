# nmy-ui


> 本组件库仅供学习交流，请勿在生产环境中使用

[官方文档](https://nmy0808.github.io/nmy-ui/)   

## 安装

克隆官方仓库或者使用 npm / yarn 安装

```
$ git clone https://github.com/nmy0808/nmy-ui.git

$ npm install nmy-ui
$ yarn add nmy-ui
```

## 使用

如果使用了 npm / yarn 安装，一般在 main.js 中如下配置：

```javascript
import Vue from 'vue'
import App from 'components/app.vue'
import { NmyUi } from "nmy-ui";
import "nmy-ui/dist/nui.css";

Vue.use(NmyUi);
new Vue({
  el: '#app',
  render: h => h(App)
})
```

以上代码便完成了 nmy-ui 的引入。需要注意的是，样式文件需要单独引入。

组件也可以单独引用, 像这样:
import { NButton, NDatapicker } from "nmy-ui";


## 特别提醒

使用 nmy-ui 时，您需要使用 border-box 盒模型，否则会影响样式。代码示例：

```css
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

如果您觉得还不错，请 star
