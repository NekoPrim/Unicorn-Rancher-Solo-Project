const express = require('express');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

const router = express.Router();

// Handles Ajax request for badge
router.post('/', rejectUnauthenticated, (req, res) => {

    // setup SQL command
    const queryText = `
        INSERT INTO "feedback"
        ( "navigation", "understanding", "fun", "comments" )
        VALUES
        ( $1, $2, $3, $4 );
    `;

    const queryParam = [

    ]

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