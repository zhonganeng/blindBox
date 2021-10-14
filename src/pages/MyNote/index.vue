<template>
  <view class="content">
		<h-status-top :title="data.title" />
    <h-navigation :isSelect="0" />
    <view class="body">
      <switchTab @switchTab="switchTab" />
			<view style="margin-top: 20rpx;">
				<template v-if="showAb==1">
					<template v-if="savaWxData.length>0">
						<cardList :dataList="savaWxData" />
					</template>
					<view style="color: #999999;text-align: center;margin-top:40rpx;" v-else>我还没有放入过交友纸条</view>
				</template>
				<template v-if="showAb==2">
					<template v-if="takeWxData.length>0">
						<cardList :dataList="takeWxData" />
					</template>
					<view style="color: #999999;text-align: center;margin-top:40rpx;" v-else>我还没有抽取过交友纸条</view>
				</template>
				<u-image width="100%" height="500rpx" mode="aspectFit" border-radius="20" :src="data.bottomImg" @click="copyWX(data.bottomWx)" v-if="data.bottomImg"></u-image>
			</view>
		</view>
  </view>
</template>

<script>
import { mapState } from 'vuex'
import switchTab from "./components/switch-tab";
import cardList from "./components/cardList";
export default {
	computed: {
		...mapState({
			// 箭头函数可使代码更简练
			parameterId: state => state.app.parameterId,
			data: state => state.app.data
		})
	},
	data(){
		return {
			savaWxData: null,
			takeWxData: null,
			showAb: 1
		}
	},
  components: {
    switchTab,
		cardList
  },
	onLoad(){
		let _this = this;
		uni.showLoading({
		  title: '加载中'
		});
		uni.getStorage({
		    key: 'savaWxData',
		    success: function (res) {
					uni.hideLoading();
					_this.savaWxData = res.data.filter(item=>Number(item.parameterId) ===	Number(_this.parameterId));
		    }
		});
		
	},
	methods:{
		switchTab(index){
			let _this = this;
			this.showAb = index+1;
			if(index===1){
				uni.showLoading({
				    title: '加载中'
				});
				uni.getStorage({
				    key: 'takeWxData',
				    success: function (res) {
							uni.hideLoading();
							_this.takeWxData = res.data.filter(item=>Number(item.parameterId) ===	Number(_this.parameterId));
				    }
				});
			}
		},
	}
};
</script>

<style scoped lang="scss">
page {
  background-color: #f4f4f4;
}
.content {
  .body {
    padding: 0 20rpx;
  }
}
</style>