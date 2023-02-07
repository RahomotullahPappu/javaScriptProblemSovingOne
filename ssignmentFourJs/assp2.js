// function evenOdd(name){
//   console.log(name);

//   let count = 0;
//   for (let i = 0; i < name.length; i++){

//     if(name[i]<0){
//       count =count +1;
//     }

//   }
//   return count;

// }

// let result = evenOdd(Phero);
// console.log(result)











// function evenOdd(input) {
//   return input.length % 2 === 0 ? "even" : "odd";
// }
// let result = evenOdd('chatgpt');
// console.log(result);



// function evenOdd(str) {

//   if (str.length % 2 === 0) {
//     return 'Even';
//   } 
  
//   else {
//     return 'Odd';
//   }
// }

// let input = 'chat gpt';
// console.log(evenOdd(input));





function evenOdd(str){
  
  // this condition is If the result of str.length % 2 is 0, the string length is even, and the function returns 'Even'.
  if(str.length % 2 === 0){
    return 'even';
  }
  
  // this condition is  If the result is non-zero, the string length is odd, and the function returns 'Odd'.
  else{
    return 'odd'
  }
}

let result = evenOdd('Phero');
console.log(result);