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
				<u-swiper :list="data.banner" v-if="data.banner.length" border-radius="20" indicator-pos="bottomLeft" interval="5000" @click="clickSwiper"></u-swiper>
				<u-swiper :list="[{
					id: 1,
					image: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f809b672-cc4f-4e9a-8799-4167a19755f7/4ee37e3b-6796-4a1c-9148-ce7cc44d9d4f.png'
				}]" v-else border-radius="20" indicator-pos="bottomLeft" interval="5000" @click="clickSwiper"></u-swiper>
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
								<view class="describe" style="font-size:24rpx;" @click="copyWX('zhongaaneng')">{{ popupItem.describe }}</view>
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
									type="textarea"
									maxlength="28"
									v-model="user.text"
									placeholder="你想说的话 (长度不超过28)"
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
			
			<view class="tranPopup">
				<u-popup
					:mask-close-able="true"
					v-model="popupCardWxShow"
					mode="bottom"
					border-radius="28"
					>
						<view class="popupBox">
							<view class="popupBgImg">
								<view style="margin: 30rpx 0 0 120rpx;display: flex;justify-content: space-between;align-items: center;padding-top: 30rpx;">
									<u-icon name="close" color="#000" size="36" @click="popupCardWxShow=false"></u-icon>
									<image
										:src="takeGender===1?'../../static/male.png':'../../static/female.png'"
										style="height: 70rpx;width: 70rpx;margin-right: 190rpx;"
									></image>
									<view></view>
								</view>
								<view style="margin: 0 0 0 -24px;display: flex;flex-direction: column;justify-content: center;align-items: center; padding-top: 30rpx;">
									<view style="color: #f00;font-weight: 900;font-size: 32rpx;width: 500rpx;word-wrap:break-word;text-align: center;" @click="copyWX(takeUser.wx)">
										<view>微信号（点击复制）</view>
										<view>{{takeUser.wx}}</view>
									</view>
									<view style="color: #000;font-weight: 900;font-size: 28rpx;margin-top: 12rpx;" v-show="takeUser.text!==''&& takeUser.text!==undefined">
										{{textEllipsis(takeUser.text,18)}}
									</view>
									<view style="font-weight: 900;margin-top: 50rpx;display: flex;justify-content: center;">
										<view style="width: 300rpx; background-color: #000000;color: #fff;border-radius: 12rpx;padding: 16rpx 6rpx;text-align: center;" @click="savaWx">
											保存图片
										</view>
									</view>
								</view>
							</view>
						</view>
				</u-popup>
			</view>
		</view>
		
		<!-- 纸条生命下拉 -->
		<u-select v-model="selectShow" :list="selectList"></u-select>
		
		<!-- 引导分享 -->
		<u-mask :show="shareShow">
		  <view class="maskBox">
		    <view :style="{
		      position: 'absolute',
					width: '100rpx',
					height: '100rpx',
					top: MenuButton.top + 'px',
		      right: MenuButton.right + 'px'
				}">
		      <u-image width="100%"
		               height="100%"
		               src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cd82ade2-493f-4034-952b-09c377b14944/46b8ee1a-6900-45b5-ae6a-fbb2f0562dc2.png"></u-image>
		    </view>
		    <view :style="{
		      position: 'absolute',
					top: MenuButton.top + 60+ 'px',
		      right: MenuButton.right + 'px',
		      color: '#fff',
		      fontWeight: 400
				}">请分享到<text style="font-weight: 800;">朋友圈</text>即可抽取！</view>
		  </view>
		</u-mask>
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
		this.shareShow = false;
		this.isShare = true;
		return {
			imageUrl: this.data.shareImg,
			title: this.data.shareText
		};
	},
	onShareAppMessage() {
		return {
			title: this.data.shareText,
			path: `/pages/index/index?id=${this.parameterId}`,
			imageUrl: this.data.shareFriendImg,
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
			getWxCount: 0,
			previewImg: "",
			isShare: false,
			shareShow: false,
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
			},
			takeUser: {
				text: "",
				wx: "",
				gender: 1
			},
			MenuButton: {
			  top: 0,
			  right: 0,
			},
		};
	},
	onLoad(options) {
		let id = 1;
		this.$store.commit('setParameterId', options.id === '' || options.id === undefined ? id : options.id);
		this.getInitData();
		
		// #ifdef MP-WEIXIN
		let obj = wx.getMenuButtonBoundingClientRect();
		this.MenuButton.top = obj.height + obj.top + 20;
		this.MenuButton.right = obj.width - 40;
		// #endif
		
		// 获取用户今日抽纸条次数
		let _this = this;
		uni.getStorage({
		    key: 'getWxCount',
		    success: function (res) {
					console.log(res);
		      _this.getWxCount = res.data.getWxCount;
		    },
				fail: function () {
					uni.setStorage({
					    key: 'getWxCount',
					    data: {
								getWxCount: this.getWxCount
							},
					});
		    },
		});
	},
	methods: {
		savaWx(){
			this.$nextTick(async () => {
				uni.showLoading({
					title: "生成名片中",
				});
				
			  // 初始化
			  await this.$refs.rCanvas.init({
			    canvas_id: "rCanvas",
			    hidden: true,
			  });
			  this.$refs.rCanvas.setCanvasWidth(395);
			  this.$refs.rCanvas.setCanvasHeight(702);
			
			  await this.$refs.rCanvas
			    .drawImage({
			      url: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f809b672-cc4f-4e9a-8799-4167a19755f7/0995ff24-4cbb-48b5-b964-04a5afaed8f4.png",
			      x: 0,
			      y: 0,
			      w: 395,
			      h: 702,
			    })
			    .catch((err_msg) => {
			      uni.showToast({
			        title: err_msg,
			        icon: "none",
			      });
			    });
			
			  // 画文字
			  await this.$refs.rCanvas
			    .drawText({
			      text: `微信号：${this.takeUser.wx}`,
			      max_width: 300,
			      x: 46,
			      y: 520,
			      font_color: "#db7788",
			      font_size: 22,
			    })
			    .catch((err_msg) => {
			      uni.showToast({
			        title: err_msg,
			        icon: "none",
			      });
			    });
				if(this.takeUser.text.length>0){
					await this.$refs.rCanvas
						.drawText({
							text: '签名：'+this.textEllipsis(this.takeUser.text,28),
							max_width: 300,
							x: 46,
							y: 570,
							font_color: "#db7788",
							font_weight: 900,
							font_size: 18,
						})
						.catch((err_msg) => {
							uni.showToast({
								title: err_msg,
								icon: "none",
							});
						});
				}

			  // 生成海报
			  await this.$refs.rCanvas.draw((res) => {
			    //res.tempFilePath：生成成功，返回base64图片
			    // 保存图片
			    this.previewImg = res.tempFilePath;
			    uni.hideLoading();
			    this.$refs.rCanvas.saveImage(this.previewImg);
					uni.showToast({
						title: "保存名片成功！",
						duration: 2000,
					});
			  });
			});
		},
		clickTakeGender(){
			if(!this.isShare){
				this.shareShow = true;
				return;
			}
			if(this.takeGender === ""){
				uni.showToast({
				    title: '请选择性别',
				    duration: 2000,
						icon: "error"
				});
				return;
			}
			
			uni.showLoading({
				title: "加载中",
			});
			
			uniCloud
			  .callFunction({
			    name: "getData",
			    data: {
						parameterId: this.parameterId,
						takeGender: this.takeGender
			    },
			  })
			  .then((res) => {
					uni.hideLoading();
			    if(res.result!==null){
						this.takeUser = {
							text: res.result.text,
							wx: res.result.wx,
							gender: res.result.gender
						};
						
						this.popupCardShow = false;
						this.popupCardWxShow = true;
						
						uni.setStorage({
						    key: 'getWxCount',
						    data: {
									getWxCount: ++this.getWxCount
								},
						});
						
						uni.getStorage({
						    key: 'takeWxData',
						    success: function (res2) {
						      uni.setStorage({
						          key: 'takeWxData',
						          data: [
												...res2.data,
												{
						      			...res.result
												},
											],
											success: function(){
												_this.user.wx = "";
												_this.user.text = "";
											}
						      });
						    },
								fail: function () {
									uni.setStorage({
									    key: 'takeWxData',
									    data: [{
												...res.result
											}],
											success: function(){
												_this.user.wx = "";
												_this.user.text = "";
											}
									});
						    },
						});
					}else{
						uni.showToast({
							title: '暂无纸条',
							duration: 2000,
							icon: 'error'
						});
					}
			    return res;
			  })
			  .catch((err) => {
			    console.error(err);
			  });
		},
		okBtn(){
			let _this = this;
			
			if(this.user.wx === ""){
				uni.showToast({
				    title: '微信号不能为空',
				    duration: 2000,
						icon: "error"
				});
				return;
			}
			
			//手机号正则
			var mPattern = /^1[34578]\d{9}$/; //http://caibaojian.com/regexp-example.html
			var wxPattern = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/;
			if(this.user.wx.length>20){
				uni.showToast({
				    title: '微信号错误',
				    duration: 2000,
						icon: "error"
				});
				return;
			}
			if(!wxPattern.test(this.user.wx)){
				if(!mPattern.test(this.user.wx)){
					uni.showToast({
					    title: '微信号错误',
					    duration: 2000,
							icon: "error"
					});
					return;
				}
			}
		
			uniCloud
			  .callFunction({
			    name: "setData",
			    data: {
						parameterId: Number(this.parameterId),
			      ...this.user
			    },
			  })
			  .then((res) => {
					console.log(res);
					if(res.result.isAdd){
						uni.showToast({
							title: '添加成功',
							duration: 2000,
						});
						console.log(res.result);
						// takeWxData
						uni.getStorage({
						    key: 'savaWxData',
						    success: function (res2) {
						      uni.setStorage({
						          key: 'savaWxData',
						          data: [
												...res2.data,
												{
						      			...res.result
												},
											],
											success: function(){
												_this.user.wx = "";
												_this.user.text = "";
											}
						      });
						    },
								fail: function () {
									uni.setStorage({
									    key: 'savaWxData',
									    data: [{
												...res.result
											}],
											success: function(){
												_this.user.wx = "";
												_this.user.text = "";
											}
									});
						    },
						});

						this.popupCardShow = false;
					}else{
						uni.showToast({
							title: '微信号重复',
							duration: 2000,
							icon: "error"
						});
					}
			    return res;
			  })
			  .catch((err) => {
			    console.error(err);
			  });
		},
		clickBtn(index){
			if(index===1){
				this.popupCard.type = 1;
				this.popupCardShow = true;
				return;
			}
			if(this.getWxCount>=2){
				uni.showToast({
				    title: '每日只能抽两次',
				    duration: 2000,
						icon: "error"
				});
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
		copyWX(wxH) {
			// #ifdef H5
			const text = document.createElement('textarea');
			text.value = wxH;
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
				data: wxH,
				success: function(res) {
					wx.getClipboardData({
						success: function(res) {
							// wx.showToast({
							// 	title: '复制成功'
							// });
						}
					});
				}
			});
			// #endif
		},
		textEllipsis(text,len){
			if(text.length>len){
				return text.slice(0,len) + '...';
			}else{
				return text;
			}
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
	.tranPopup{
		/deep/ .u-drawer-content{
			background-color: transparent;
		}
		.popupBox{
			.popupBgImg{
				height: 442rpx;
				background-image: url(https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f809b672-cc4f-4e9a-8799-4167a19755f7/21aec509-96e2-4851-9498-3c5183c80783.png);
				background-position: bottom;
				background-repeat: no-repeat;
				background-size: 90%;
			}
		}
	}
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
