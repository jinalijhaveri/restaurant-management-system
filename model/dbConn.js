var mysql = require('mysql2');

var connection;



function connect() 
{
	if(connection)
		{
		console.log("Inside if");
		return connection;
		}
	else
		{
	connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'root',
	port: '3306',
	database: 'cmpe226'
		
});
	console.log("connected to database");
	console.log("inside else");
	return connection;
		}
	
}
exports.connect = connect;

