<template>
  <div id="app">
    <div class="box-item">
      <h2>基础</h2>
      <p>基础表单组件，支持v-model绑定和原生事件。</p>
      <n-button></n-button>
      <n-button icon="i-search">按钮按钮</n-button>
      <n-button @click="handleClick" position="right" icon="i-setup">
        按钮
      </n-button>
      <n-button-group>
        <n-button icon="i-arrowleft">前进</n-button>
        <n-button>随便</n-button>
        <n-button icon="i-arrowright" position="right">后退</n-button>
      </n-button-group>
      <n-button-group>
        <n-button icon="i-arrowleft">前进</n-button>
        <n-button icon="i-arrowright" position="right">后退</n-button>
      </n-button-group>
      <n-button icon="i-arrowright" :loading="true" position="right"
        >后退</n-button
      >
      <n-button
        icon="i-arrowright"
        :loading="loading"
        position="left"
        @click="loading = !loading"
        >提交</n-button
      >
    </div>
    <div class="box-item">
      <h2>Iput 输入框</h2>
      <p>基础表单组件，支持v-model绑定和原生事件。</p>
      <NInput placeholder="请输入内容" v-model="inputValue" />
      <NInput prefix="i-user" placeholder="请输入用户名" />
      <NInput prefix="i-lock" type="password" placeholder="请输入密码" />
      <NInput placeholder="禁用状态" disabled />
      <NInput error="错误提示消息" placeholder="错误状态" />
      <NInput success="成功提示消息" placeholder="正确状态" />
      <NInput type="textarea" placeholder="请输入" />
    </div>
  </div>
</template>
<script>
import NButton from '@/components/Button.vue';
import NButtonGroup from '@/components/ButtonGroup.vue';
import NInput from '@/components/form/input/Input.vue';

export default {
  components: { NButton, NButtonGroup, NInput },
  data() {
    return {
      loading: false,
      inputValue: '222',
    };
  },
  methods: {
    handleClick() {
      console.log(111);
    },
  },
};
</script>
<style lang="scss">
@import '~@/styles/global.scss';
.box-item {
  width: 80%;
  padding: 20px;
}
</style>
