var path = require('path');

var express = require('express');
var exphbs = require('express-handlebars');

var routes = require('./routes/index');
var index = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({ defaultLayout: false, extname: '.hbs' }));
app.set('view engine', '.hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index.view);

module.exports = app;
