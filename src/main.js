import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import "vue-parallax-view/dist/vue-parallax-view.css";
import VueParallaxView from "vue-parallax-view"
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLocalStorage from 'vue-localstorage'

Vue.use(VueLocalStorage,{bind: true})
Vue.use(VueAxios, axios)
Vue.use(VueParallaxView)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
