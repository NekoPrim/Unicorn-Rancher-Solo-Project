const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const levelRouter = require('./routes/level.router');
const questionRouter = require('./routes/question.router');
const answerRouter = require('./routes/answer.router');
const userAnswerRouter = require('./routes/userAnswer.router');
const pointsRouter = require('./routes/points.router');
const userBadgeRouter = require('./routes/userBadge.router');
const badgeRouter = require('./routes/badge.router');
const feedbackRouter = require('./routes/feedback.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/level', levelRouter);
app.use('/api/question', questionRouter);
app.use('/api/answer', answerRouter);
app.use('/api/userAnswer', userAnswerRouter);
app.use('/api/points', pointsRouter);
app.use('/api/userBadge', userBadgeRouter);
app.use('/api/badge', badgeRouter);
app.use('/api/feedback', feedbackRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
