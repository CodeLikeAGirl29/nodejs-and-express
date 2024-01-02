/**************************************
Lindsey
Team Treehouse: JavaScript Full Stack Techdegree
Project 6: Static Node.js and Express Site
**************************************/

// Require Express
const express = require('express');

// Configure Express and static files
const app = express();
app.use('/static', express.static('public'));
app.set('view engine', 'pug');

// Declare and configure routes
const mainRoutes = require('./routes');
const aboutRoutes = require('./routes/about');
const projectRoutes = require('./routes/projects');

app.use(mainRoutes);
app.use('/about', aboutRoutes);
app.use('/projects', projectRoutes);

// Catch 404 errors and pass into next .use() function
app.use((req, res, next) => {
    const err = new Error('Page Not Found');
    err.status = 404;
    next(err);
});

// Catch errors: if 404 render error page with 'not found', otherwise pass 500 error to page
app.use((err, req, res, next) => {
  	res.locals.error = err;
	res.status(err.status);
	console.log(`${err} Status: ${err.status}`);
	res.render('error');
});

// Create listener on specified port
const port = 3001;
app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
});
