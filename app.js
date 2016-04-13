/* Standard js modules */
var path = require('path');

/* express modules */
var express = require('express');
var exphbs = require('express-handlebars');

/* Create our express app */
var app = express();

/* View engine setup
 * We don't setup a defaultLayout, and change the extension name from the
 * default .handlebars to the shorter .hbs
 */
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({ defaultLayout: false, extname: '.hbs' }));
app.set('view engine', '.hbs');

/* Static path setup
 * Anything in the public/ folder is now served as static content.
 */
app.use(express.static(path.join(__dirname, 'public')));

/* Setup your routes here.
 * The basic form is to require the js file, and call the view function from
*/
var index = require('./routes/index');
app.use('/', index.view);

/* Export our app so that bin/www can run it. */
module.exports = app;
