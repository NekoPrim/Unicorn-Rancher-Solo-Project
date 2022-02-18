const express = require('express');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

const router = express.Router();

// Handles Ajax request for feedback
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

router.get('/', rejectUnauthenticated, (req, res) => {
    
    let queryText = '';

    // only admin can access
    if (req.user.authLevel === 'ADMIN') {
    // setup SQL command
        queryText = `
        SELECT
            ROUND(AVG("navigation"),1) AS "avg_nav",
            ROUND(AVG("understanding"),1) AS "avg_und",
            ROUND(AVG("fun"),1) AS "avg_fun"
        FROM "feedback";
        `;
    }

    // send command to feedback database
    pool.query(queryText)
        .then((results) => {
            console.log('pool feedback GET results', results.rows);
            res.send(results.rows);
        })
        .catch((err) => {
            console.log('pool feedback GET ERROR!', err);
            res.sendStatus(500);
        })
})

router.get('/comments', rejectUnauthenticated, (req, res) => {
    
    let queryText = '';

    // only admin can access
    if (req.user.authLevel === 'ADMIN') {
    // setup SQL command
        queryText = `
            SELECT
                "user"."username",
                "feedback"."comments",
                "feedback"."date"
            FROM "user"
            JOIN "feedback"
                ON "user"."id" = "feedback"."user_id"
            ORDER BY "date" ASC;
            `;
    }

    // send command to feedback database
    pool.query(queryText)
        .then((results) => {
            console.log('pool comments GET results', results.rows);
            res.send(results.rows);
        })
        .catch((err) => {
            console.log('pool comments GET ERROR!', err);
            res.sendStatus(500);
        })
})


module.exports = router;