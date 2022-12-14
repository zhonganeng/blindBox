'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log("event: ",event);
	let data = {};
	if(event.parameterId!==""&&event.parameterId!==undefined){
		data.parameterId = Number(event.parameterId)
	}
	if(event.takeGender!==""&&event.takeGender!==undefined){
		data.gender = Number(event.takeGender)
	}
	let response = null;
	
	const db = uniCloud.database();
	let res = await db.collection('wxData').where({
		...data
	}).get().then((res)=>{
			console.log("res: ",res);
			response = res.data[random(0,res.data.length)];
		}).catch((err)=>{
			// err.message 错误信息
			// err.code 错误码
			console.log(err);
		})
	//返回数据给客户端
	return response
};
function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}