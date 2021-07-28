import request from '../utils/request.js'

// export default{
// 	getUserInfo: (data) => {
// 		return api.request('/api/user', 'POST', data) //接口地址
// 	},
// 	upload: (data) => {
// 		return api.request('/api/upload', 'POST', data, true) //上传接口地址
// 	},
// 	test: (data) => {
// 		return api.request('/api/test', 'GET', data) //接口地址
// 	}
// }
export function test(data) {
	return request({url: '/test', method:'POST', data});
}