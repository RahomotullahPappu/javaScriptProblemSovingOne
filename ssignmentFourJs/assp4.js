// function findingBadData(number) {
 
//   let count = 0;
//   for (let i = 0; i < number.length; i++) {

//     //this condition is If the value is less than 0 then the negative value will count
//       if (number[i] < 0) {
//           count = count+1;
          
//       }
//   }
//   return count, 'negative';
// }


// let result = findingBadData([-4, -9, -5, -33, -55])
// console.log(result)







function findingBadData(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}

let result = findingBadData([-4, -9, -5, -33, -55])
console.log(result)
