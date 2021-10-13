'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	
	let data = {};
	if(event.parameterId!==""&&event.parameterId!==undefined){
		data.parameterId = Number(event.parameterId)
	}
	data.wx = event.wx;
	
	let isAdd = false;
	const db = uniCloud.database();
	let res = await db.collection('wxData').where({
		...data
	}).get().then((res)=>{
			if(res.data.length===0){
				isAdd = true;
				db.collection("wxData").add({
				  ...event
				})
			}else{
				isAdd = false;
			}
		}).catch((err)=>{
			// err.message 错误信息
			// err.code 错误码
			console.log(err);
		})

	//返回数据给客户端
	event.isAdd = isAdd;
	return event
};
