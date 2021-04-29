<template>
  <div style="margin-top: 2em">
    <NUploader
      method="post"
      action="http://101.132.72.36:5100/api/upload"
      accept="image/*"
      name="imagefile"
      multiple
      :sizeLimit="1024 * 1024 * 2"
      :parse-response="parseResponse"
      :file-list.sync="fileList"
    >
      <n-button icon="i-upload">上传</n-button>
      <template #tips>
        <div style="font-size: 12px; margin-top: 1em">
          只能上传jpg/png文件，且不超过2mb
        </div>
      </template>
    </NUploader>
  </div>
</template>

<script>
import Vue from 'vue';
import plugins from '../../../src/plugins/plugin';
import NButton from '../../../src/components/basic/button/Button.vue';
import NUploader from '../../../src/components/other/upload/Uploader.vue';
Vue.use(plugins);

export default {
  components: {
    NButton,
    NUploader,
  },
  data() {
    return {
      fileList: [
        {
          name: 'xxx.jpg',
          url: 'https://images.yuanjin.tech/Fq-0ZPxpeREOWJ0Ch9HY9c4AAlSA',
        },
      ],
    };
  },
  methods: {
    parseResponse(res) {
      return JSON.parse(res).path;
    },
  },
};
</script>

<style lang='scss' >
@import url('//at.alicdn.com/t/font_2449846_m1f2230a1zk.css');
.tab-body {
  height: 10em;
}
</style>
