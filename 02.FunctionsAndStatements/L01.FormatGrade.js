function printGrade(number) {
  const grade = () => {
    if (number < 3) return `Fail (2)`;
    else if (number < 3.5) return `Poor (${number.toFixed(2)})`;
    else if (number < 4.5) return `Good (${number.toFixed(2)})`;
    else if (number < 5.5) return `Very good (${number.toFixed(2)})`;
    else return `Excellent (${number.toFixed(2)})`;
  };

  console.log(grade(number));
}

printGrade(2.99);
