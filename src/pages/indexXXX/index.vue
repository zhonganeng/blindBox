<template>
	<view class="content">
		<h-status-top title=" " />
		<view style="padding-left: 30rpx;font-size: 68rpx;font-weight: 800;" @click="showGG" v-if="!showGuangGao">AQI：
			<text style="color: #19be6b;" v-if="isTrue">{{kongqi}}</text>
			<text style="color: #f00;" v-else>{{kongqi}}</text>
		</view>
		<view class="box">
			<view style="width: 100%;font-size: 48rpx;padding-bottom: 20rpx;" v-if="!showGuangGao">
				<u-button type="success" class="btn" @click="hao">好空气</u-button>
				<view style="padding-top: 20rpx;">
					<u-button type="error" class="btn" @click="huai">坏空气</u-button>
				</view>
			</view>
		</view>
		<view class="weixian" v-if="showHao" style="padding-top: 80%;">
			<u-button type="error" class="btn" @click="cloneHao">关闭</u-button>
		</view>
		<view class="weixian" v-if="showWeiXian">
			<image src="@/static/weixian.gif" style="width: 300rpx;" mode="aspectFit" />
			<u-button type="error" class="btn" @click="cloneWeiXian">关闭</u-button>
		</view>
		<view v-if="showGuangGao" class="guanggaoBox">
			<view class="guanggaoBoxBtn">
				<u-button type="error" class="btn" @click="cloneGaoBoxBtn">关闭</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				guangGaoBtn: false,
				showHao: false,
				kongqi: 234,
				isTrue: false,
				showWeiXian: false,
				showGuangGao: false,
				innerAudioContext: null
			}
		},
		methods: {
			cloneGaoBoxBtn(){
				this.showGuangGao = false;
				this.innerAudioContext.destroy()
			},
			showGG(){
				this.showGuangGao = true;
				this.innerAudioContext = uni.createInnerAudioContext();
				this.innerAudioContext.stop();
				this.innerAudioContext.autoplay = true;
				this.innerAudioContext.obeyMuteSwitch = false;
				this.innerAudioContext.volume = 1;
				this.innerAudioContext.loop = true;
				this.innerAudioContext.src = "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f809b672-cc4f-4e9a-8799-4167a19755f7/d722b5d3-da57-48b8-a801-bf80ddb34279.mp3";
				this.innerAudioContext.onPlay(() => {
					console.log('开始播放');
				});
				this.innerAudioContext.onError((res) => {
					console.log("报错");
					console.log(res.errMsg);
					console.log(res.errCode);
				});
			},
			cloneWeiXian(){
				this.showWeiXian = false;
				this.innerAudioContext.destroy()
			},
			cloneHao(){
				this.showHao = false;
				uni.hideLoading();
				this.innerAudioContext.destroy()
			},
			hao(){
				this.innerAudioContext = uni.createInnerAudioContext();
				this.isTrue = true;
				this.kongqi = 120;
				this.showHao = true;
				this.showWeiXian = false;
				this.innerAudioContext.stop();
				this.innerAudioContext.autoplay = true;
				this.innerAudioContext.obeyMuteSwitch = false;
				this.innerAudioContext.volume = 1;
				this.innerAudioContext.loop = true;
				this.innerAudioContext.src = "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f809b672-cc4f-4e9a-8799-4167a19755f7/ec697ae6-b1c4-4af0-b376-53bffd1176b6.mp3";
				this.innerAudioContext.onPlay(() => {
					console.log('开始播放');
					uni.showLoading({
					   title: '正在播放'
					});
				});
				this.innerAudioContext.onError((res) => {
					console.log("报错");
					console.log(res.errMsg);
					console.log(res.errCode);
				});
			},
			huai(){
				this.innerAudioContext = uni.createInnerAudioContext();
				this.isTrue = false;
				this.kongqi = 888;
				this.showWeiXian = true;
				// 播放警报声音
				this.innerAudioContext.stop();
				this.innerAudioContext.autoplay = true;
				this.innerAudioContext.obeyMuteSwitch = false;
				this.innerAudioContext.volume = 1;
				this.innerAudioContext.loop = true;
				this.innerAudioContext.src = "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f809b672-cc4f-4e9a-8799-4167a19755f7/248f2bed-ae0e-49f9-b5c1-64e459105a7a.mp3";
				this.innerAudioContext.onPlay(() => {
					console.log('开始播放');
				});
				this.innerAudioContext.onError((res) => {
					console.log("报错");
					console.log(res.errMsg);
					console.log(res.errCode);
				});
			},
			getKongQiData(){
				uni.showLoading({
					title: "加载中",
				});
				uniCloud
				.callFunction({
					name: "dmhsq-mysql",
				})
				.then((res) => {
					uni.hideLoading();
					console.log("数据库：", res.result);
				})
				.catch((err) => {
					uni.hideLoading();
				  console.error(err);
				});
			}
		}
	}
</script>

<style>
	page{
		width: 100%;
		height: 100vh;
		background-image: url(https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f809b672-cc4f-4e9a-8799-4167a19755f7/e152d049-ba8e-42db-b7e6-8a7eb2a36b39.png);
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}
</style>
<style lang="scss" scoped>
.content{
	.box{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 20rpx 60rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-weight: 800;
		font-size: 48rpx;
	}
	.weixian{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.guanggaoBox{
		// position: fixed;
		// top: 0;
		// left: 0;
		width: 100%;
		height: 3934rpx;
		margin-top: 40rpx;
		margin-bottom: 60rpx;
		background-color: #fff;
		background-image: url(https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f809b672-cc4f-4e9a-8799-4167a19755f7/f585a894-7c77-41ab-a2a2-a1cf10701bf8.jpg);
		background-position: center;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		.guanggaoBoxBtn{
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			padding: 40rpx 20rpx;
		}
	}
}
</style>
