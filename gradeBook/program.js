var gradeBook = require("./lib/gradeBook").gradeBook;

/**
 * Before express
 */
// for(var i=2; i<process.argv.length; i++) {
//   gradeBook.addGrade(parseInt(process.argv[i]));
// }
// console.log(gradeBook.getAverage());
// console.log(gradeBook.getLetterGrade());

/**
 * With express
 */
var express = require("express");
var app = express();

app.get("/", function(req, res) {
  res.send("Hello, World!");
});

/**
 * /grade?grades=90,80,70
 */
app.get("/grade", function(req, res){
  var grades = req.query.grades.split(",");
  for(var i=0; i<grades.length; i++) {
    gradeBook.addGrade(parseInt(grades[i]));
  }
  var average = gradeBook.getAverage();
  var gradeLetter = gradeBook.getLetterGrade();
  res.send("Your average is " + average + ", grades is " + gradeLetter);
});

app.listen(3000);
console.log("Server ready...");