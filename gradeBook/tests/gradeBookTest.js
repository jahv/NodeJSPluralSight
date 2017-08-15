var gradeBook = require('../lib/gradeBook').gradeBook;

exports["setUp"] = function(callback) {
  gradeBook.reset();
  callback();
};

exports["Can add new grade"] = function(test) {
  gradeBook.addGrade(90);
  var count = gradeBook.getCountOfGrades();

  test.equal(count, 1);

  test.done();
};

exports["Can average grades"] = function(test) {
  gradeBook.addGrade(100);
  gradeBook.addGrade(50);

  var average = gradeBook.getAverage();

  test.equal(average, 75);
  test.done();
};

exports["Can compute letter grade"] = function(test) {
  gradeBook.addGrade(100);
  gradeBook.addGrade(90);
  var letter = gradeBook.getLetterGrade();
  test.equal(letter, 'A');
  gradeBook.reset();

  gradeBook.addGrade(90);
  gradeBook.addGrade(80);
  var letter = gradeBook.getLetterGrade();
  test.equal(letter, 'B');
  gradeBook.reset();

  gradeBook.addGrade(80);
  gradeBook.addGrade(70);
  var letter = gradeBook.getLetterGrade();
  test.equal(letter, 'C');
  gradeBook.reset();

  test.done();
};
