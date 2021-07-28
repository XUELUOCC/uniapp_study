<template>
	<view class="container">
		<view class="top">
			<view class="topContent">
				{{symbol}}
			</view>
			
		</view>
		<view class="bottom">
			<view class="card" v-for="(item,index) in symbolList" :key="item.index" @touchstart="getKeyword(index)" @touchend="upKeyWord">
				<view :class="[tipIndex==index ? 'cardContent clickCard': 'cardContent']" class="cardContent">
					{{item}}
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				symbol:'0',
				tipIndex:-1,
				symbolList:[
							'C','<-','','/',
							'7','8','9','*',
							'4','5','6','-',
							'1','2','3','+',
							'','0','.','='
				],
			}
		},
		methods: {
			//鼠标抬起
			upKeyWord(){
				// console.log('nnnn')
				//延迟你操作
				setTimeout(()=>{
					this.tipIndex=-1;
				},200)
				
			},
			getKeyword(index){
				// console.log(index)
				this.tipIndex=index;
				if(index!=0 && index!=1 && index!=2 && index!=3 && index!=7  && index!=11 && index!=15 && index!=19 && index!=18){
					if(parseInt(this.symbol)==0){
						this.symbol=this.symbolList[index];
					}else{
						this.symbol=this.symbol+this.symbolList[index];
					}
				}else{
					// console.log('aaa')
					switch(index){
						case 0:
							this.symbol='';
							break;
						case 1:
							this.symbol=this.symbol.slice(0,this.symbol.length-1);
							break;
						case 2:
							this.symbol=this.symbol+'%';
							break;
						case 3:
						 //    console.log('aaaa')
							// this.symbol=this.symbol+'/';
							// if(this.symbol.charAt(this.symbol.length-1)=='/'){
							// 	this.symbol=parseInt(this.symbol) +'/'
							// }
							if(this.symbol.toString().indexOf('/')==-1){
								this.symbol=this.symbol+'/';
							}
							if(this.symbol.charAt(this.symbol.length-1)!='/'){
								this.getEval(this.symbol)
							}
							break;
						case 7:
							// this.symbol=this.symbol+'*';
							// if(this.symbol.charAt(this.symbol.length-1)=='*'){
							// 	this.symbol=parseInt(this.symbol) +'*'
							// }
							if(this.symbol.toString().indexOf('*')==-1){
								this.symbol=this.symbol+'*';
							}
							if(this.symbol.charAt(this.symbol.length-1)!='*'){
								this.getEval(this.symbol)
							}
							break;
						case 11:
							// this.symbol=this.symbol+'-';
							// if(this.symbol.charAt(this.symbol.length-1)=='-'){
							// 	this.symbol=parseInt(this.symbol) +'-'
							// }
							if(this.symbol.toString().indexOf('-')==-1){
								this.symbol=this.symbol+'-';
							}
							if(this.symbol.charAt(this.symbol.length-1)!='-'){
								this.getEval(this.symbol)
							}
							break;
						case 15:
							if(this.symbol.toString().indexOf('+')==-1){
								this.symbol=this.symbol+'+';
							}
							if(this.symbol.charAt(this.symbol.length-1)!='+'){
								// console.log('buububub')
								this.getEval(this.symbol)
							}
							break;
					}
					if(index==18){
						if(this.symbol=='' || this.symbol==0){
							this.symbol='0.'
						}
					}
					if(index==19){
						// console.log(isNaN(parseInt(this.symbol.charAt(this.symbol.length-1))))
						if(isNaN(parseInt(this.symbol.charAt(this.symbol.length-1)))){
							this.symbol=this.symbol.slice(0,this.symbol.length-1)
						}else{
							console.log(this.symbol)
							// this.symbol=eval(this.symbol)
							this.getEval(this.symbol)
						}
					}
				}
			},
			getEval(str){
				// 12*12/2+2-4
				console.log(str)
				let arr=str.toString().split("");
				for (var i = 0; i < arr.length; i++) {
				    if(arr[i]=="*" || arr[i]=="/" || arr[i]=="+" ||arr[i]=="-"){ //如果是乘法或者除法的时候
				        arr[i-1]=arr[i-1]+",";
				        arr[i+1]=","+arr[i+1];
				    }
				}
				let newarr=arr.join('').split(','); 
				console.log(newarr)
				console.log('ssss')
				let numberStr=0;
				for(let j=0;j<newarr.length;j++){
					if(newarr[j]!=='*' && newarr[j]!='/' && newarr[j]!='+' && newarr[j]!='-'){
						newarr[j]=parseInt(newarr[j]) 
					}else{
				
					}	
				}
				console.log(newarr)
				let n1=0;
				let n2=0;
				let n3=0;
				let n4=0;
				for(let k=0;k<newarr.length;k++){
					if(newarr[k]=='*'){
						n1=n1+newarr[k-1]*newarr[k+1]
					}else if(newarr[k]=='/'){
						n2=n2+newarr[k-1]/newarr[k+1]
					}else if(newarr[k]=='-'){
						n3=n3+newarr[k-1]-newarr[k+1]
					}else if(newarr[k]=='+'){
						n4=n4+newarr[k-1]+newarr[k+1]
					}
				}
				numberStr=n1+n2+n3+n4;
				console.log(numberStr)
				this.symbol=numberStr
				return numberStr;
			},
		}
	}
</script>

<style>
	.container {
		width:100%;
		height:100%;
		backgorund-color:#f8f8f8;
		display:flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}
	
	.top{
		width:100%;
		height:45%;
		background-color:#3F536E;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.topContent{
		width:95%;
		height:95%;
		display: flex;
		justify-content: flex-end;
		align-items: flex-end;
		color:#fff;
		font-size:18px;
	}
	.bottom{
		width:100%;
		height:55%;
		background-color:#3B4144;
		display:flex;
		justify-content: space-between;
		flex-flow: wrap;
	}
/* 	.item{
		width:95%;
		height:20%;
		margin:0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	} */
	.card{
		flex:0 0 25%;	
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.cardContent{
		width:50px;
		height:50px;
		color:#fff;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	/*card的点击样式*/
	.clickCard{
		background-color:#333;
	}
</style>
