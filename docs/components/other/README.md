---
title: 其他 
---
## Carousel 走马灯
在有限空间内，循环播放同一类型的图片、文字等内容。
<ClientOnly>
<n-carousel/>
</ClientOnly>
### 基础用法
```vue
<n-carousel height="150px">
  <n-carousel-item v-for="item in 4" :key="item">
    <h1>{{ item }}</h1>
  </n-carousel-item>
</n-carousel>
```
### n-carousel Attributes

| 属性名        | 含义                                  | 类型    | 必填 | 可选 | 默认值 |
| ------------- | ------------------------------------- | ------- | ---- | ---- | ------ |
| height        | 走马灯的高度                          | String  | -    | -    | -      |
| initial-index | 初始状态激活的幻灯片的索引，从 0 开始 | String  | -    | -    | 0      |
| autoplay      | 是否自动切换                          | Boolean | -    | -    | true   |
| interval      | 自动切换的时间间隔，单位为毫秒        | Number  | -    | -    | 3000   |



### n-carousel Events

| 属性名 | 含义             | 回调参数     <div style="width:30em;"></div>                         |
| ------ | ---------------- | -------------------------------------- |
| change | 幻灯片切换时触发 | 目前激活的幻灯片的索引，原幻灯片的索引 |



### n-carousel Methods

| 方法名        | 含义               | 参数                                                         |
| ------------- | ------------------ | ------------------------------------------------------------ |
| setActiveItem | 手动切换幻灯片     | 需要切换的幻灯片的索引，从 0 开始；或相应 `n-carousel-item` 的 `name` 属性值 |
| prev          | 切换至上一张幻灯片 | -                                                            |
| next          | 切换至下一张幻灯片 | -                                                            |

### n-carousel-Item Attributes

| 属性名 | 含义                                        | 类型   | 必填 | 可选值 | 默认值 |
| ------ | ------------------------------------------- | ------ | ---- | ------ | ------ |
| name   | 幻灯片的名字，可用作 `setActiveItem` 的参数 | String | 是   | -      | -      |
<br></br>
## Uploader 上传
在有限空间内，循环播放同一类型的图片、文字等内容。
<ClientOnly>
<n-uploader/>
</ClientOnly>

### 基本使用
```vue
<n-uploader
  method="post"
  action="http://xxx.xxx.xx:5100/api/upload"
  accept="image/*"
  name="imagefile"
  multiple
  :sizeLimit="1024 * 1024 * 2"
  :parse-response="parseResponse"
  :file-list.sync="fileList"
>
  <n-button icon="i-upload">上传</n-button>
  <template #tips>
    <div>
      只能上传jpg/png文件，且不超过2mb
    </div>
  </template>
</n-uploader>
```

### n-uploader Attributes

| 属性名         | 含义     <div style="width:17em;"></div>            | 类型     | 必填 | 默认值      |
| -------------- | -------------------- | -------- | ---- | ----------- |
| action         | 必选参数，上传的地址 | String   | 是   | -           |
| accept         | 接受上传的文件类型   | String   | 是   | -           |
| name           | 上传的文件字段名     | Boolean  | 是   | -           |
| parse-response | 处理回调函数         | Function | 是   | -           |
| file-list      | 已上传文件列表       | Array    | 是   | -           |
| multiple       | 支持多文件上传       | Boolean  | 否   | false       |
| sizeLimit      | 限制文件大小         | Number   | 否   | 1024x1024x2 |
| tips           | 插槽,可用于提示      | Slot     | 否   | -           |



### n-uploader Events

| 属性名         | 含义   <div style="width:26.3em;"></div>       | 回调参数     |
| -------------- | ------------ | ------------ |
| parse-response | 处理回调函数 | xhr.response |

