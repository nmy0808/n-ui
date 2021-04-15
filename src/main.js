import Vue from 'vue';
import plugin from '@/plugins/plugin';
import { clickOutside } from '@/directives/';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(plugin);
Vue.directive({ 'click-outside': clickOutside });
new Vue({
  render: (h) => h(App),
}).$mount('#app');
