import Vue from 'vue';
import globalModal from './modal';

function open(propsData) {
  const ModalComponent = Vue.extend(globalModal);
  return new ModalComponent({
    el: document.createElement('div'),
    propsData
  });
}

export default {
  confirm(opts) {
    const defaultOpts = {
      title: '',
      content: '',
      type: 'confirm',
      color: '',
      leftCallback() { },
      rightCallback() { },
      closeShow: false,
      leftBtnTxt: '取消',
      rightBtnTxt: '确定'
    };
    const propsOpts = Object.assign(defaultOpts, opts);
    return open(propsOpts);
  },

  alert(opts) {
    const defaultOpts = {
      title: '', content: '', type: 'alert', color: '', callback() { }, closeShow: false, btnTxt: '我知道了'
    };
    const propsOpts = Object.assign(defaultOpts, opts);
    return open(propsOpts);
  }
};
