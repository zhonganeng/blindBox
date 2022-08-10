<template>
 <view class="contentBox">
	 <u-popup :show="show" :mode="mode" :round="10" :zIndex="zIndex">
	   <view class="content" :style="{
	     width
	   }">
	     <view class="titleBox">
	       <view class="title">{{ title }}</view>
	       <u-icon name="close" @click="$emit('close')"></u-icon>
	     </view>
	     <view class="body">
	       <slot></slot>
	     </view>
	   </view>
	 </u-popup>
 </view>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title:{
      type: String,
      default: "标题"
    },
    zIndex:{
      type: String,
      default: "10075"
    },
    mode:{
      type: String,
      default: "center"
    },
    width:{
      type: String,
      default: "600rpx"
    }
  }
}
</script>

<style lang="scss" scoped>
	.contentBox{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
	}
.content{
  padding: 20rpx 40rpx;
  box-sizing: border-box;
  .titleBox{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title{
      font-weight: 800;
    }
  }
  .body{
    padding-top: 40rpx;
  }
}
</style>