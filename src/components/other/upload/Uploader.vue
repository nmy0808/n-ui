<template>
  <div class="uploader-container">
    <div @click="onClickUpload">
      <slot></slot>
    </div>
    <div ref="temp" style="width: 0; height: 0; overflow: hidden"></div>
    <ul v-if="fileList.length" class="uploader-items">
      <li v-for="it in fileList" :key="it.tempId">
        <n-icon v-if="it.status === 'done'" icon="i-success" class="success" />
        <n-icon
          v-else-if="it.status === 'uploading'"
          icon="i-loading"
          class="turn loading"
        />
        <n-icon v-else icon="i-error" class="error" />
        <img v-if="it.status === 'fail'" :src="defaultImg" />
        <img v-else :src="it.url" />
        <div class="upload-file-name">{{ it.name }}</div>
        <div>
          <n-icon @click.native="onDeleteFile(it)" icon="i-close"></n-icon>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getId } from '../../../utils';
import NIcon from '../../basic/icon/Icon.vue';
import defaultImg from '.../../../public/default_img.png';

export default {
  components: { NIcon },
  props: {
    sizeLimit: {
      type: Number,
      default: 1024 * 1024 * 2,
    },
    action: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    method: {
      type: String,
      required: true,
    },
    accept: {
      type: String,
      default: 'image/*',
    },
    parseResponse: {
      type: Function,
      required: true,
    },
    fileList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      defaultImg,
      tempDom: null,
      curId: null,
    };
  },
  methods: {
    onDeleteFile(file) {
      const fileList = this.fileList.filter((it) => it !== file);
      this.$emit('update:fileList', fileList);
    },
    onClickUpload() {
      // 创建Input并添加到temp元素里
      const oInput = this.createInputElement();
      // 给Input添加事件-如果选择了文件就会触发自动上传
      this.bindInputEvent(oInput);
      // 触发Input
      oInput.click();
    },
    createInputElement() {
      const oInput = document.createElement('input');
      oInput.type = 'file';
      oInput.multiple = 'true';
      oInput.accept = this.accept;
      this.tempDom.appendChild(oInput);
      return oInput;
    },
    bindInputEvent(oInput) {
      oInput.addEventListener('change', async () => {
        const { files } = oInput;
        oInput.remove();
        for (let i = 0; i < files.length; i += 1) {
          const file = files[i];
          // 获取当前文件的信息
          const { name, size, type } = file;
          // 创建加载状态的file放入fileList
          this.curId = getId(8);
          await this.$emit('update:fileList', [
            ...this.fileList,
            {
              name,
              size,
              type,
              tempId: this.curId,
              status: 'uploading',
            },
          ]);
          //
          const formData = new FormData();
          formData.append(this.name, file);
          await this.sendData(formData)
            .then((res) => {
              this.success(res);
            })
            .catch((err) => {
              this.error(err);
            });
        }
      });
    },
    success(res) {
      // 解析返回的字符串, 该解析函数由用户配置, 最终获取图片url
      const url = this.parseResponse(res);
      // 页面展示该图片
      this.url = url;
      // 更新上传记录
      // fileId
      let copy = JSON.parse(JSON.stringify(this.fileList));
      copy = copy.map((file) => {
        if (file.tempId === this.curId) {
          return { ...file, url, status: 'done' };
        }
        return file;
      });
      this.$emit('update:fileList', copy);
    },
    error(res) {
      // 更新上传记录
      // fileId
      let copy = JSON.parse(JSON.stringify(this.fileList));
      copy = copy.map((file) => {
        if (file.tempId === this.curId) {
          return { ...file, status: 'fail', message: res };
        }
        return file;
      });
      this.$emit('update:fileList', copy);
    },
    sendData(formData) {
      const { size } = this.fileList.find((file) => file.tempId === this.curId);
      return new Promise((ok, err) => {
        if (size > this.sizeLimit) {
          err(new Error(`文件大小不能超出${this.sizeLimit / 1024 / 1024}mb`));
          return;
        }
        const xhr = new XMLHttpRequest();
        xhr.open(this.method, this.action);
        xhr.onload = () => {
          ok(xhr.response);
        };
        xhr.onerror = () => {
          err(new Error('上传失败啦!!!'));
        };
        xhr.send(formData);
      });
    },
    initRefs() {
      this.tempDom = this.$refs.temp;
    },
    setIdAndStatusToFileList() {
      const list = this.fileList.map((it) => ({
        ...it,
        tempId: it.tempId || getId(8),
        status: 'done',
      }));
      this.$emit('update:fileList', list);
    },
  },
  mounted() {
    this.setIdAndStatusToFileList();
    this.initRefs();
  },
};
</script>

<style lang="scss" scoped>
.uploader-items {
  padding: 1em 0;
  list-style: none;
  color: #999;
  font-size: 14px;
  li {
    display: flex;
    align-items: center;
    height: 36px;
    width: 300px;
    transition: 0.2s;
    border-radius: 4px;
    padding: 0 0.5em;
    cursor: pointer;
    background: white;
    &:hover {
      background: #f3f3f4;
      color: #3d60fa;
    }
    img {
      width: 20px;
      height: 20px;
      margin: 0.5em;
    }
    .upload-file-name {
      margin-right: auto;
      width: 78%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .n-icon {
      font-size: 12px;
    }
    .success {
      color: #75c345;
    }
    .loading {
      color: #999;
    }
    .error {
      color: #e15a42;
    }
  }
  .turn {
    animation: turn 2s linear infinite;
  }
  @keyframes turn {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
}
</style>