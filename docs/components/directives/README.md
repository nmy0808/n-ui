---
title: 自定义指令 
---
## v-drag 拖拽
可以实现元素拖拽功能, 不会超出父元素。
<ClientOnly>
<n-drag/>
</ClientOnly>
### 基础用法
```vue
...
  <div v-drag="{x:false, y:true}"></div>
...
<script>
export default {
	  mounted() {
    	this.$eventBus.$on('update:drag', p=>{
        this.x = p.x;
        this.y = p.y;
      })
    }
}
</script>
```

### v-drag 使用
| 作用与使用                         | 绑定`v-drag`即可实现拖动, 拖动范围上限为父级元素             |
| ---------------------------------- | ------------------------------------------------------------ |
| 指令value                          | `v-drag="{x:Boolean, y:Boolean}" ` 可以配置单独开启x,y轴拖动 |
| 外部获取拖动目标实时位置信息的方式 | `$on('update:drag', 位置信息)`                               |

