/**
 * New node file
 */

var connection = require('../model/dbConnection');
var pool = connection.getCon();

exports.getMenuItemsByCategory = function(categoryId,callback){
	var sql = 'select * from item where category_Id ='+categoryId;
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

exports.addItem = function(itemName,price,categoryId,veg,itemDescription,callback) {
	var query = "insert into item "
			+ "(item_name,price,category_id,veg,item_description)"
			+ "values (?,?,?,?,?);";
	pool.getConnection(function(err, connection) {
		connection.query(query, [itemName,price,categoryId,veg,itemDescription], function(regerr, rows) {

			if (regerr) {
				connection.release();
				console.log("Error : " + regerr);
			} else {
				connection.release();
				callback(regerr, rows);
			}
		});
	});

}

exports.updateItem = function(itemId,itemName,price,categoryId,veg,itemDescription,callback) {
	var query = "update item set item_name=?,price=?,category_id=?,veg=?,item_description=? where item_id=?";
	pool.getConnection(function(err, connection) {
		connection.query(query, [itemName,price,categoryId,veg,itemDescription,itemId], function(regerr, rows) {

			if (regerr) {
				connection.release();
				console.log("Error : " + regerr);
			} else {
				connection.release();
				callback(regerr, rows);
			}
		});
	});

}

exports.deleteItem = function(itemId,callback) {
	var query = "delete from item where item_id=?";
	pool.getConnection(function(err, connection) {
		connection.query(query, [itemId], function(regerr, rows) {

			if (regerr) {
				connection.release();
				console.log("Error : " + regerr);
			} else {
				connection.release();
				callback(regerr, rows);
			}
		});
	});

}

