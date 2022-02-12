const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// Handles Ajax request for questions
router.post('/', (req, res) => {
    console.log('userBadge req.body', req.body.number);
    console.log('userBadge req.user', req.user.id);

    // setup SQL command
    const queryText = `
        INSERT INTO "user_badge"
        ("user_id", "badge_id")
        VALUES
        ($1, $2);
    `;

    const queryParams = [ req.user.id, req.body.number ];

    // request data from question database
    pool.query(queryText, queryParams)
        .then((result) => {
            // console.log('question data', result.rows);
            // res.send(result.rows);
        })
        .catch((err) => {
            console.log('question pool GET error', err);
        });
});

module.exports = router;