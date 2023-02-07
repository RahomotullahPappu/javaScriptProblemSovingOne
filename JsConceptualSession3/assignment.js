// // problem 1

// function mindGame(positiveNumber){

// // this is the calculation of multiplication,addition, division, subtruction 
//   let mul = positiveNumber * 3;

//   let add = mul + 10;

//   let div = add / 2;

//   let sub = div - 5;

//   return sub;

// }


// let result = mindGame(33);
// console.log(result);


// problem 2

// function evenOdd(str){
  
//   // this condition is If the result of str.length % 2 is 0, the string length is even, and the function returns 'Even'.
//   if(str.length % 2 === 0){
//     return 'even';
//   }
  
//   // this condition is  If the result is non-zero, the string length is odd, and the function returns 'Odd'.
//   else{
//     return 'odd'
//   }
// }

// let result = evenOdd('Phero');
// console.log(result);



// // probelm 3

// function isLGSeven(number){
  
//   // input number subtruction of 7
//   let sub = number - 7;

//   // this condition is subtruction If it is smaller than 7, it will return directly
//   if(sub >= sub*2){
//     return sub;
//   }
  
//   // this condition input value 7 greterthan then return the double of input value
//   else if(sub<number){
//     let doubleN = number*2;
//     return doubleN
//   }

//   else{
//     return sub;
//   }
// }


// let result = isLGSeven(15);
// console.log(result)





// // problem 4

// function findingBadData(number) {
 
//   let count = 0;
//   for (let i = 0; i < number.length; i++) {

//     //this condition is If the value is less than 0 then the negative value will count
//       if (number[i] < 0) {
//           count = count+1;
          
//       }
//   }
//   return count;
// }


// let result = findingBadData([-4, -9, -5, -33, -55])
// console.log(result)








// problem 5

function gemsToDiamond(frOne, frTwo, frThree) {

  console.log(frOne, frTwo, frThree)

  let frOneGems = frOne * 21;
  let frTwoGems = frTwo * 32;
  let frThreeGems = frThree * 43;


  let totalDiamod = frOneGems + frTwoGems + frThreeGems;

  if (totalDiamod > 1000 * 2) {
    let dimond = totalDiamod - 2000;
    return dimond
  }

  else if (totalDiamod < 1000 * 2) {
    let dimond = totalDiamod
    return dimond
  }

  else {
    return dimond
  }

}

let result = gemsToDiamond(20, 200, 50);
console.log(result);