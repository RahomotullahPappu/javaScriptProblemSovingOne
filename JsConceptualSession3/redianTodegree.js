// function radiansToDegrees(rad) {
//   return (rad * 180) / Math.PI;
  
// }

// // let rad = 3;
// let degrees = radiansToDegrees(4);
// console.log(degrees); // Output: 89.95437383553924





function radiansToDegrees(radian){
  const PI = 3.14159265359;
  const degree = (radian * (180/PI)).toFixed(2);
  return degree
}

let result = radiansToDegrees(199);
console.log(result);


