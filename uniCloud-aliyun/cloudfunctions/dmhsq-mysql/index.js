const database = require("dmhsq-mysql-pool");
exports.handler = async (event, context) => {
    
    let db = new database({
        host: '47.110.67.209',
        port: '3306',
        user: 'shuju',
        password: 'bFYdsXiZjE8DKehx',
        database: "shuju"
    })
		let datas = {};
   let collection = db.table("com_db_java")
	 datas.copy = collection.get()
   return datas;
}
