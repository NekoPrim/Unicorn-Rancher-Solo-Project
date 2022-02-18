const express = require('express');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
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

// Handles Ajax request for user badge
router.get('/', rejectUnauthenticated, (req, res) => {

    // setup SQL command
    const queryText = `
        SELECT 
            "badge"."id",
            "badge"."name",
            "badge"."image"
        FROM "badge"
        JOIN "user_badge"
            ON "badge"."id" = "user_badge"."badge_id"
        WHERE "user_badge"."user_id" = $1;
    `;

    const queryParams = [ req.user.id ];

    // request data from user_badge database
    pool.query(queryText, queryParams)
        .then((result) => {
            console.log('points data', result.rows);
            res.send(result.rows);
        })
        .catch((err) => {
            console.log('badge pool GET error', err);
        });
});

module.exports = router;