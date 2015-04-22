var category = require('../model/categoryQuery');

exports.getCategories = function(req,res){
	category.getCategories(function(err,rows){
		console.log("Categories______"+rows);
		res.send(rows);
	});
}