const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// Handles Ajax request for user_answer
router.post('/', (req, res) => {
    console.log('userAnswer req.body', req.body.number);
    console.log('userAnswer req.user', req.user.id);

    // setup SQL command
    const queryText = `
        INSERT INTO "user_answer"
        ("user_id", "answers_id")
        VALUES
        ($1, $2);
    `;

    const queryParams = [ req.user.id, req.body.number ];

    // request data from user_answer database
    pool.query(queryText, queryParams)
        .then((result) => {
            console.log('question data', result.rows);
            res.send(result.rows);
        })
        .catch((err) => {
            console.log('question pool GET error', err);
        });
});

// Handles Ajax request to delete user_answer
router.delete('/', (req, res) => {

    // setup SQL command
    const queryText =`
        DELETE FROM "user_answer"
        WHERE "user_id" = $1;
    `;

    const queryParams = [ req.user.id ];

    // send command to user_answer database
    pool.query(queryText, queryParams)
        .then(() => {
            console.log('you`re super good at deleting!')
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log('pool user_answer DELETE ERROR!', err);
            res.sendStatus(500);
        })
});


module.exports = router;