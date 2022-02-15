const express = require('express');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

const router = express.Router();

// Handles Ajax request for level
router.get('/', rejectUnauthenticated, (req, res) => {

    // setup SQL command
    const queryText = `
        SELECT * FROM "level";
    `;

    // request data from level database
    pool.query(queryText)
        .then((result) => {
            console.log('level data', result.rows);
            res.send(result.rows);
        })
        .catch((err) => {
            console.log('level pool GET error', err);
        });
});


module.exports = router;