
//微信小程序的登录
export function login(data){
	return new Promise((resolve, reject) => {
		uni.login({
			provider: 'weixin',
			success: res => {
				resolve(res)
			},
			fail: err => {
				reject(err)
			}
		});
	})
}
