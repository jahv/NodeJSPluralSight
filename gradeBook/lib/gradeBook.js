var gradeBook = {
  _grades: [],

  addGrade: function(newGrade) {
    this._grades.push(newGrade);
  },

  getCountOfGrades: function() {
    return this._grades.length;
  },

  getAverage: function() {
    var counter = 0;
    for(var i=0; i<this._grades.length; i++) {
      counter += this._grades[i];
    }
    return counter / this._grades.length;
  },

  getLetterGrade: function() {
    var average = this.getAverage();
    if(average >= 90) {
      return 'A';
    } else if (average >= 80) {
      return 'B';
    } else if (average >= 70) {
      return 'C';
    } else if (average >= 60) {
      return 'D';
    } else if (average >= 50) {
      return 'E';
    } else {
      return 'F';
    }
  },

  reset: function() {
    this._grades = [];
  }
};

exports.gradeBook = gradeBook;
