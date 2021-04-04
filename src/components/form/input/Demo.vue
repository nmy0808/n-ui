<template>
  <div>
    <NInput :value="msg" />
  </div>
</template>

<script>
import NInput from './Input.vue';

export default {
  components: { NInput },
  data() {
    return {
      msg: 'hello',
    };
  },
};
</script>

<style >
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
