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
          @click="linkPage(2)">摆摊赚钱</view>
  </view>
</template>

<script>
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
  methods: {
    linkPage(i) {
      let url = "";
      if (i === 0) {
        url = "/pages/MyNote/index";
      } else if (i === 1) {
        url = "/pages/index/index";
      } else if (i === 2) {
        url = "/pages/Matchmaker/index";
      }
      uni.switchTab({
        url,
        fail: function (err) {
          console.log(err);
        },
      });
    },
  },
};
</script>

<style scoped lang="scss">
.content {
  display: flex;
  justify-content: space-between;
  padding: 20rpx 40rpx;
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