<template>
  <view class="content">
		<h-status-top :title="data.title" />
    <h-navigation :isSelect="0" />
    <view class="body">
      <switchTab />
      <view style="color: #999999;text-align: center;margin-top:40rpx;">我还没有放入过交友纸条</view>
      <!-- <view style="color: #999999;text-align: center;margin-top:40rpx;">我还没有抽取过交友纸条</view> -->
    </view>
  </view>
</template>

<script>
import { mapState } from 'vuex'
import switchTab from "./components/switch-tab";
export default {
	computed: {
		...mapState({
			// 箭头函数可使代码更简练
			data: state => state.app.data
		})
	},
  components: {
    switchTab,
  },
};
</script>

<style scoped lang="scss">
page {
  background-color: #f4f4f4;
}
.content {
  .body {
    padding: 0 20rpx;
  }
}
</style>