<template name="tabbar">
	<view class="tabbarContainer">
		<view class="content">
			<view class="tabbarLi" v-for="(item,index) in tabbarList" :key="item.index" @click="tabRouter(index)">
				<view class="tabbarLiTop">
					<image :src="item.icon" mode="heightFix"></image>
				</view>
				<view class="tabbarLiBottom">
					{{item.name}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"tabbar",
		data() {
			return {
				tabbarList:[
					{
						icon:require('@/static/c1.png'),
						name:'书架',
						url:'/pages/bookShelf/bookShelf'
					},
					{
						icon:require('@/static/c2.png'),
						name:'书城',
						url:'/pages/bookStore/bookStore'
					},
					{
						icon:require('@/static/c3.png'),
						name:'分类',
						url:'/pages/classify/classify'
					},
					{
						icon:require('@/static/c4.png'),
						name:'排行',
						url:'/pages/rankingList/rankingList'
					},
				]
			};
		},
		methods:{
			test(){
				console.log('ceshi')
			},
			tabRouter(index){
				console.log(index)
				let url=this.tabbarList[index].url
				console.log(url)
				uni.reLaunch({
					url:url
				})
			}
		}
	}
</script>

<style lang="scss">
.tabbarContainer{
	position: fixed;
	bottom: 0;
	z-index: 999;
	width: 100%;
	height:60px;
	border-top: solid 1upx #ccc;
	background-color: #fff;
	// border-top:1px solid #F8F8F8;
	// z-index:999;
	// border:1px solid red;
	.content{
		width:90%;
		height:100%;
		margin:0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.tabbarLi{
			width:20%;
			height:90%;
			// border:1px solid red;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			.tabbarLiTop{
				width:100%;
				height:55%;
				display: flex;
				justify-content: center;
				align-items: center;
				image{
					height:100%;
				}
			}
			.tabbarLiBottom{
				width:100%;
				height:45%;
				display:flex;
				justify-content: center;
				align-items: center;
				font-size:12px;
			}
		}
	}
}
</style>
