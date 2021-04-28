<template>
  <div>
    <n-input prefix="i-user" placeholder="请输入账号" />
    <n-input type="password" prefix="i-lock" placeholder="请输入密码" />
    <n-input placeholder="禁用状态" disabled />
    <n-input error="错误提示消息" />
    <n-input success="成功提示消息" />
    <n-input type="textarea" />
  </div>
</template>

<script>
import NInput from '../../../src/components/form/input/Input.vue';

export default {
  components: { NInput },
  data() {
    return {
    };
  },
};
</script>


<style scoped lang='scss'>
@import '//at.alicdn.com/t/font_2449846_m1f2230a1zk.css';
</style>