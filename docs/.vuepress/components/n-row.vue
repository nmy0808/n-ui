<template>
  <div>
    <p>基础布局</p>

    <div class="section">
      <n-row class="row">
        <n-col :xs="8" class="col">
          <div class="content">8</div>
        </n-col>
        <n-col :xs="8" class="col">
          <div class="content active">8</div>
        </n-col>
        <n-col :xs="8" class="col">
          <div class="content">8</div>
        </n-col>
      </n-row>
    </div>
    <br/>

    <p>栅格间隙</p>
    <div class="section">
      <n-row :gutter="10" class="row">
        <n-col :xs="8" class="col">
          <div class="content">8</div>
        </n-col>
        <n-col :xs="8" class="col">
          <div class="content active">8</div>
        </n-col>
        <n-col :xs="8" class="col">
          <div class="content">8</div>
        </n-col>
      </n-row>
    </div>
    <br/>

    <p>属性偏移</p>
     <div class="section">
      <n-row class="row" >
        <n-col :xs="4" class="col">
          <div class="content">4</div>
        </n-col>
        <n-col :xs="4" :offset="4"   class="col">
          <div class="content">4</div>
        </n-col>
        <n-col :xs="4" :offset="4"   class="col">
          <div class="content">4</div>
        </n-col>
      </n-row>
    </div>
    <div class="section">
      <n-row class="row" >
        <n-col :xs="4" class="col" :offset="4">
          <div class="content">4</div>
        </n-col>
        <n-col :xs="4" :offset="4" class="col">
          <div class="content">4</div>
        </n-col>
        <n-col :xs="4" :offset="4" class="col">
          <div class="content">4</div>
        </n-col>
      </n-row>
    </div>
  </div>
</template>

<script>
import NRow from '../../../src/components/layout/grid/Row.vue';
import NCol from '../../../src/components/layout/grid/Col.vue';

export default {
  components: { NRow, NCol },
  data() {
    return {};
  },
};
</script>


<style scoped lang='scss'>
@import '//at.alicdn.com/t/font_2449846_m1f2230a1zk.css';
* {
  box-sizing: border-box;
}
.section {
  margin-top: 1em;
  width: 100%;
}
.row {
  height:40px;
  .col {
    height: 100%;
    text-align: center;
    line-height: 40px;
    color: lightslategray;
    .content {
      background: #e6eef5;
      height: 100%;
      border-radius: 4px;
      &.active {
        background: lighten($color: #eef3f7, $amount: 1%);
      }
    }
  }
}
</style>