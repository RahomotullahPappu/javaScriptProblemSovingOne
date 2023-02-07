// function gradeCalculator(score) {
//   if (score >= 80) {
//     return 'A+';
//   } else if (score >= 70) {
//     return 'A';
//   } else if (score >= 60) {
//     return 'A-';
//   } else if (score >= 50) {
//     return 'B';
//   } else if (score >= 40) {
//     return 'C';
//   } else if (score >= 33) {
//     return 'D';
//   } else {
//     return 'F';
//   }
// }

// const grade = gradeCalculator(87);
// console.log(`You got a(n) ${grade}`);


// ................................................



// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("foobar");
//   } else {
//     console.log(i);
//   }
// }


// ................................................


// for (let i = 1; i <= 100; i++) {
//   if (i % 5 === 0) {
//     console.log("bar");
//   } else {
//     console.log(i);
//   }
// }

// ..................................................

// for (let i = 1; i <= 50; i++) {
//   if (i % 5 === 0) {
//     console.log("foo");
//   } else {
//     console.log(i);
//   }
// }

// ........................................................


// Fibonacci seres
function fibonacci(n) {
  let fib = [0, 1];

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i-1] + fib[i-2];
  }

  return fib;
}

console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

