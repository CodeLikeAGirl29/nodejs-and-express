const express = require("express");
const router = express.Router();
const data = require("../data.json");

// Dynamic "project" routes
router.get("/projects/:paramId", (req, res, next) => {
	// adding data
	const { paramId } = req.params;
	// loop through projects
	for (let i = 0; i < data.projects.length; i++) {
		// if the project id matches the url parameter id
		if (data.projects[i].id === paramId) {
			// return the template that matches that id
			return res.render("project", data.projects[i]);
		}
	}
	return next();
});

// exporting the router
module.exports = router;
