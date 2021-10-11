<template>
  <view class="content">
    <h-status-top />

    <h-navigation :isSelect="1" />
    <view class="body">
      <u-swiper :list="swiperList"
                border-radius="20"
                indicator-pos="bottomLeft"
                interval="5000"></u-swiper>
      <sava-take />
      <bottom-mess @clickBottom="clickBottom" />
    </view>

    <u-popup v-model="popupShow"
             mode="bottom"
             border-radius="28">
      <view style="padding: 20rpx 40rpx;">
        <view class="popupTitle">
          <u-icon name="close"
                  color="#000"
                  size="28"
                  @click="popupShow=false"></u-icon>
          <view style="text-align: center;">
            <template v-if="popupItem.id!==1">
              <view class="title">长按二维码添加客服微信</view>
              <view class="describe"
                    style="font-size:24rpx;"
                    @click="copyWX">{{popupItem.describe}}</view>
            </template>
            <template v-else>
              <view class="title">{{popupItem.text}}</view>
            </template>
          </view>
          <view>
          </view>
        </view>

        <view class="popupContent">
          <template v-if="popupItem.id!==1">
            <image src="@/static/wx.jpg"
                   style="width:300rpx;height:300rpx;margin:40rpx 0;"
                   mode="aspectFit" />
          </template>
          <template v-else>
            <view class="notice">
              <view>这是一个盲盒交友游戏，你不知道会抽到谁的纸条，也不知道你的纸条将会被谁抽到。</view>
              <view>如果您需放入纸条，建议您认真填写，并留下有效的联系方式和照片，以便喜欢您的人能联系到您。为了让信息更加真实，抽放纸条时需支付一元钱，以提高参与门槛。</view>
              <view>温馨提示：所有纸条均来自网友，均属发布者自愿行为，我们无法保证所有纸条内容的真实性，<text style="color: #f00;">在添加好友时，请一定要仔细甄别，切勿轻易转账以防被骗</text>，本平台不承担任何法律责任。</view>
              <view>
                <view> <text style="color: #f00;">红娘须知：</text></view>
                <view>避免失联，建议您关注公众号【脱单盲盒助手】</view>
                <view>平台首页点底部“联系我们”关注！！！</view>
              </view>
            </view>
          </template>

        </view>
      </view>
    </u-popup>
  </view>
</template>

<script>
import bottomMess from "./components/bottom-mess";
import savaTake from "./components/sava-take";
export default {
  components: {
    bottomMess,
    savaTake,
  },
  data() {
    return {
      popupShow: false,
      popupItem: {
        id: 1,
        text: null,
      },
      swiperList: [
        {
          image: "https://cdn.uviewui.com/uview/swiper/1.jpg",
          title: "昨夜星辰昨夜风，画楼西畔桂堂东",
        },
        {
          image: "https://cdn.uviewui.com/uview/swiper/2.jpg",
          title: "身无彩凤双飞翼，心有灵犀一点通",
        },
        {
          image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          title: "谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳",
        },
      ],
    };
  },
  onLoad(options) {
    console.log(options);
  },
  methods: {
    clickBottom(item) {
      this.popupShow = true;
      this.popupItem = item;
    },
    copyWX() {
      // #ifdef H5
      const text = document.createElement("textarea");
      text.value = "zhongaaneng";
      document.body.appendChild(text);
      text.select();
      document.execCommand("Copy");
      text.remove();
      //复制成功的回调函数
      uni.showToast({
        //提示
        title: "复制成功",
      });
      // #endif

      // #ifdef MP-WEIXIN
      wx.setClipboardData({
        data: "zhongaaneng",
        success: function (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: "复制成功",
              });
            },
          });
        },
      });
      // #endif
    },
  },
};
</script>

<style>
page {
  height: 100vh;
  background-image: url(https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f809b672-cc4f-4e9a-8799-4167a19755f7/97e9d2f8-f275-46ce-9d53-6aa9e68eca23.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
<style scoped lang="scss">
.content {
  .body {
    padding: 0 20rpx;
  }
  .popupTitle {
    display: flex;
    justify-content: space-between;
    .title {
      font-size: 28rpx;
      font-weight: 700;
    }
  }
  .popupContent {
    display: flex;
    justify-content: center;
    .notice {
      margin: 40rpx 0;
      > view + view {
        margin-top: 28rpx;
      }
    }
  }
}
</style>
