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

exports.addMenuItem = function(req, res) {
	
	console.log("Inside Add Menu Item");
	var itemName = req.body.itemName;
	var price = req.body.price;
	var categoryId = req.body.categoryId;
	var veg = req.body.veg;
	var itemDescription = req.body.itemDescription;
	
	menu.addItem(itemName,price,categoryId,veg,itemDescription, function(err, rows) {
		if (err) {
			res.writeHead(400);
			res.end("Error while inserting data\n");
		} else {
			console.log(rows);
			console.log("Menu Item Inserted");
			res.render('adminHomePage');
		}
	});
};

exports.updateMenuItem = function(req, res) {
	var itemId = req.body.itemId;
	var itemName = req.body.itemName;
	var price = req.body.price;
	var categoryId = req.body.categoryId;
	var veg = req.body.veg;
	var itemDescription = req.body.itemDescription;
	console.log("Item Name_____" + itemName);
	menu.updateItem(itemId,itemName,price,categoryId,veg,itemDescription, function(err, rows) {
		if (err) {
			res.writeHead(400);
			res.end("Error while updating data\n");
		} else {
			console.log(rows);
			console.log("Menu Item Updated");
			res.render('adminMenuPage');
		}
	});
};

exports.deleteMenuItem = function(req, res) {
	var itemId = req.body.itemId;

	console.log("Item Id_____" + itemId);
	menu.deleteItem(itemId, function(err, rows) {
		if (err) {
			res.writeHead(400);
			res.end("Error while Deleting data\n");
		} else {
			console.log(rows);
			res.end("Item deleted");
		}
	});
}

exports.showAdminMenuPage = function(req,res){
	menu.getMenuItems(function(err,rows){
		console.log("Items______"+rows);
		res.render('adminMenuPage',{itemList:rows});
	});
}

exports.showAdminEditMenuPage = function(req,res){
	var itemId = req.params.itemId;
	menu.getMenuDetails(itemId,function(err,rows){
		console.log("Items______"+rows);
		res.render('adminEditMenu',{item:rows});
	});
}

