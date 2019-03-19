import Toast from './toast';
import Modal from './modal';

const components = {
  ...Toast,
  ...Modal
};

// eslint-disable-next-line func-names
const install = function (Vue) {
  if (install.installed) return;
  // components.map(component => Vue.component(component.name, component))
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key]);
  });
  Vue.prototype.$toast = Toast;
  Vue.prototype.$modal = Modal;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const API = {
  install,
  ...components
};

export default API;
