<template>
  <div class="n-loading" v-show="show">
    <div class="n-loading-wrap">
      <div class="n-loading-icon-wrapper">
        <i class="n-icon i-loading"></i>
      </div>
      <p class="n-loading-msg">{{ msg }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NLoading',
  data() {
    return {
      show: false,
      msg: '加载中...',
    };
  },
  mounted() {
    this.$body = document.body;
  },
};
</script>

<style lang="scss" scoped>
@import '//at.alicdn.com/t/font_2449846_ex1jr70sibe.css';
.n-loading {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  &-wrap {
    color: rgba(255, 255, 255, 0.781);
    background: rgba(0, 0, 0, 0.653);
    width: 8em;
    height: 8em;
    border-radius: 1em;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
  }
  &-icon-wrapper {
    width: 3em;
    height: 3em;
    position: absolute;
    left: 50%;
    top: 1.8em;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &-msg {
    font-size: 14px;
    position: absolute;
    left: 50%;
    bottom: 1.4em;
    transform: translateX(-50%);
  }
}

.n-icon {
  font-size: 30px !important;
  animation: turn 3s linear infinite;
}

@keyframes turn {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
</style>
