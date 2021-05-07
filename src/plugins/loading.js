/* eslint-disable */
import NLoading from '../components/feedback/loading/Loading.vue';

export default {
  install(Vue) {
    const constructor = Vue.extend(NLoading);
    const instance = new constructor();
    Vue.prototype.$showLoading = (msg) => {
      instance.msg = msg;
      instance.show = true;
    };
    Vue.prototype.$hideLoading = () => {
      instance.show = false;
    };
    instance.$mount();
    document.body.appendChild(instance.$el);
  },
}