var dice = require('./dice');
var dice1 = require('./dice');

console.log(dice);

var die = dice.die;

die.size = 6;
console.log(die.size);

console.log(die.roll());
console.log(die.roll());
console.log(die.roll());

console.log(die);
console.log(dice1);
