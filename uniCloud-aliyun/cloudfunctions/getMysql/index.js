'use strict';

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: '47.110.67.209',
  user: 'shuju',
  password: 'bFYdsXiZjE8DKehx',
  database: 'shuju',
  port: 3306
});
/**
 * 封装mysql执行操作为Promise
 * 
 * @param {Object} sql
 * @param {Object} values
 */
const query = function(sql, values) {
  return new Promise((resolve, reject) => {
    connection.query(sql, values, (error, results, fields) => {
      if (error) {
        reject(error)
      } else {
        resolve(results)
      }
    })
  })
}

exports.main = async (event, context) => {
  //event为客户端上传的参数
  console.log('event : ' + event)

  try {
    //连接数据库
    connection.connect()

    // // 新增记录
    // let addRes = await query('insert into users set ?', {
    //   name: '丁元英',
    //   age: 40
    // })
    // console.log("新增记录：", addRes)

    // // 删除记录
    // let delRes = await query('delete from users where name=? ', ['韩楚风'])
    // console.log("删除记录：", delRes)

    // //修改记录
    // let updateRes = await query('update users set age=? where name=? ', [50, '丁元英'])
    // console.log("修改记录：", updateRes)

    //查询记录
    let queryRes = await query('select * from com_db_java', [''])
    console.log("查询记录：", queryRes)
		event.queryRes = queryRes;
    //关闭连接
    connection.end();
  } catch (e) {
    console.log('操作失败，失败信息 ', e);
  }

  //返回数据给客户端
  return event
};
