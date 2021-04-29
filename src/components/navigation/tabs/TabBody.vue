<template>
  <div class="tabs-body-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'NTabBody',
};
</script>

<style lang="scss" scoped>
@import '../../../styles/var.scss';
.tabs-body-container {
  background: lighten($color: $gray, $amount: 22%);
  border-radius: $base-radius;
}
</style>
