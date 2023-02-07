function isLeapyer (year){
  const reminder = year/4;

  if(reminder == 0 || (reminder % 100 !== 0 && reminder % 4 === 0)){
    return true;
    
  }
  
  else{
    return false
 
  }

}

let result = isLeapyer(2017);
console.log(result);



// function isLeapYear(year) {
//   if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isLeapYear(2000)); // Output: true
// console.log(isLeapYear(2021)); // Output: false






