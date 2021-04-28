<template>
  <div>
    <div style="height:1em">
      <template v-if="cascaderSourced.length">
        {{ cascaderSourced }}
      </template>
    </div>
    <n-cascader
      style="margin-top: 1em"
      :cascaderSourced.sync="cascaderSourced"
      :cascaderSource="cascaderSource"
    />
  </div>
</template>

<script>
import NCascader from '../../../src/components/form/cascader/Cascader.vue';

export default {
  components: { NCascader },
  data() {
    return {
      cascaderSourced: [],
      cascaderSource: [
        {
          label: '一级a',
          value: '一级a',
          selected: false,
          children: [
            {
              label: '二级a-a',
              value: '二级a-a',
              children: [
                {
                  label: '三级a-a',
                  value: '三级a-a',
                },
                {
                  label: '三级a-b',
                  value: '三级a-b',
                },
                {
                  label: '三级a-c',
                  value: '三级a-c',
                },
              ],
            },
            {
              label: '二级a-b',
              value: '二级a-b',
            },
            {
              label: '二级a-c',
              value: '二级a-c',
            },
          ],
        },
        {
          label: '一级b',
          value: '一级b',
          children: [
            {
              label: '二级b-a',
              value: '二级b-a',
            },
            {
              label: '二级b-b',
              value: '二级b-b',
            },
            {
              label: '二级b-c',
              value: '二级b-c',
            },
          ],
        },
        {
          label: '一级c',
          value: '一级c',
          children: [
            {
              label: '二级c-a',
              value: '二级c-a',
            },
            {
              label: '二级c-b',
              value: '二级c-b',
              children: [
                {
                  label: '三级c-a',
                  value: '三级c-a',
                },
                {
                  label: '三级c-b',
                  value: '三级c-b',
                },
                {
                  label: '三级c-c',
                  value: '三级c-c',
                },
              ],
            },
            {
              label: '二级c-c',
              value: '二级c-c',
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang='scss' >
@import url('//at.alicdn.com/t/font_2449846_m1f2230a1zk.css');
</style>
