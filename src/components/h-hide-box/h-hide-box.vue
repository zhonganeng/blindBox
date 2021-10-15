<template>
	<view>
		<template v-if="data.isExamine">
			<slot></slot>
		</template>
		<view v-else>
			<h-status-top title=" " />
			<view style="text-align: center;font-size: 48rpx;margin: 40rpx 0;">每日一图</view>
			<image mode="aspectFit" style="height: 600rpx;margin-left: 40rpx;" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181031%2Fb353c97bc9284bd9b4a24e6da3677469.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636849957&t=01b7ce608001ee9159ccde28d6e86483" />
		</view>
	</view>
</template>

<script>
import { mapState } from 'vuex';
export default {
	computed: {
		...mapState({
			data: state => state.app.data
		})
	},
}
</script>

<style>
</style>
