/**************************************
Lindsey
Team Treehouse: JavaScript Full Stack Techdegree
Project 6: Static Node.js and Express Site
**************************************/

// Require Express
const express = require('express');

// Configure Express and static files
const app = express();
app.set('view engine', 'pug');
app.use('/static', express.static('public'));

// Declare and configure routes
const mainRoutes = require('./routes');
const projectRoutes = require('./routes/projects');

app.use(mainRoutes);
app.use('/projects', projectRoutes);

// Catch 404 errors and pass into next .use() function
app.use((req, res, next) => {
    const err = new Error('Page Not Found');
    err.status = 404;
    next(err);
});

// Catch errors: if 404 render error page with 'not found', otherwise pass 500 error to page
app.use((err, req, res, next) => {
    if (!err.status) {
        err.status = 500;
        err.message = 'Internal Server Error';
    }
    console.log(err);
    res.render('error', {err});
});

// Create listener on specified port
const port = 3001;
app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
});
