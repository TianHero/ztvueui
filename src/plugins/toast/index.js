import Vue from 'vue';
import Toast from './toast';

function open(propsData) {
  const ToastComponent = Vue.extend(Toast);
  return new ToastComponent({
    el: document.createElement('div'),
    propsData // 这个是props
  });
}

export default {
  txt(opts) {
    const defaultOpts = {
      content: '', mask: false, direction: ''
    };
    const propsOpts = Object.assign(defaultOpts, opts);
    return open(propsOpts);
  }
};
