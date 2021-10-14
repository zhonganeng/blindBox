<template>
  <view class="content" @click="copyWX('KevinKEE_')">
		<view class="bgImg"></view>
		<h-status-top :title="data.title" />
		
    <h-navigation :isSelect="2" />
    <view class="body">
			<!-- <image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f809b672-cc4f-4e9a-8799-4167a19755f7/b1215314-9223-487e-94b6-8735788d3f46.png" mode="widthFix" style="width:100%"></image> -->
      <!-- <u-swiper :list="swiperList"
                border-radius="0"
                mode="none"></u-swiper>
      <view style="padding: 40rpx 0;"
            class="text">
        <view style="color: #888888;">
          成为红娘，即可拥有自己的专属海报后台！
          加入我们拯救单身狗的大军！
        </view>

        <view>
          当然，帮朋友介绍对象自己还能赚点生活费！！！
          <view style="color: #f00;">
            别人每次抽纸条或者购买红娘你都能有现金奖励！
            最高分佣80%（详细介绍去公众号：盲盒交友助手 ）
          </view>
        </view>

        <view style="width: 50%">
          但是，咱做这些不仅仅是为了钱
          还不是为国出力，提高结婚率！
          从而提高生育率，减慢老龄化！
          这么伟大的工作，一定要有点门槛！
        </view>

        <view>
          成为红娘，限时特价<text style="color: #f00;">9.9元</text>，快上车！！！
        </view>
      </view>
      <u-button style="background-color: #000;color:#fff;margin-top:40rpx;font-weight: 800;"
                :ripple="true">9.9元成为红娘</u-button> -->
    </view>
  </view>
</template>

<script>
import { mapState } from 'vuex'
export default {
	computed: {
		...mapState({
			// 箭头函数可使代码更简练
			data: state => state.app.data
		})
	},
  data() {
    return {
      swiperList: [
        {
          image: "https://cdn.uviewui.com/uview/swiper/1.jpg",
          title: "昨夜星辰昨夜风，画楼西畔桂堂东",
        },
      ],
    };
  },
  onLoad() {},
  methods: {
		copyWX(wxH) {
			// #ifdef H5
			const text = document.createElement('textarea');
			text.value = wxH;
			document.body.appendChild(text);
			text.select();
			document.execCommand('Copy');
			text.remove();
			//复制成功的回调函数
			uni.showToast({
				//提示
				title: '复制成功'
			});
			// #endif
		
			// #ifdef MP-WEIXIN
			wx.setClipboardData({
				data: wxH,
				success: function(res) {
				}
			});
			// #endif
		}
	},
};
</script>

<style scoped lang="scss">
.content {
	height: 100vh;
	position: relative;
	.bgImg {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		height: 3004rpx;
		width: 100vw;
		background: url(https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f809b672-cc4f-4e9a-8799-4167a19755f7/936d16c9-bcab-4d7c-bb05-10b270bde004.png);
		background-position: left top;
		background-repeat: no-repeat;
		background-size: 100% auto;
		animation: animatedBackground 20s linear infinite;
		animation-direction:alternate;
		// /* hi 浏览器，使用你的GPU */
		transform: translate3d(0, 0, 0);
	}
.body {
    .text {
      width: 92%;
      > view + view {
        margin-top: 60rpx;
      }
    }
  }
}
</style>
