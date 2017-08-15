var die = {
  size: 10,
  totalRolls: 1,
  roll: function() {
    return Math.ceil(this.size * Math.random());
  }
};

die.size = 6;
console.log(die.size);

console.log(die.roll());
console.log(die.roll());
console.log(die.roll());

console.log(die);
