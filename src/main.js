import Vue from 'vue';
import p from '@hetao/market-ui';
import App from './App';
import router from './router';

// import plugins from './plugins/toast';
// import p from './plugins';

// Vue.use(plugins);
Vue.use(p);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
