// Require Express, declare router and require project JSON data
const express = require('express');
const {projects} = require('../data.json');

const router = express.Router();

// Create routes for main and about pages
// On main page, pass projects data into route via locals variable
router.get('/', (req, res) => {
    res.locals.projects = projects;
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about');
});

// Export Router
module.exports = router;
