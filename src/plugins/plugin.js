/* eslint-disable */
import Toast from '../components/feedback/toast/Toast.vue';

let toastCache = null;
export default {
  install(vue, options) {
    vue.prototype.$toast = function (opt) {
      let propsData = opt;
      if (toastCache) {
        toastCache.handleClose();
      }
      if (typeof opt === 'string') {
        propsData = { content: opt };
      }
      const constructor = vue.extend(Toast);
      const instance = new constructor({
        propsData
      });
      // 用户点击关闭按钮, 这边需要清空缓存
      instance.$on('close', () => toastCache = null);
      instance.$mount();
      document.body.appendChild(instance.$el);
      toastCache = instance;
    };
  },
};
