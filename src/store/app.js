const app = {
	state: () => ({
		data: null,
		parameterId: ""
	}),
	mutations: {
		setData(state, data){
			state.data = data;
		},
		setParameterId(state, data){
			console.log("data:",data);
			state.parameterId = data;
		}
	},
	actions: {
		async getNetData (context) {
			const parameterId = context.state.parameterId;
			console.log("parameterId:",parameterId);
			 if(parameterId!==undefined){
				 uni.showLoading({
					 title: "玩命加载中"
				 });
				const db = uniCloud.database()
				 let res = await db.collection('vip_diy').where({
					 id: Number(parameterId)
				 }).get().then((res)=>{
					// res 为数据库查询结果
					context.commit('setData',res.result.data[0])
					uni.hideLoading();
				}).catch((err)=>{
					// err.message 错误信息
					// err.code 错误码
					console.log(err);
				})
			 }
		}
	}
}
export default app
