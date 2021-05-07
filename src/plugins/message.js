/* eslint-disable */
import NMessage from '../components/feedback/message/Message.vue';


let cur = null;
function install(Vue) {
  Vue.prototype.$message = (options = {}) => {
    cur && cur.remove();
    const wrap = options.container || document.body;
    const Constructor = Vue.extend(NMessage);
    const instance = new Constructor({
      propsData: {
        ...options,
        isBody: wrap.tagName === 'BODY'
      }
    });
    instance.$mount();
    wrap.appendChild(instance.$el);
    cur = instance.$el;
  }
}
const plugin = { install };
export default plugin;