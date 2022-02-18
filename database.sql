
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (255) UNIQUE NOT NULL,
    "password" VARCHAR (1024) NOT NULL,
	"profile_image" VARCHAR(1042) DEFAULT 'images/profile-image.jpeg'
    "authLevel" VARCHAR (255) DEFAULT 'USER'
);

CREATE TABLE "badge" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (255),
    "image" VARCHAR (1024)
);

CREATE TABLE "user_badge" (
    "id" SERIAL PRIMARY KEY,
    "user_id" integer REFERENCES "user"(id) ON DELETE CASCADE,
    "badge_id" integer REFERENCES "badge"(id) ON DELETE CASCADE
);

INSERT INTO "badge"
( "name", "image" )
VALUES
( 'noobIcorn', 'images/noobicon.jpeg' ),
( 'uniCorny', 'images/uniCorny.jpeg' ),
( 'uniCan', 'images/uniCan.jpeg' ),
( 'unicornuCopia', 'images/unicornuCopia' );

CREATE TABLE "level" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (255),
	"number" INTEGER
);

CREATE TABLE "question" (
	"id" SERIAL PRIMARY KEY,
	"content" VARCHAR (1024),
	"level_number" INTEGER REFERENCES "level",
	"question_image" VARCHAR (1024)
);

CREATE TABLE "answer" (
	"id" SERIAL PRIMARY KEY,
	"question_id" INTEGER REFERENCES "question",
	"content" VARCHAR (255),
	"response" VARCHAR (255),
	"points" INTEGER
);

CREATE TABLE "user_answer" (
    "id" SERIAL PRIMARY KEY,
    "user_id" integer REFERENCES "user"(id) ON DELETE CASCADE,
    "answers_id" integer REFERENCES "answer"(id) ON DELETE CASCADE
);

INSERT INTO "level"
( "name", "number" )
VALUES
( 'Find Some Unicorns!', 1 );

INSERT INTO "question"
( "content", "level_number", "question_image" )
VALUES
( 'You’re on a canoe and just around the river bend you see some unicorns on the shore.  Luckily you have a rope. What do you do?', 1, 'images/question-1.jpeg' ),
( 'You’re riding your space board downtown and a herd of unicorns run down main street. What do you do?', 1, 'images/question-2.jpeg' ),
( 'You’re down by the river to go fishing and you see some unicorns relaxing. What do you do?', 1, 'images/question-3.jpeg' ),
( 'You’re hanging out at the local bar and some unicorns enter. What do you do?', 1, 'images/question-4.jpeg' ),
( 'You’re part of a marching band and you’re parading down the road.  There’s some unicorns on the sidewalk, watching.  What do you do?', 1, 'images/question-5.jpeg' ),
( 'You’re on a flight out to the Bermuda Triangle when you notice some unicorns in first class.  What do you do?', 1, 'images/question-6.jpeg' ),
( 'You’re in the mall, shopping for an epic outfit when you notice a group of unicorns over by the fountain.  What do you do?', 1, 'images/question-7.jpeg' ),
( 'You’re in the snack line at the movie theater when you notice some unicorns cue up behind you. What do you do?', 1, 'images/question-8.jpeg' ),
( 'You’re at the circus, trying to distract yourself from your mundane life, when you notice some unicorns getting hassled by some clowns.  What do you do?', 1, 'images/question-9.jpeg' ),
( 'You’re at Walmart, grocery shopping, when you notice some unicorns arguing with a worker in the bread aisle. What do you do?', 1, 'images/question-10.jpeg' );

INSERT INTO "answer"
( "question_id", "content", "response", "points" )
VALUES
( 1, 'Use the rope to try to lasso some unicorns from your canoe.', 'You lasso’d a unicorn.', 1 ),
( 1, 'Use the rope to tie your canoe to shore and ask the unicorns to board your vessel.', 'The unicorns agree to board!', 3 ),
( 1, 'Tie the rope to your canoe and swim to shore while pulling your canoe.', 'You almost drown! A couple of unicorns save you.' , 2 ),
( 1, 'Throw the rope into the water! Maybe they’ll come help you get it back?', 'You got no rope and no unicorns!', 0 ),
( 2, 'You kick your space board into the herd to possibly trip some unicorns.', 'You managed to trip a unicorn…. But they may need medical attention!', 1 ),
( 2, 'You ask the unicorns if they want to try riding your space board.', 'The unicorns are intrigued and a few stop to try.', 2 ),
( 2, 'With your space board you speed ahead of the herd, lay down in the road and pretend to be hurt. Maybe they’ll stop to help you!', 'You get trampled! What were you thinking?!', 0 ),
( 2, 'With your space board you race up to the leading unicorn, jump on and lead the unicorns to your ranch.', 'Flawless victory!', 3 ),
( 3, 'Tell the unicorns ‘they’re quite the catch, and you’re reeling to get to know them”.', 'The unicorns find you quite punny!', 3 ),
( 3, 'Tell the unicorns a sob story about how you’re so lonely at your ranch.', 'You’re too pathetic for the unicorns.', 0 ),
( 3, 'Ask if any of the unicorns would like to learn how to fish.', 'A couple unicorns would love to learn how to fish.', 2 ),
( 3, 'Cast your rod and try to hook some unicorns.', 'You catch one but they’re not very thrilled.', 1 ),
( 4, 'Ask if they would like to play pool or darts.', 'Unicorns don’t have hands and now you all feel awkward….', 0 ),
( 4, 'Offer a round of drinks!', 'The drinks lower their inhibitions and they agree to join your ranch.', 3 ),
( 4, 'Offer some bar peanuts to them.', 'One unicorn obliges.', 1 ),
( 4, 'Show off some dance moves on the dance floor.', 'You impressed a couple of unicorns and they join you on the floor.', 2 ),
( 5, 'You stop the band and play some sweet sweet music to the unicorns.', 'The unicorns love your jams and are now your groupies.', 3 ),
( 5, 'You put your heart and soul into your music as you march past them.', 'Your hearty music moves them and a couple unicorns join your marching.', 2 ),
( 5, 'You twirl with your instrument to show off your dexterity.', 'Unfortunately you fall flat on your face and they laugh at you!', 0 ),
( 5, 'You break out into a solo!', 'You flub a little, but you manage to move a unicorn.', 1 ),
( 6, 'You shante up to first class and ask them to join you on your vaca.', 'They’re weirded out, what kind of person invites strangers to their vaca?', 0 ),
( 6, 'You grab the snack cart, push it to first class and offer them snacks.', 'You’re not dressed as a flight attendant, but hey, snacks are snacks!', 2 ),
( 6, 'You notice that there’s some bread on their tray, so you run over and slap that bread away!', 'Good thing you knew bread is poisonous to unicorns, they owe you their lives', 3 ),
( 6, 'You offer your sudoku puzzle book to the boredest looking unicorn.', 'The unicorn thanks you and now you’re best friends!', 1 ),
( 7, 'You throw a penny into the fountain, then look at them and say “I see my wish came true”.', 'They don’t get it…', 0 ),
( 7, 'You run up to them asking them what store has the most epic outfit.', 'How did you know unicorns are fashion experts!', 3 ),
( 7, 'You pay a kid $5 to splash the unicorns, then you come up with a towel to help them dry off.', 'Most of the unicorns fall for your trick and thank you.', 2 ),
( 7, 'You buy some flan and then go offer it to them, saying that you bought too much and if they want it.', 'A unicorn accepts it and is surprised how much they liked it!', 1 ),
( 8, 'You buy all the popcorn, forcing them to pop some fresh popcorn for the unicorns.', 'Nothing is better than fresh popcorn!', 2 ),
( 8, 'You notice that some of the unicorns are prancing around like they need to use the bathroom, you offer to hold their spot in line.', 'Ummm, they were actually dancing, but thanks for offering.', 1 ),
( 8, 'Strike up a convo with them while you wait.', 'Who knew you guys were going to the same movie! Besties!', 3 ),
( 8, 'You turn around declaring that the snack line is going the wrong way and lock eyes with them.', 'Can you be any weirder? Just no…', 0 ),
( 9, 'You march on over and tell the clowns to stop clowning around!', 'The clowns squirt water from their flowers into your face, making you look like a wet rat, but they go away.', 1 ),
( 9, 'You jump on a unicycle and start juggling some potatoes while hula hooping!', 'You out clown the clowns, which is so not cool.  Now they’re hassling you!', 1 ),
( 9, 'Life is hard enough and you don’t really feel like confronting your coulrophobia today.', 'Yeah, I don’t blame you, clowns are pretty creepy.', 0 ),
( 9, 'You run up to the clowns in a panic, telling them that the ringmaster was looking for them!', 'They run off frazzled! Don’t want to upset the ringmaster!', 3 ),
( 10, 'As you pass them in the aisle, you remark “there could be less bread”.', 'yes yes, the unicorns nod in agreeance.', 2 ),
( 10, 'You run down the aisle, pulling as much bread off the shelves as you scream DEAD BREAD!', 'That’s a bit over the top, but one unicorn likes your passion.', 1 ),
( 10, 'You march down the aisle while declaring it’s an atrocity seeing all this bread.', 'The unicorns are glad your views on bread align with them.', 3 ),
( 10, 'You go down the aisle, filling your cart up with all the bread.', 'You revolt the unicorns, away with your bread!', 0 );

CREATE TABLE "feedback" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER REFERENCES "user"(id) ON DELETE CASCADE,
    "navigation" INTEGER NOT NULL,
    "understanding" INTEGER NOT NULL,
    "fun" INTEGER NOT NULL,
    "comments" TEXT,
    flagged boolean DEFAULT FALSE,
    date date NOT NULL DEFAULT CURRENT_DATE
);