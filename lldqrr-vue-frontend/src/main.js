import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import { routes } from './routes';
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import 'material-components-web/dist/material-components-web.min.css'

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueMaterial);

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app');
