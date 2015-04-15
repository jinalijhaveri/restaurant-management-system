/**
 * Create Connection Pool Instance
 */

var mysql = require('mysql2');
var connection;

	var pool;
	function getCon() {
		
		if(pool != null){
			return pool;
		}
		else
		{
			pool  = mysql.createPool({
				  host     : 'localhost',
				  user     : 'root',
				  password : 'welcome',
				  port : '3306',
				  database : 'freedoor'
				});
			return pool;
		}
	}



exports.getCon = getCon;
