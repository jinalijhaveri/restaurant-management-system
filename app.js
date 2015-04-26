
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

var category = require('./routes/category');
var menu = require('./routes/menu');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/aboutUs',routes.aboutUs);
app.get('/menu',routes.showMenu);
app.get('/contacts',routes.showContacts);
app.get('/reservation',routes.showReservation);
app.get('/blog',routes.showBlog);
app.get('/adminHome',routes.showAdminHomePage);
app.get('/createOrder',routes.showNewOrderPage);
app.get('/addCategory',routes.showAddCategory);
app.get('/addMenu',routes.showAddMenu);
app.get('/showAdminMenu',menu.showAdminMenuPage);
app.get('/showAdminEditMenu/:itemId',menu.showAdminEditMenuPage);


app.get('/categories',category.getCategories);
app.post('/categories',category.addNewCategory);
app.put('/categories',category.updateCategory);
app.post('/deleteCategory',category.deleteCategory);

app.get('/category/:categoryId',menu.getMenuByCategory);
app.post('/menuItem',menu.addMenuItem);
app.post('/updateMenuItem',menu.updateMenuItem);
app.post('/deleteMenuItem',menu.deleteMenuItem);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
