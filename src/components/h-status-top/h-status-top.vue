<template>
  <view>
    <view class="status_bar">
      <!-- 这里是状态栏 -->
    </view>
    <view class="title">
      {{title!==""?title: "单身盲盒"}}
    </view>
  </view>
</template>

<script>
	export default {
		props: {
			title: {
				type: String
			}
		}
	}
</script>

<style lang="scss">
.title {
  height: 80rpx;
  line-height: 80rpx;
  padding-left: 40rpx;
  font-size: 24rpx;
}
.status_bar {
  height: var(--status-bar-height);
  width: 100%;
}
</style>