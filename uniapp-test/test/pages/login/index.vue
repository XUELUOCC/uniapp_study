<template name="tabbar">
	 <view>
	         <!-- #ifdef MP-WEIXIN -->
	         <view >
	             <view>
	                 <view class='header'>
	                     <!-- <image src='../../static/img/wx_login.png'></image> -->
	                 </view>
	                 <view class='content'>
	                     <view>申请获取以下权限</view>
	                     <text>获得你的公开信息(昵称，头像、地区等)</text>
	                 </view>
	 
	                <button class='bottom' type='primary' open-type="getUserInfo" withCredentials="true" lang="zh_CN" @click="getUserInfo">
	                     授权登录
	                 </button>
	             </view>
	         </view>
	         <!-- #endif -->
	     </view>
</template>

<!--
2.1点击open-type 指定为 getUserInfo 类型的button,首先获取encryptedData和iv信息，
2.2接着success回调里面调用wx.login()获取code。
2.3将code发送给服务端换取openid和session_key
2.4获取openid成功回调之后将openid和2.1获取到的encryptedData和iv发送给服务端解析用户信息，执行登录成功的操作
-->
<script>
    export default {
        data() {
            return {
                userDetail:{},
				code:'',
            };
        },
		mounted(){
			// this.wxLogin(); //先获取code登录凭证
		},
        methods: {
			//获取登录凭证登录
			async wxLogin(){
				await uni.login({
				  provider: 'weixin',
				  success: wxRes=>{
					const {code}= wxRes
					console.log(wxRes)
					if(res.errMsg == "login:ok"){
					   this.code =res.code;
					 }
				  },
				  fail:e=>{
					this.$rules.ruleToastFun(
						{
						  title:'登录失败'
						}
					)
				  }
				})
			},
			//通过登录获取的code凭证进行授权
            getUserInfo(){
				//getUserProfile中的success方法会返回用户的比如头像，昵称之类的字段
				  uni.getUserProfile({
					desc: '获取授权',
					success:res=>{
					  //当成功时的逻辑
					  this.userDetail=res.userInfo;
					  console.log('成功授权')
					  console.log(res)
					},
					fail:e=>{
					  //失败时的逻辑
					  console.log('失败无法授权')
					  uni.showModal({
						 title:"授权用户信息失败！",
						 // 是否显示取消按钮，默认为 true
						 showCancel:false
						})
					}
				  })
				  this.wxLogin()
			}
        }
    }
</script>

<style lang="scss">
    .header {
            margin: 90rpx 0 90rpx 50rpx;
            border-bottom: 1px solid #ccc;
            text-align: center;
            width: 650rpx;
            height: 300rpx;
            line-height: 450rpx;
        }
    
        .header image {
            width: 200rpx;
            height: 200rpx;
        }
    
        .content {
            margin-left: 50rpx;
            margin-bottom: 90rpx;
        }
    
        .content text {
            display: block;
            color: #9d9d9d;
            margin-top: 40rpx;
        }
    
        .bottom {
            border-radius: 80rpx;
            margin: 70rpx 50rpx;
            font-size: 35rpx;
        }
</style>
