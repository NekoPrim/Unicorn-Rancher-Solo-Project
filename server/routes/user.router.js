const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);

  const queryText = `INSERT INTO "user" (username, password)
    VALUES ($1, $2) RETURNING id`;
  pool
    .query(queryText, [username, password])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

// handles Ajax request for updating profile pic
router.put('/pic', (req, res) => {
  console.log('user pic PUT request', req.body);
  console.log('user id PUT request', req.user.id)

  // setup SQL command
  const queryText = `
    UPDATE "user"
    SET "profile_image" = $1
    WHERE "id" = $2;
  `;

  const queryParams = [
    req.body.profile_image,
    req.user.id
  ];

  // send command to user database
  pool.query(queryText, queryParams)
    .then(() => {
      console.log('your so good at changing things!')
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('pool username PUT ERROR!', err);
      res.sendStatus(500);
    });
});

// handles Ajax request for updating username
router.put('/username', (req, res) => {
  console.log('username PUT request', req.body);
  console.log('user id PUT request', req.user.id)

  // setup SQL command
  const queryText = `
    UPDATE "user"
    SET "username" = $1
    WHERE "id" = $2;
  `;

  const queryParams = [
    req.body.username,
    req.user.id
  ];

  // send command to user database
  pool.query(queryText, queryParams)
    .then(() => {
      console.log('your so good at changing things!')
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('pool username PUT ERROR!', err);
      res.sendStatus(500);
    });
});

// handles Ajax request for user to delete own profile
router.delete('/', (req, res) => {
  console.log('in router delete user id', req.user.id);

  // setup SQL command
  const queryText = `
    DELETE FROM "user"
    WHERE "id" = $1;
  `;

  const queryParams = [ req.user.id ];

  // send command to user database
  pool.query(queryText, queryParams)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('pool user DELETE ERROR!', err);
      res.sendStatus(500);
    })
});

// handles Ajax request for admin to GET all users
router.get('/allUsers', (req, res) => {
  console.log('req.user:', req.user.authLevel);

  let queryText = '';

  // setup conditonal for admin
  if (req.user.authLevel === 'ADMIN') {
    // setup SQL command
    queryText = `
      SELECT  
        "id",
        "username",
        "profile_image",
        "authLevel"
      FROM "user"
      ORDER BY "username" ASC;
    `;
  }

  // send command to database
  pool.query(queryText)
    .then((results) => {
      res.send(results.rows);
    })
    .catch((err) => {
      console.log('pool admin GET ERROR!', err);
      res.sendStatus(500);
    });
});

// handles Ajax request for admin to delete user profile
router.delete('/:id', (req, res) => {
  console.log('user id to delete', req.params.id);

  let queryText = '';

  //make sure only admin can do
  if (req.user.authLevel === 'ADMIN') {
    // setup SQL command
    queryText = `
      DELETE FROM "user"
      WHERE "id" = $1;
    `;
  }

  const queryParams = [ req.params.id ];

  // send command to user database
  pool.query(queryText, queryParams)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('pool admin DELETE ERROR!', err);
      res.sendStatus(500);
    });
});

module.exports = router;
