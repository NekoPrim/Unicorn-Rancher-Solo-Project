const express = require('express');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for points
router.get('/', rejectUnauthenticated, (req, res) => {

    // setup SQL command
    const queryText = `
        SELECT
	        "answer"."points"
        FROM "user_answer"
        JOIN "answer"
	        ON "user_answer"."answers_id" = "answer"."id"
        WHERE "user_answer"."user_id" = $1;
    `;

    const queryParams = [ req.user.id ];

    // request data from points database
    pool.query(queryText, queryParams)
        .then((result) => {
            console.log('points data', result.rows);
            res.send(result.rows);
        })
        .catch((err) => {
            console.log('question pool GET error', err);
        });
});


module.exports = router;