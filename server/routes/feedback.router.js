const express = require('express');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

const router = express.Router();

// Handles Ajax request for badge
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('feedback router data', req.body);

    // setup SQL command
    const queryText = `
        INSERT INTO "feedback"
        ( "user_id", "navigation", "understanding", "fun", "comments" )
        VALUES
        ( $1, $2, $3, $4, $5 );
    `;

    const queryParams = [
        req.user.id,
        req.body.navigation,
        req.body.understanding,
        req.body.fun,
        req.body.comments
    ];

    // request data from badge database
    pool.query(queryText, queryParams)
        .then(() => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log('feedback pool POST error', err);
        });
});


module.exports = router;