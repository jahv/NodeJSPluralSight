var getDieRoll = function() {
  console.log("Roling a die");
  return Math.ceil(6 * Math.random());
};

var rollOne = getDieRoll();
console.log(rollOne);
