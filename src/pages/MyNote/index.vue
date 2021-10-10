<template>
  <view class="content">
    <h-navigation :isSelect="0" />
    <view class="body">
      <switchTab />
      <view style="color: #999999;text-align: center;margin-top:40rpx;">我还没有放入过交友纸条</view>
      <!-- <view style="color: #999999;text-align: center;margin-top:40rpx;">我还没有抽取过交友纸条</view> -->
    </view>
  </view>
</template>

<script>
import switchTab from "./components/switch-tab";
export default {
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