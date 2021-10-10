<template>
  <view class="content">
    <view :class="{
      isSelect: isSelect==0
    }"
          @click="clickSwitch(0)">我放入的纸条</view>
    <view :class="{
      isSelect: isSelect==1
    }"
          @click="clickSwitch(1)">我抽到的纸条</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      isSelect: 0,
    };
  },
  methods: {
    clickSwitch(i) {
      this.isSelect = i;
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  padding: 6rpx;
  height: 76rpx;
  line-height: 76rpx;
  border: 2rpx solid #000;
  border-radius: 6rpx;
  color: #000;
  .isSelect {
    background-color: #000;
    color: #fff;
    border-radius: 6rpx;
  }
  view {
    flex: 1;
    text-align: center;
  }
}
</style>