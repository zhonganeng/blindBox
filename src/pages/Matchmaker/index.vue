<template>
  <view class="content">
		<h-status-top />
		
    <h-navigation :isSelect="2" />
    <view class="body">
      <u-swiper :list="swiperList"
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
                :ripple="true">9.9元成为红娘</u-button>
    </view>
  </view>
</template>

<script>
export default {
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
  methods: {},
};
</script>

<style scoped lang="scss">
.content {
  .body {
    padding: 0 20rpx;
    .text {
      width: 92%;
      > view + view {
        margin-top: 60rpx;
      }
    }
  }
}
</style>
