'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	
	// type 1:获取定制的数据；2:获取纸条
	if(event.type === 1){
		
	}else if(event.type === 2){
		
	}else{
		
	}
	
	//返回数据给客户端
	return event
};
