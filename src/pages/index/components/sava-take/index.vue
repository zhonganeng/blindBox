<template>
  <view class="content">
    <!-- <image src="@/static/nan.png"
           style="height: 160rpx;width:100%;borderRadius: 20rpx 20rpx 0 0;" />
    <view class="cover">
      <image src="@/static/nanT.png"
             style="width:100%;"
             mode="aspectFit" />
    </view> -->
    <!-- <view class="btn">
      <view class="box">
        <u-button style="background-color: #2879fe;color:#fff;width:100%;"
                  :ripple="true"
                  size="medium">存 1 张纸条</u-button>
      </view>
      <view class="box">
        <u-button style="background-color: #000;color:#fff;width:100%;"
                  :ripple="true"
                  size="medium">取 1 张纸条</u-button>
      </view>
    </view> -->
    <view class="btnBox">
      <u-button style="background-color: #000;color: #fff;margin-bottom:40rpx;"
                :ripple="true"
                size="medium">放入1张纸条</u-button>
      <u-button style="background-color: #000;color: #fff;margin-bottom:40rpx;"
                :ripple="true"
                size="medium">抽取1张纸条</u-button>
    </view>
  </view>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.content {
  position: relative;
  // padding: 40rpx 20rpx;
  border-radius: 20rpx;
  width: 600rpx;
  height: 600rpx;
  margin: 0 auto;
  margin-top: 40rpx;
  background-image: url("@/static/hezi.png");
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.8;
  .btnBox {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }
  // .cover {
  //   width: 200rpx;
  //   position: absolute;
  //   top: -30rpx;
  //   left: 0;
  //   right: 0;
  //   margin: 0 auto;
  // }
  // .btn {
  //   display: flex;
  //   flex-direction: column;
  //   padding: 40rpx 20rpx;
  //   margin-top: 220rpx;
  //   // margin-left: 20rpx;
  //   // margin-right: 20rpx;
  //   // background-color: #fff;
  //   border-radius: 20rpx;
  //   .box {
  //     flex: 1;
  //     padding: 0 20rpx;
  //     &:nth-child(1) {
  //       // margin-right: 20rpx;
  //     }
  //     &:nth-child(2) {
  //       margin-top: 40rpx;
  //     }
  //   }
  // }
}
</style>