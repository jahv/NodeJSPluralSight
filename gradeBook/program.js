var gradeBook = require("./lib/gradeBook").gradeBook;

for(var i=2; i<process.argv.length; i++) {
  gradeBook.addGrade(parseInt(process.argv[i]));
}

console.log(gradeBook.getAverage());
console.log(gradeBook.getLetterGrade());
