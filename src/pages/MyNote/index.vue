<template>
  <view class="content">
		<h-status-top :title="data.title" />
    <h-navigation :isSelect="0" />
    <view class="body">
      <switchTab @switchTab="switchTab" />
			<template v-if="showAb==1">
				<template v-if="savaWxData.length>0">
					<view v-for="item in savaWxData" :key="item.id" style="padding: 20rpx 0;">{{item.wx}}</view>
				</template>
				<view style="color: #999999;text-align: center;margin-top:40rpx;" v-else>我还没有放入过交友纸条</view>
			</template>
			<template v-if="showAb==2">
				<template v-if="takeWxData.length>0">
					<view v-for="item in takeWxData" :key="item.id" style="padding: 20rpx 0;">{{item.wx}}</view>
				</template>
				<view style="color: #999999;text-align: center;margin-top:40rpx;" v-else>我还没有抽取过交友纸条</view>
			</template>
		</view>
  </view>
</template>

<script>
import { mapState } from 'vuex'
import switchTab from "./components/switch-tab";
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
  },
	onLoad(){
		let _this = this;
		uni.getStorage({
		    key: 'savaWxData',
		    success: function (res) {
					_this.savaWxData = res.data.filter(item=>Number(item.parameterId) ===	Number(_this.parameterId));
					console.log(_this.savaWxData);
		    }
		});
		uni.getStorage({
		    key: 'takeWxData',
		    success: function (res) {
					_this.takeWxData = res.data.filter(item=>Number(item.parameterId) ===	Number(_this.parameterId));
					console.log(520,_this.takeWxData);
		    }
		});
	},
	methods:{
		switchTab(index){
			this.showAb = index+1;
		}
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