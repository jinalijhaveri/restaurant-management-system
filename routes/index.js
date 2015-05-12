
/*
 * GET home page.
 */
var connection = require('../model/dbConn');
var objConn = connection.connect();

exports.login1 = function(req, res){
	var email;
	var password;
	var input = JSON.parse(JSON.stringify(req.body));
	   var data = {
	            
	            email    : input.usname,
	            password     : input.pass,
	            
	        };
	   console.log(data.email + data.password);
	  objConn.query("select * from adminlogin where email = '"+data.email+"' and password = '"+data.password+"'", function(err, rows)
			   
			   {
           
	          if (!err){
	        	  if(rows.length!="")
	        	  { 
	        	  //var result= rows[0].id;
	            //  console.log(result);
	        	  console.log("Query successful");
	        	  res.render('adminHomePage');
	        	  }
	        	  else{
	        		  console.log("Error login password dont match");
	        		  res.render('login',{title : ' username and password dont match.'})
		          }
	          }
	          
			   });
}
exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.aboutUs = function(req,res){
	res.render('about');
};

exports.showMenu = function(req,res){
	res.render('menu');
};

exports.showContacts = function(req,res){
	res.render('contacts');
};

exports.showReservation = function(req,res){
	res.render('reservation');
};

exports.showBlog = function(req,res){
	res.render('blog');
};

exports.showAdminHomePage = function(req,res){
	res.render('adminHomePage');
};

exports.showNewOrderPage = function (req,res){
	res.render('newOrder');
};



exports.showAddCategory = function (req,res){
	res.render('addCategory');
};
exports.showAddMenu = function (req,res){
	res.render('addMenu');
};
exports.login = function(req,res){
	res.render('login',{title : ''});
}
