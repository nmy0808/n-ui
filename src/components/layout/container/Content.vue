<template>
  <div class="content-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'NContent',
};
</script>

<style lang="scss" scoped>
.content-container {
  flex-grow: 1;
}
</style>
