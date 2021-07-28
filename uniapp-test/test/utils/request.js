// @/utils/request.js

// import store from '@/store/index.js'

// const base_url = process.uniEnv.baseUrl
console.log('reqsss')
// console.log(process.uniEnv)
const base_url=process.uniEnv
console.log('aaa'+base_url)
const showToast = (title) => {
    uni.showToast({
        title: title,
        icon: 'none'
    })  
}
const token="WALIEBFADS V"
const request = (obj,toast={}) => {
	obj.url = obj.url || '';
	obj.method = obj.method || 'GET';
	obj.data = obj.data || {};
	obj.header = obj.header || 'application/json';
	obj.loading = obj.loading === false ? false : true;
	// let token = store.getters.token || ''; // 登录获得的 token
	// if (obj.loading) {
	// 	uni.showLoading({  
	// 		title:'加载中...',
	// 		mask: true
	// 	}) 
	// }
	return new Promise((resolve, reject) => {
		uni.request({
			url: base_url+obj.url,
			method: obj.method,
			data: obj.data,
			header: {
				'TOKEN': token,
				'Content-Type': obj.header
			},
			success: res => { // 服务器成功返回的回调函数
				// if (obj.loading) uni.hideLoading();
				if (res.statusCode === 200) {
					let result = res.data;
					if (result.code === 20000) { // 服务器自定义的code
						resolve(result);
						return;
					}else if(result.code === 40005){ // 服务器自定义的code
						store.commit('user/CLEAT_ALL'); // 清空token
						resolve(result);
						uni.redirectTo({
							url: '/pages/index/index'
						})
						uni.showModal({
						    showCancel: false,
						    content: '登录过期',
						    success: function (res) {
						    }
						});
						return;
					}else if(result.code === 50009){ // 服务器自定义的code
						showToast(result.msg);
						reject(result);
						return;
					}
					reject(result);
				} else { // 返回值非 200，强制显示提示信息
					showToast('[' + res.statusCode + '] 系统处理失败');
					reject('[' + res.statusCode + '] 系统处理失败');
				}
			},
			fail: (err) => { // 接口调用失败的回调函数
			console.log(err)
				if (obj.loading) uni.hideLoading();
				if (err.errMsg != 'request:fail abort') {
					showToast('连接超时，请检查您的网络。');
					reject('连接超时，请检查您的网络。');
				}
			}
		})
	})
}

export default request
