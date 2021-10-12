<template>
	<view>
		<web-view :src="hrefSrc"></web-view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				hrefSrc: ""
			}
		},
		onLoad(opt){
			console.log(opt);
			let { src } = opt;
			this.hrefSrc = src;
		}
	}
</script>

<style>
</style>
