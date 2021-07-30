<template>
    <view class="home">
        <view class="content">
                <view @animationend="runend(index)" @animationstart="runstart(index)" v-for="(item,index) in packStyle" :key="index" class="envelope" :style="item">
                     
                </view>
             
        </view>
    </view>
</template>
 
<script>
    
export default {
    data() {
        return {
            packStyle: []
        };
    },
    onLoad() {
        // 随即生成红包
        this.createRedPack();
    },
    mounted() {
         
    },
    onReady() {
         
    },
    methods: {
        runstart(key){
            if(key===0){
                console.log('监听动画开始');
            }  
        },
        runend(key){
            if(key===this.packStyle.length-1){
                console.log('监听动画结束---下一波红包开始');
                this.createRedPack()
            }
        },
        createRedPack(){
            // 随机生成30个红包
            var initNumber = 0;
            for (var i = 0; i <60; i++) {
               let lefts = (Math.floor(Math.random()*5+5)); // 随机边距
               let delay = Math.floor(Math.random()*5+2); // 延迟时间
               initNumber+=lefts; // 确保唯一，不让红包出现重叠现象
               this.packStyle.push({
                   'left': initNumber+'%',
                   'top': lefts+'px',
                   'animation-delay': delay/2+'s'
               })
            }  
        }
    }
};
</script>
 
<style>
.home {
    width: 100%;
    height: 100%;
}
.content {
  position: relative;
  height: 100%;
  background: #fff;
  overflow: hidden;
}
.envelope {
    position: fixed;
    opacity: 0;
    animation: drops 1.8s cubic-bezier(.22,.22,.39,.26) 1;
    width: 60px;
    height: 60px;
    background: url('https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1349507038,1321784177&fm=26&gp=0.jpg') no-repeat;
    /* background-color: #007AFF; */
    background-size: 60px 60px;
}
@keyframes drops {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate3d(10px, 100vh, -10px);
  }
}
</style>