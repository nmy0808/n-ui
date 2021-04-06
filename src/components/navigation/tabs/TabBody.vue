<template>
  <div class="tabs-body-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabsBody',
};
</script>

<style lang="scss" scoped>
.tabs-body-container {
  background: #f5f5f5;
}
</style>
