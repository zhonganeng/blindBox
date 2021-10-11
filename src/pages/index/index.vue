<template>
  <view class="content">
		<view class="bgImg"></view>
   <view class="BoxBody">
		 
		 <h-status-top :title="data.title" />
		 <h-navigation :isSelect="1" />
		 <view class="body">
		   <u-swiper :list="data.banner"
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
  </view>
</template>

<script>
import bottomMess from "./components/bottom-mess";
import savaTake from "./components/sava-take";
import { mapState } from 'vuex'
export default {
  components: {
    bottomMess,
    savaTake,
  },
	onShareTimeline(){
		return {
			title: this.data.shareText
		}
	},
	onShareAppMessage() {
	  return {
	    title: this.data.title,
	    path: `/pages/index/index?id=${this.parameterId}`,
	    success(res) {
	    },
	    fail(res) {
	      uni.showToast({
	        title: "分享失败",
	        icon: "none",
	      });
	    },
	  };
	},
	computed: {
		...mapState({
			// 箭头函数可使代码更简练
			parameterId: state => state.app.parameterId,
			data: state => state.app.data
		})
	},
  data() {
    return {
			vip_diy:{
			},
      popupShow: false,
      popupItem: {
        id: 1,
        text: null,
      },
    };
  },
  onLoad(options) {
		this.$store.commit("setParameterId", options.id=== "" ? "" : options.id)
		this.getInitData();
  },
  methods: {
		async getInitData(){
			// let _this = this;
			// if(this.parameterId!==undefined){
			// 	const db = uniCloud.database()
			// 	 let res = await db.collection('vip_diy').where({
			// 	   id: Number(this.parameterId)
			// 	 }).get().then((res)=>{
			// 		// res 为数据库查询结果
			// 		// this.vip_diy = res.result.data[0];
			// 		_this.$store.commit("app/setData",res.result.data[0])
			// 	}).catch((err)=>{
			// 		// err.message 错误信息
			// 		// err.code 错误码
			// 		console.log(err);
			// 	})
			// }
			this.$store.dispatch('getNetData');
		},
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
@keyframes animatedBackground {
  from { background-position: 0 0; }
  to { background-position: 100% 0; }
}
page {
/*  height: 100vh;
  background-image: url(https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f809b672-cc4f-4e9a-8799-4167a19755f7/fc8c393d-edb6-4f39-b8aa-6857047bc65f.png);
  background-position: center;
  background-size: 60%; */
	/* animation: animatedBackground 4s linear infinite; */
	/* hi 浏览器，使用你的GPU */
  /* transform: translate3d(0, 0, 0); */
}
</style>
<style scoped lang="scss">
	@keyframes animatedBackground {
	  from { background-position: 0 0; }
	  to { background-position: 100% 0; }
	}
.content {
	height: 100vh;
	position: relative;
	.bgImg{
		height: 100vh;
		background-color: rgba(0,0,0,.1);
		background-image: url(https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f809b672-cc4f-4e9a-8799-4167a19755f7/fc8c393d-edb6-4f39-b8aa-6857047bc65f.png);
		background-position: center;
		background-size: 60%;
		animation: animatedBackground 6s linear infinite;
		// /* hi 浏览器，使用你的GPU */
		transform: translate3d(0, 0, 0);
	}
	.BoxBody{
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		width: 100%;
	}
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
