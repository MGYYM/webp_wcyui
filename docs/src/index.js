import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import routes from './router';
import VantDoc from '@vant/doc';
Vue.use(VueRouter).use(VantDoc);
const router = new VueRouter({
  mode: 'hash',
  routes: routes(),
  scrollBehavior(to) {
    if (to.hash) {
      return { selector: to.hash };
    }

    return { x: 0, y: 0 };
  },
});
new Vue({
  el: '#app',
  mounted() {
    setTimeout(() => {
      // wait page init
      if (this.$route.hash) {
        const el = document.querySelector(this.$route.hash);
        if (el) {
          el.scrollIntoView({
            behavior: 'smooth',
          });
        }
      }
    }, 1000);
  },
  render: (h) => h(App),
  router,
});