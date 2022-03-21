const express = require("express");
const router = express.Router();
const data = require("../data.json");
const { projects } = require("../data.json");

// root route
router.get("/", (req, res) => {
	res.render("index", { projects });
});

// route for about page
router.get("/about", (req, res) => {
	res.render("about");
});

module.exports = router;
