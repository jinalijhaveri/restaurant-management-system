/**
 * New node file
 */

var menu = require('../model/menuQuery');

exports.getMenuByCategory = function(req,res){
	var categoryId = req.params.categoryId;
	console.log("Category__________"+categoryId);
	menu.getMenuItemsByCategory(categoryId,function(err,rows){
		console.log("Items______"+rows);
		res.send(rows);
	});
}
