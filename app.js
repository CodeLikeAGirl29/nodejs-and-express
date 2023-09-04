/**************************************
Lindsey Howard
Team Treehouse: JavaScript Full Stack Techdegree
Project 6: Static Node.js and Express Site
**************************************/

const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const projectRoutes = require("./routes/projects");

// Looks if port exists, or use port 3300
const port = process.env.PORT || 3300;
app.use("/static", express.static("public"));

// using pug
app.set("view engine", "pug");

// defining routes
const routes = require("./routes/index");

app.use(routes);
app.use(projectRoutes);

// page npt found error
app.use(function (req, res, next) {
	const err = new Error("Page is Not Found");
	err.status = 404;
	console.error(
		`An error occured on route ${req.originalUrl} with message: ${err.message} and status: ${err.status}`
	);
	next(err);
});

// more error handling
app.use((err, req, res, next) => {
	res.locals.error = err;
	res.status(err.status || 500);
	res.render("error", {
		stack: err.stack
	});
});

// start the server
app.listen(port, () => {
	console.log(`The server is running on localhost:${port}`);
});
