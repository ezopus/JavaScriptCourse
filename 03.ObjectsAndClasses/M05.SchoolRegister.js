function gradeStudents(arr) {
  class Student {
    constructor(name, grade, score) {
      this.name = name;
      this.grade = grade;
      this.score = score;
    }

    learn() {}
  }
  const students = arr.reduce((acc, curr) => {
    const [nameString, gradeString, scoreString] = curr.split(", ");
    const name = nameString.split(" ")[2];
    const grade = Number(gradeString.split(" ")[1]);
    const score = Number(scoreString.split(" ")[5]);

    const student = new Student(name, grade, score);

    acc.push(student);
    return acc;
  }, []);

  for (let index = 1; index < 12; index++) {
    let avgScore = 0;
    const nextYearStudents = [];
    students
      .filter((st) => st.score >= 3 && st.grade === index)
      .forEach((st) => {
        avgScore += st.score;
        nextYearStudents.push(st.name);
      });
    if (nextYearStudents.length > 0) {
      console.log(`${index + 1} Grade`);
      console.log(`List of students: ${nextYearStudents.join(", ")}`);
      console.log(
        `Average annual score from last year: ${(
          avgScore / nextYearStudents.length
        ).toFixed(2)}`
      );
      console.log();
    }
  }
}

// gradeStudents([
//   "Student name: George, Grade: 5, Graduated with an average score: 2.75",
//   "Student name: Alex, Grade: 9, Graduated with an average score: 3.66",
//   "Student name: Peter, Grade: 8, Graduated with an average score: 2.83",
//   "Student name: Boby, Grade: 5, Graduated with an average score: 4.20",
//   "Student name: John, Grade: 9, Graduated with an average score: 2.90",
//   "Student name: Steven, Grade: 2, Graduated with an average score: 4.90",
//   "Student name: Darsy, Grade: 1, Graduated with an average score: 5.15",
// ]);

gradeStudents([
  "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
  "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
  "Student name: George, Grade: 8, Graduated with an average score: 2.83",
  "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
  "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
  "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
  "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
  "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
  "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
  "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
  "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
  "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00",
]);
