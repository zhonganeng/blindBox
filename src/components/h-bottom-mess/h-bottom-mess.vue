<template>
  <view class="content">
    <view v-for="item in list"
          :key="item.id">{{item.text}}</view>
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
          text: "联系客服",
        },
        {
          id: 3,
          text: "投诉举报",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.content {
  display: flex;
  justify-content: space-between;
  justify-items: center;
  view {
    border-left: 2px solid #000;
  }
}
</style>