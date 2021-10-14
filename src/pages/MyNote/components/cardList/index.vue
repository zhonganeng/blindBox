<template>
	<view>
		<view v-for="item in dataListCopy" :key="item.id" class="content">
			<view :style="{
				color: item.gender === 1 ? '#81C0F4' : '#FF8282'
			}" class="gender">{{item.gender===1?'男生':'女生'}}</view>
			<view class="body">
				<view style="flex: 1;">{{item.text!=''?item.text:'-'}}</view>
				<view style="height: 120rpx;width: 200rpx;padding-right: 80rpx;"><image style="height: 100%;" mode="heightFix" :src="item.gender === 1 ? 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f809b672-cc4f-4e9a-8799-4167a19755f7/5d0ca203-6947-4bfb-9171-206de3b8a8d4.png' : 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f809b672-cc4f-4e9a-8799-4167a19755f7/9f989365-6328-4502-80cd-32006fea2cd6.png'"></image></view>
			</view>
			<view class="wx" style="user-select:text;">
				<view><text>{{item.wx}}</text><text style="color: #ccc;margin-left: 20rpx;">(长按复制)</text></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			dataList:{
				type: Array
			}
		},
		data(){
			return {
				dataListCopy: this.dataList
			}
		}
	}
</script>

<style scoped lang="scss">
	.content{
		border: 2rpx solid #F3F4F6;
		padding: 20rpx;
		border-radius: 12rpx;
		margin: 40rpx 0;
		font-weight: 900;
		.gender{
			margin-bottom: 20rpx;
		}
		.body{
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin: 40rpx 0;
		}
		.wx{
			display: flex;
			padding-top: 12rpx;
			justify-content: space-between;
			align-items: center;
			border-top: 2rpx solid #F3F4F6;
		}
	}
</style>
