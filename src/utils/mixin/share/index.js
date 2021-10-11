export default {
  created() {
    //#ifdef MP-WEIXIN
    wx.showShareMenu({
      withShareTicket: true,
      menus: ["shareAppMessage", "shareTimeline"],
    });
    //#endif
  },
  onShareAppMessage(res) {
    return {
      path:
        "/pages/index/index?id=" + 1,
      success(res) {
        // uni.showToast({
        //   title: "分享成功",
        // });
      },
      fail(res) {
        uni.showToast({
          title: "分享失败",
          icon: "none",
        });
      },
    };
  },
};
