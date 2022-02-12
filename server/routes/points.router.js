const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// Handles Ajax request for questions
router.get('/', (req, res) => {

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

    // request data from question database
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