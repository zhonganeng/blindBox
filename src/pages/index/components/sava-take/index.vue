<template>
  <view class="content" :style="{
		'backgroundImage': `url(${data.boxBgImg===''||data.boxBgImg===undefined ? '../../../static/hezi.png' : data.boxBgImg})`
	}">
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
      <button style="background-color: #000;color: #fff;width: 40%;height: 60rpx;line-height: 60rpx;"
								size="mini"
								hover-class="okBtn"
                :ripple="true" @click="clickBtn(1)">放入1张纸条</button>
			<button style="background-color: #000;color: #fff;width: 40%;height: 60rpx;line-height: 60rpx;margin-top: 30rpx;"
								size="mini"
								hover-class="okBtn"
								:ripple="true" @click="clickBtn(2)">抽取1张纸条</button>
    </view>
  </view>
</template>

<script>
import { mapState } from 'vuex';
export default {
	computed: {
		...mapState({
			// 箭头函数可使代码更简练
			data: state => state.app.data
		})
	},
	methods: {
		clickBtn(index){
			this.$emit("clickBtn",index)
		}
	}
};
</script>

<style scoped lang="scss">
.content {
  position: relative;
  // padding: 40rpx 20rpx;
  border-radius: 20rpx;
  width: 584rpx;
  height: 584rpx;
  margin: 0 auto;
  margin-top: 40rpx;
  background-repeat: no-repeat;
  background-position: center;
	background-size: 100%;
  .btnBox {
    height: 100%;
		padding-bottom: 40rpx;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
		.okBtn{
			background-color: #413e3e !important;
		}
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