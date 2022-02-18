const express = require('express');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

const router = express.Router();

// Handles Ajax request for answer
router.get('/:id', rejectUnauthenticated, (req, res) => {
    console.log('answer req.params', req.params.id);

    // setup SQL command
    const queryText = `
        SELECT * FROM "answer"
        WHERE "question_id" = $1;
    `;

    const queryParams = [ req.params.id ];

    // request data from answer database
    pool.query(queryText, queryParams)
        .then((result) => {
            console.log('answer data', result.rows);
            res.send(result.rows);
        })
        .catch((err) => {
            console.log('question pool GET error', err);
        });
});


module.exports = router;