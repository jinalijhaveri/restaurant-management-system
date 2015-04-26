var category = require('../model/categoryQuery');

exports.getCategories = function(req, res) {
	category.getCategories(function(err, rows) {
		console.log("Categories______" + rows);
		res.send(rows);
	});
};

exports.addNewCategory = function(req, res) {
	var categoryName = req.body.categoryName;
	console.log("Category Name_____" + categoryName);
	category.addCategory(categoryName, function(err, rows) {
		if (err) {
			res.writeHead(400);
			res.end("Error while inserting data\n");
		} else {
			console.log(rows);
			res.end("Category Inserted");
		}
	});
};

exports.updateCategory = function(req, res) {
	var categoryId = req.body.categoryId;
	var categoryName = req.body.categoryName;
	console.log("Category Name_____" + categoryName);
	category.updateCategory(categoryId, categoryName, function(err, rows) {
		if (err) {
			res.writeHead(400);
			res.end("Error while updating data\n");
		} else {
			console.log(rows);
			res.end("Category Updated");
		}
	});
};

exports.deleteCategory = function(req, res) {
	var categoryId = req.body.categoryId;

	console.log("Category Id_____" + categoryId);
	category.deleteCategory(categoryId, function(err, rows) {
		if (err) {
			res.writeHead(400);
			res.end("Error while Deleting data\n");
		} else {
			console.log(rows);
			res.end("Category deleted");
		}
	});
}