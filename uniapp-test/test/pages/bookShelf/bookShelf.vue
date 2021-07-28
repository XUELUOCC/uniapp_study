<template>
	<view class="container">
		<view class="search">
			<uni-search-bar :radius=100 cancelButton="none" v-model="searchText" @confirm="search" @input="input" ></uni-search-bar>
		</view>
		<view class="content">
			<view class="contentBg">
				<view class="bookItem" v-for="(item,index) in list" :key="item.index">
					<view class="bookItemLeft">
						<image  mode="widthFix" src="../../static/c1.png"></image>
					</view>
					<view class="bookItemRight">
						<view class="bookTitleRight">
							<text>{{item.bookTitle}}</text>
						</view>
						<view class="bookSectionRight">
							<text>
								<text>{{item.bookSectionStatus}}</text>
								<text>{{item.bookSection}}</text>
								<text>{{item.bookSectionContent}}</text>
							</text>
						</view>
						<view class="bookStatusRight">
							<text>{{item.status}}</text>
						</view>
					</view>
				</view>
				<view class="bookAdd">
					<view class="bookAddLeft">
						<view class="bookAddContent">
							<view class="bookAddContentIcon">
								<uni-icons type="plusempty" size="30"></uni-icons>
							</view>
							
						</view>
					</view>
					<view class="bookAddRight">
						<text>添加你喜欢的小说</text>
					</view>
				</view>
			</view>
				
		</view>
		<button type="default" @click="testApi">测试</button>
	</view>
</template>

<script>
	import {login} from '@/api/api.js'
	export default {
		data() { 
			return {
				searchText:'',
				list:[
					{
						bookTitle:'白骨大圣',
						bookSectionStatus:'最新',
						bookSection:'第100章',
						bookSectionContent:'不死神国',
						status:'未读'
					},
					{
						bookTitle:'圣域',
						bookSectionStatus:'最新',
						bookSection:'第101章',
						bookSectionContent:'激战',
						status:'未读'
					},
					{
						bookTitle:'吞噬星空',
						bookSectionStatus:'最新',
						bookSection:'第199章',
						bookSectionContent:'星空',
						status:'未读'
					},
					{
						bookTitle:'万族之劫',
						bookSectionStatus:'最新',
						bookSection:'第200章',
						bookSectionContent:'宇宙之外',
						status:'未读'
					}
				],
			};
		},
		mounted(){
			// this.$refs.tabbarComponent.test()
		},
		methods:{
			search(){
				
			},
			input(){
				
			},
			test(){
				uni.navigateTo({
				    url: '/pages/index/index'
				});
			},
			testApi(){
				let params={
					username:'cc',
					password:'123456'
				}
				// console.log(test,getUserInfo)
				login(params).then((res)=>{
					console.log(res)
				})
			}
		}
	}
</script>

<style lang="scss">
.container{
	width:100%;
	height:100%;
	background-color: #F8F8F8;
	overflow: auto;
	.search{
		width:95%;
		height:40px;
		// margin:0px auto 10px;
		padding:10px;
		background-color:#fff;
		position:fixed;
		top:0;
		z-index:999;
		border-bottom:1px solid #f8f8f8;
		/deep/.uni-searchbar{
			padding:0;
			// background-color: #fff;
		}
		/deep/.uni-searchbar__box{
			background-color:#fff!important;
		}
	}
	.content{
		width:100%;
		height:100%;
		margin-top:65px;
		background-color: #fff;
		.contentBg{
			width:95%;
			height:auto;
			margin:0 auto;
			.bookItem{
				width:100%;
				height:120px;
				margin-bottom:10px;
				display:flex;
				justify-content: space-between;
				align-items: center;
				border-bottom:1px solid #F8F8F8;
				.bookItemLeft{
					width:30%;
					height:100%;
					display: flex;
					justify-content: center;
					align-items: center;
					image{
						width:100px;
					}
				}
				.bookItemRight{
					width:65%;
					height:100%;
					display: flex;
					justify-content: space-around;
					align-items: flex-start;
					flex-direction: column;
				}
			}
			.bookAdd{
				width:100%;
				height:120px;
				margin-bottom:10px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.bookAddLeft{
					width:30%;
					height:100%;
					display: flex;
					justify-content: center;
					align-items: center;
					.bookAddContent{
						width:100px;
						height:95%;
						border:1px solid #F8F8F8;
						box-shadow: 0px 2px 3px  #333;
						display: flex;
						justify-content: center;
						align-items: center;
						.bookAddContentIcon{
							width:20px;
							height:20px;
							display: flex;
							justify-content: center;
							align-items: center;
						}
					}
					
				}
				.bookAddRight{
					width:65%;
					height:100%;
					display: flex;
					justify-content: flex-start;
					align-items: center;
				}
			}
		}
	}
}

</style>
