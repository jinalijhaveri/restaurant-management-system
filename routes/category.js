var category = require('../model/categoryQuery');


exports.getCategories = function(req,res){
	category.getCategories(function(err,rows){
		console.log("Categories______"+rows);
		res.send(rows);
	});
};

exports.addNewCategory = function(req,res){
	var connection = require('../model/dbConnection');
	//var pool = connection.getCon();
	var conn =connection.createConnection({
		  host     : 'localhost',
		  user     : 'root',
		  password : 'root',
		  database : 'restaurantdb'
		});
	
		conn.connect();
	var id= req.params.category_id;
	var input = JSON.parse(JSON.stringify(req.body));
    var data = { 
    		cat_id: id,
        cat_name : input.category_name,	        
    };

		console.log("Categories______");
		conn.query("insert into category set ?",data,function(err,results)
		{
				
				if (err) {
			        console.log("ERROR: " + err.message);
			        //pool.releaseConnection(conn);
			    }
				
				
			
				
				});
	res.render('adminHome');
};