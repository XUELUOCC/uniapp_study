import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
	state:{
		hasLogin:false,
		userInfo:{},
		token:"",
		openId:"",
		path:"xxxxxx",
		registerUrl:"xxxxxxxx"
	},
	//相当于state的计算属性，讲state进行加工传给外界，针对原有的state，派生出新的状态，例如：将state中的数组arr重新进行map映射,返回一个新的状态，即新的数组
	//默认参数：state,getters(通过getters，可使用getters中的其他方法)
	//调用getters中的方法：this.$store.getters.func()--
	getters:{
		
	},
	//修改state的状态，同步操作，默认参数：state,需要传递的参数（自定义参数）
	//调用;this.$store.commit('方法名',14传递的参数)
	mutations:{
		setToken(state,value){
			state.token=value;
			loacalStorage.setItem('token',value)
		},
		setItem(state,{obj:value}){
			localStorage.setItem('obj',value)
		}
	},
	//目的是让mutations中的方法可在异步中使用，最后提交mutions，默认参数：context(上下文对象，相当于this)，payload(自定义挂载参数)
	//调用：this.$store.dispath('方法名'，{age:15自定义参数})
	actions:{
		
	},
	//模块化管理模式，vuex允许讲store分割成模块，每个模块都拥有自己的state,mutations,getters,actions,modules
	modules:{
		
	}
})
export default store
