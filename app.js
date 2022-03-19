/**************************************
Lindsey Howard
Team Treehouse: JavaScript Full Stack Techdegree
Project 6: Static Node.js and Express Site 
**************************************/

const express = require("express");
const data = require("./data.json").projects;
const path = require("path");
const app = express();
const port = process.env.PORT || 3300;

app.set("view engine", "pug"); //use pug
app.set("views", path.join(__dirname, "views")); //hook the pug up with express

app.use("/static", express.static("public"));
app.use("/static", express.static(path.join(__dirname, "public"))); //use express static to serve up static file in public
app.use("/images", express.static(path.join(__dirname, "images"))); //serve up images as static files

app.get("/", (req, res) => {
	//render index page and pass data to pug template
	res.render("index", {
		data,
	});
});

app.get("/about", (req, res) => {
	res.render("about"); // renders the about page
});

app.get("/project/:id", (req, res, next) => {
	// renders the project page
	res.render("project", {
		data,
		data: data[req.params.id],
	});
});

/* ERROR HANDLERS */

/* 404 handler to catch undefined or non-existent route requests */
app.use((req, res, next) => {
	const err = new Error("Not found");
	err.status = 404; // handles the 404 errors
	next(err);
});

app.use((err, req, res, next) => {
	const status = err.status || 500; // the default error handler
	res.status(status);
	res.render("error", { error: err }); // render error in error template
});

// Setting up the Server
app.listen(port, () => {
	console.log(`Server is now running on ${port}.`);
});
