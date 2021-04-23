import Vue from 'vue';
import { TranslateUtil } from '../utils';

let el; let maxY; let maxX; let parentDom; let parentTop; let parentLeft; let directValue; let
  elTranslate;
const dis = { x: 0, y: 0 };
function init(value) {
  directValue = value;
  elTranslate = new TranslateUtil(el);
  // 获取拖动距离的上下限
  setTimeout(() => {
    parentDom = el.parentNode;
    maxY = parentDom.offsetHeight - el.offsetHeight;
    maxX = parentDom.offsetWidth - el.offsetWidth;
  });
}
function bindEvents() {
  el.addEventListener('mousedown', handleMousedown);
  window.addEventListener('mouseup', handleMouseUp);
}
function unbindEvents() {
  el.removeEventListener('mousedown', handleMousedown);
  window.removeEventListener('mouseup', handleMouseUp);
}
function handleMousedown(e) {
  parentTop = parentDom.getBoundingClientRect().top;
  parentLeft = parentDom.getBoundingClientRect().left;
  const rect = el.getBoundingClientRect();
  const left = rect.x;
  const top = rect.y;
  dis.x = e.pageX - left + parentLeft;
  dis.y = e.pageY - top + parentTop;
  window.addEventListener('mousemove', handleMove);
}
function handleMove(e) {
  let x; let
    y;
  // 判断是否超出父元素边界
  if (directValue.x) {
    x = e.pageX - dis.x;
    if (x < 0) { x = 0; }
    if (x > maxX) { x = maxX; }
  } else {
    x = elTranslate.getTranslate('x');
  }
  if (directValue.y) {
    y = e.pageY - dis.y;
    if (y < 0) { y = 0; }
    if (y > maxY) { y = maxY; }
  } else {
    y = elTranslate.getTranslate('y');
  }
  Vue.prototype.$eventBus.$emit('update:drag', { x, y });
  if (directValue.x) {
    elTranslate.setTranslateX(x);
  }
  if (directValue.y) {
    elTranslate.setTranslateY(y);
  }
}
function handleMouseUp() {
  window.removeEventListener('mousemove', handleMove);
}
/**
 *  - 作用与使用 : 绑定`v-drag`即可实现拖动, 拖动范围上限为父级元素
 *  - 指令value : {x:Boolean, y:Boolean}  可以配置单独开启x,y轴拖动
 *  - 外部获取拖动目标实时位置信息的方式 : ` $on('update:drag', 位置信息) `
 */
export default {
  inserted(ele, { value }) {
    if (!Vue.prototype.$eventBus) {
      Vue.prototype.$eventBus = new Vue();
    }
    el = ele;
    init(value);
    bindEvents();
  },
  update(ele, { value }) {
    init(value);
  },
  unbind() {
    unbindEvents();
  },
};