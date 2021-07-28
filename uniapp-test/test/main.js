import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

//全局引入store
import store from './store/index.js'

//引用并设置环境变量
// import '.env.js'
// console.log('vvvv')


const app = new Vue({
    ...App,
	store
})
app.$mount()
