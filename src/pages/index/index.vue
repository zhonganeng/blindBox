<template>
  <view class="content">
    <h-navigation :isSelect="1" />
    <view class="body">
      <u-swiper :list="swiperList"></u-swiper>
      <h-bottom-mess />
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
  onLoad() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.content {
  .body {
    padding: 0 20rpx;
  }
}
</style>
