var die = {
  size: 10,
  totalRolls: 1,
  roll: function() {
    return Math.ceil(this.size * Math.random());
  }
};

exports.die = die;
