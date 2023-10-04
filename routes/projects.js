// Require Express, declare router and require project JSON data
const express = require('express');

const router = express.Router();
const {projects} = require('../data.json');

// Redirect if user goes to 'server/projects/' without project id as query param
router.get('/', (req, res) => {
    res.redirect('/');
});

/* Create routes for projects pages,
 * Pass ID as query param
 * Pass project JSON data into route
 */
router.get('/:id', (req, res) => {
    const {id} = req.params;
    const project = projects[id - 1];

    res.render('projects', {project});
});

// Export Router
module.exports = router;
