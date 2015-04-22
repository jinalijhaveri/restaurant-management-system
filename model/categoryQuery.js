/**
 * New node file
 */

var connection = require('../model/dbConnection');
var pool = connection.getCon();

exports.getCategories = function(callback){
	var sql = 'select * from category';
	pool.getConnection(function(err, conn) {
		conn.query(sql,function(err,results){
			
			if (err) {
		        console.log("ERROR: " + err.message);
		        pool.releaseConnection(conn);
		    }
			else{
				pool.releaseConnection(conn);		
				callback(err,results);
			}
			
			});
	});
}
