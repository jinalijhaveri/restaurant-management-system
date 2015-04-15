
/*
 * GET home page.
 */

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
}

exports.showReservation = function(req,res){
	res.render('reservation');
}

exports.showBlog = function(req,res){
	res.render('blog');
}