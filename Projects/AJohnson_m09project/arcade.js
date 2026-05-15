// constants

// node modules
const EventEmitter = require('events');

// arcade eventemitter
const arcade = new EventEmitter();

// get user input
const playername = process.argv[2] || 'Player1';
const playerscore = parseInt(process.argv[3]) || 0;

// data manipulation example 1: convert player name to uppercase
const displayname = playername.toUpperCase();

// data manipulation example 2: math operation to calculate bonus points
const bonuspoints = Math.floor(playerscore * 0.10);
const totalscore = playerscore + bonuspoints;

// event 1: welcome player
arcade.on('welcome', (name) => {
    console.log(`Welcome to the arcade, ${name}!`);
});

// event 2: display score (accepts arguments for score, bonus, and total)
arcade.on('score', (score, bonus, total) => {
    //  data manipulation example 3: string concatenation with math
console.log(`Your score is ${score} + ${bonus} bonus = ${total} TOTAL POINTS!`);
});

// event 3: game over
arcade.on('gameover', () => {
    // data manipulation example 4

    let rank;
    if (totalscore >= 2000) {
        rank = 'how the hell did you get here';
    } else if (totalscore >= 1000) {
        rank = 'discord mod levels';
    } else if (totalscore >= 500) {
        rank = 'nice, but go back to tf2';
    } else {
        rank = 'were you even trying?';
    }

    console.log(`Game Over! Your final rank is: ${rank}`);
});

// trigger events
arcade.emit('welcome', displayname);
arcade.emit('score', playerscore, bonuspoints, totalscore);
arcade.emit('gameover');