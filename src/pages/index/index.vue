<template>
	<view class="content">
		<r-canvas ref="rCanvas"></r-canvas>
		<view class="bgImg">
			<view class="bgColor"></view>
		</view>
		<view class="BoxBody">
			<h-status-top :title="data.title" />
			<h-navigation :isSelect="1" />
			<view class="body">
				<u-swiper :list="data.banner" border-radius="20" indicator-pos="bottomLeft" interval="5000" @click="clickSwiper"></u-swiper>
				<sava-take @clickBtn="clickBtn" />
				<bottom-mess @clickBottom="clickBottom" />
			</view>

			<u-popup v-model="popupShow" mode="bottom" border-radius="28">
				<view style="padding: 20rpx 40rpx;">
					<view class="popupTitle">
						<u-icon name="close" color="#000" size="28" @click="popupShow = false"></u-icon>
						<view style="text-align: center;">
							<template v-if="popupItem.id !== 1">
								<view class="title">长按二维码添加客服微信</view>
								<view class="describe" style="font-size:24rpx;" @click="copyWX">{{ popupItem.describe }}</view>
							</template>
							<template v-else>
								<view class="title">{{ popupItem.text }}</view>
							</template>
						</view>
						<view></view>
					</view>

					<view class="popupContent">
						<template v-if="popupItem.id !== 1">
							<image src="@/static/wx.jpg" style="width:300rpx;height:300rpx;margin:40rpx 0;" mode="aspectFit" />
						</template>
						<template v-else>
							<view class="notice">
								<view>这是一个盲盒交友游戏，你不知道会抽到谁的纸条，也不知道你的纸条将会被谁抽到。</view>
								<view>如果您需放入纸条，建议您认真填写，并留下有效的联系方式，以便喜欢您的人能联系到您。为了让信息更加真实，抽放纸条时需分享到朋友圈，以提高参与门槛。</view>
								<view>
									温馨提示：所有纸条均来自网友，均属发布者自愿行为，我们无法保证所有纸条内容的真实性，
									<text style="color: #f00;">在添加好友时，请一定要仔细甄别，切勿轻易转账以防被骗</text>
									，本平台不承担任何法律责任。
								</view>
								<view>
									<view><text style="color: #f00;">红娘须知：</text></view>
									<view>避免失联，建议您添加我们微信好友</view>
									<view>平台首页点底部“联系我们”关注！！！</view>
								</view>
							</view>
						</template>
					</view>
				</view>
			</u-popup>
			
			<u-popup v-model="popupCardShow" mode="bottom" border-radius="28">
				<view style="padding: 20rpx 40rpx;">
					<view class="popupTitle">
						<u-icon name="close" color="#000" size="28" @click="popupCardShow = false"></u-icon>
						<view style="text-align: center;">
								<view class="title">{{ popupCard.type===1?'放入1张纸条':'抽取1张纸条' }}</view>
						</view>
						<view></view>
					</view>
			
					<view class="popupContent" style="display: block;">
						<view v-show="popupCard.type===1" style="margin: 40rpx 0;" class="putCard">
							<view>
								<u-input
									v-model="user.text"
									placeholder="你想说的话"
									border="2" />
							</view>
							<view class="row">
								<view class="text"><text style="color: #f00;">*</text>我的性别：</view>
								<image
									:src="user.gender===1?'../../static/male.png':'../../static/maleAsh.png'"
									style="height: 70rpx;width: 70rpx;"
									@click="user.gender=1"
								></image>
								<image
									:src="user.gender===2?'../../static/female.png':'../../static/femaleAsh.png'"
									style="height: 70rpx;width: 70rpx;margin-left: 40rpx;"
									@click="user.gender=2"
								></image>
								<view style="margin-left: 40rpx;">{{user.gender===1?"男":"女"}}</view>
							</view>
							<view class="row">
								<view class="text"><text style="color: #f00;">*</text>我的微信号：</view>
								<u-input
									v-model="user.wx"
									placeholder="只有抽到你的人才能看见"
									:border="false"
									style="width:80%"
								/>
							</view>
							<!-- <view class="row">
								<view class="text"><text style="color: #f00;">*</text>纸条的生命：</view>
							</view> -->
							<view style="margin-top: 40rpx; display: flex;justify-content: center;">
								<button
									style="background-color: #000;color: #fff;width: 80%;height: 80rpx;line-height: 80rpx;"
									size="mini"
									hover-class="okBtn"
									@click="okBtn"
								>确认放入</button>
							</view>
						</view>
						<view v-show="popupCard.type!==1" style="margin: 40rpx 0;">
							<view class="row" style="font-weight: 800;font-size: 34rpx;margin-bottom: 20rpx;text-align: center;">
								选择<text style="color: #ff6494;">T</text><text style="color: #5677fc;">A</text>的性别
							</view>
							<view class="row" style="display: felx;flex-direction: column;text-align: center;">
								<image
									:src="takeGender===1?'../../static/male.png':'../../static/maleAsh.png'"
									style="height: 70rpx;width: 70rpx;"
									@click="takeGender=1"
								></image>
								<image
									:src="takeGender===2?'../../static/female.png':'../../static/femaleAsh.png'"
									style="height: 70rpx;width: 70rpx;margin-left: 40rpx;"
									@click="takeGender=2"
								></image>
							</view>
							<view style="margin-top: 40rpx; display: flex;justify-content: center;">
								<button
									style="background-color: #000;color: #fff;width: 80%;height: 80rpx;line-height: 80rpx;"
									size="mini"
									hover-class="okBtn"
									@click="clickTakeGender"
								>确认取出</button>
							</view>
						</view>
					</view>
				</view>
			</u-popup>
			
			<u-popup
				v-model="popupCardWxShow"
				mode="bottom"
				border-radius="28"
				:custom-style="{
					'backgroundColor': 'transparent'
				}">
				<view style="padding: 20rpx 40rpx;">
					cardWx	
				</view>
			</u-popup>
		</view>
		
		<!-- 纸条生命下拉 -->
		<u-select v-model="selectShow" :list="selectList"></u-select>
	</view>
</template>

<script>
import bottomMess from './components/bottom-mess';
import savaTake from './components/sava-take';
import { mapState } from 'vuex';
export default {
	components: {
		bottomMess,
		savaTake
	},
	onShareTimeline() {
		return {
			title: this.data.shareText
		};
	},
	onShareAppMessage() {
		return {
			title: this.data.title,
			path: `/pages/index/index?id=${this.parameterId}`,
			success(res) {},
			fail(res) {
				uni.showToast({
					title: '分享失败',
					icon: 'none'
				});
			}
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
			takeGender: 1,
			selectShow: false,
			selectList: [
				{
					value: 1,
					label: '被抽2次后自动销毁'
				},
				{
					value: 2,
					label: '被抽6次后自动销毁'
				}
			],
			vip_diy: {},
			popupShow: false,
			popupCardShow: false,
			popupCardWxShow: false,
			popupCard: {
				type: 1
			},
			popupItem: {
				id: 1,
				text: null
			},
			user: {
				text: "",
				wx: "",
				gender: 1
			}
		};
	},
	onLoad(options) {
		let id = 1;
		this.$store.commit('setParameterId', options.id === '' || options.id === undefined ? id : options.id);
		this.getInitData();
	},
	methods: {
		clickTakeGender(){
			if(this.takeGender === ""){
				uni.showToast({
				    title: '请选择性别',
				    duration: 2000,
						icon: "error"
				});
				return;
			}
			this.popupCardShow = false;
			this.popupCardWxShow = true;
		},
		okBtn(){
			if(this.user.wx === ""){
				uni.showToast({
				    title: '微信号不能为空',
				    duration: 2000,
						icon: "error"
				});
				return;
			}
			console.log(this.user);
		},
		clickBtn(index){
			if(index===1){
				this.popupCard.type = 1;
				this.popupCardShow = true;
				return;
			}
			if(index===2){
				this.popupCard.type = 2;
				this.popupCardShow = true;
				return;
			}
		},
		clickSwiper(index) {
			if (this.data.banner[index].link !== '' && this.data.banner[index].link !== undefined) {
				uni.navigateTo({
					url: `/subpackages/webview/index?src=${this.data.banner[index].link}`,
					fail: function(err) {
						console.log(err);
					}
				});
			}
		},
		getInitData() {
			this.$store.dispatch('getNetData');
		},
		clickBottom(item) {
			this.popupShow = true;
			this.popupItem = item;
		},
		copyWX() {
			// #ifdef H5
			const text = document.createElement('textarea');
			text.value = 'zhongaaneng';
			document.body.appendChild(text);
			text.select();
			document.execCommand('Copy');
			text.remove();
			//复制成功的回调函数
			uni.showToast({
				//提示
				title: '复制成功'
			});
			// #endif

			// #ifdef MP-WEIXIN
			wx.setClipboardData({
				data: 'zhongaaneng',
				success: function(res) {
					wx.getClipboardData({
						success: function(res) {
							wx.showToast({
								title: '复制成功'
							});
						}
					});
				}
			});
			// #endif
		}
	}
};
</script>

<style>
@keyframes animatedBackground {
	from {
		background-position: 0 0;
	}
	to {
		background-position: 100% 0;
	}
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
	from {
		background-position: 0 0;
	}
	to {
		background-position: 500% 0;
	}
}
.content {
	height: 100vh;
	position: relative;
	.bgImg {
		height: 100vh;
		background: url(https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f809b672-cc4f-4e9a-8799-4167a19755f7/5ff87e9a-4782-4b09-b4bd-7f93222bcd22.png);
		background-position: center;
		background-size: 50%;
		animation: animatedBackground 20s linear infinite;
		animation-direction:alternate;
		// /* hi 浏览器，使用你的GPU */
		transform: translate3d(0, 0, 0);
	}
	.bgColor{
		height: 100vh;
		background: linear-gradient(50deg, #ff8282, 50%, #81c0f4);
		opacity: .8;
	}
	.BoxBody {
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
		.putCard{
			view{
				margin: 30rpx 0;
			}
			.row{
				display: flex;
				align-items: center;
				border-bottom: 2rpx solid #ccc;
				.text{
					width: 200rpx;
					font-weight: 700;
				}
			}
		}
		.okBtn{
			background-color: #413e3e !important;
		}
		.notice {
			margin: 40rpx 0;
			> view + view {
				margin-top: 28rpx;
			}
		}
	}
}
</style>
