import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import toast from 'components/common/toast'
import store from "@/store/index"
import VueLazyload from 'vue-lazyload'

//懒加载图片
Vue.use(VueLazyload, {
  error: require('./assets/img/common/placeholderError.png'),
  loading: require('./assets/img/common/placeholder.png')
})
Vue.use(toast)
Vue.config.productionTip = false

//事件总线
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
