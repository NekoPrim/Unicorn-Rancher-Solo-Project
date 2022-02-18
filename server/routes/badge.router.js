const express = require('express');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

const router = express.Router();

// Handles Ajax request for badge
router.get('/', rejectUnauthenticated, (req, res) => {

    // setup SQL command
    const queryText = `
        SELECT * FROM "badge";
    `;

    // request data from badge database
    pool.query(queryText)
        .then((result) => {
            console.log('badge data', result.rows);
            res.send(result.rows);
        })
        .catch((err) => {
            console.log('badge pool GET error', err);
        });
});


module.exports = router;