const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// Handles Ajax request for questions
router.get('/:id', (req, res) => {
    console.log('question req.params', req.params.id);

    // setup SQL command
    const queryText = `
        SELECT * FROM "question"
        WHERE "id" = $1;
    `;

    const queryParams = [ req.params.id ];

    // request data from question database
    pool.query(queryText, queryParams)
        .then((result) => {
            console.log('question data', result.rows);
            res.send(result.rows);
        })
        .catch((err) => {
            console.log('question pool GET error', err);
        });
});


module.exports = router;