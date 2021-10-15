<template>
  <view class="content">
		<view :class="{
				select: isSelect==0
			}"
					@click="linkPage(0)">我的纸条</view>
		<view :class="{
				select: isSelect==1
			}"
					@click="linkPage(1)">抽个对象</view>
		<view :class="{
				select: isSelect==2
			}"
					@click="linkPage(2)">成为红娘</view>
  </view>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {};
  },
  props: {
    isSelect: {
      type: Number,
      default: 1,
    },
  },
	computed: {
		...mapState({
			// 箭头函数可使代码更简练
			parameterId: state => state.app.parameterId
		})
	},
  methods: {
    linkPage(i) {
      let url = "";
      if (i === 0) {
        url = "/pages/MyNote/index";
      } else if (i === 1) {
        url = `/pages/index/index?id=${this.parameterId}`;
      } else if (i === 2) {
        url = "/pages/Matchmaker/index";
      }
			let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
			let curRoute = routes[routes.length - 1].route //获取当前页面路由
			if(i === 1){
				curRoute = curRoute + '?id=' + this.parameterId
			}
			if(url==='/'+curRoute){
				return;
			}
      uni.redirectTo({
        url,
      });
    },
  },
};
</script>

<style scoped lang="scss">
.content {
  display: flex;
  justify-content: space-between;
  padding: 60rpx 40rpx;
	padding-bottom: 40rpx;
  color: #000000;
  margin-bottom: 20rpx;
  font-weight: 700;
  view {
    flex: 1;
    text-align: center;
    position: relative;
    font-size: 28rpx;
    &.select {
      font-size: 32rpx;
    }
    &.select::before {
      content: "";
      position: absolute;
      left: 50%;
      bottom: -20rpx;
      width: 30rpx;
      height: 10rpx;
      margin-left: -15rpx;
      border-radius: 20rpx;
      background-color: #000000;
    }
  }
}
</style>