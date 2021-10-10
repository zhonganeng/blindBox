<template>
  <view class="content">
    <view v-for="item in list"
          :key="item.id"
          @click="clickBottom(item)">{{item.text}}</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          text: "玩家须知",
        },
        {
          id: 2,
          text: "联系我们",
          describe: "点击复制我的微信：zhongaaneng",
        },
        {
          id: 3,
          text: "投诉举报",
          describe: "点击复制我的微信：zhongaaneng",
        },
      ],
    };
  },
  methods: {
    clickBottom(id) {
      this.$emit("clickBottom", id);
    },
  },
};
</script>

<style scoped lang="scss">
.content {
  display: flex;
  justify-content: space-between;
  justify-items: center;
  width: 50%;
  margin: 40rpx auto;
  font-size: 24rpx;
  color: #000;
}
</style>