<template>
  <div>
    <div class="wrapper" style="margin-top: 2em">
      <div class="move" v-drag="{ x: true, y: true }">move</div>
    </div>
    <div id="show">x:0,y:0</div>
  </div>
</template>

<script>
import { dragDirective } from '../../../src/directives';

export default {
  directives: { drag: dragDirective },
  data() {
    return {
    };
  },
  mounted() {
    this.$eventBus.$on('update:drag', (p) => {
      document.querySelector('#show').innerHTML = `x:${p.x},y:${p.y}`;
    });
  },
};
</script>

<style lang='scss' scoped >
@import url('//at.alicdn.com/t/font_2449846_m1f2230a1zk.css');
.wrapper {
  width: 400px;
  height: 400px;
  background: lighten($color: lightslategray, $amount: 42%);
  border-radius: 4px;
}

.move {
  user-select: none;
  width: 5em;
  height: 5em;
  display: flex;
  justify-content: center;
  cursor: move;
  align-items: center;
  background: lighten($color: lightslategray, $amount: 35%);
  border-radius: 4px;
}
</style>
