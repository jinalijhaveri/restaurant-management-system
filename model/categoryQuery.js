/**
 * New node file
 */

var connection = require('../model/dbConnection');
var pool = connection.getCon();

exports.getCategories = function(callback) {
	var sql = 'select * from category';
	pool.getConnection(function(err, conn) {
		conn.query(sql, function(err, results) {

			if (err) {
				console.log("ERROR: " + err.message);
				pool.releaseConnection(conn);
			} else {
				pool.releaseConnection(conn);
				callback(err, results);
			}

		});
	});
}

exports.addCategory = function(categoryName,callback) {
	var query = "insert into category "
			+ "(category_name)"
			+ "values (?);";
	pool.getConnection(function(err, connection) {
		connection.query(query, [categoryName], function(regerr, rows) {

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

exports.updateCategory = function(categoryId,categoryName,callback) {
	var query = "update category set category_name=? where category_id=?";
	pool.getConnection(function(err, connection) {
		connection.query(query, [categoryName,categoryId], function(regerr, rows) {

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

exports.deleteCategory = function(categoryId,callback) {
	var query = "delete from category where category_id=?";
	pool.getConnection(function(err, connection) {
		connection.query(query, [categoryId], function(regerr, rows) {

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
