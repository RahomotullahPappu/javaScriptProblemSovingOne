// function add (number1, number2){
//   console.log(number1, number2);
//   let sum = number1 + number2;
//   return sum

// }

// let result = add(12,15);
// console.log(result);


// const names = ['abul', 'babul', 'kaul', 'mabul', 'dabul', 'babul', 'kabul', 'cabul', 'abul', 'babul'];

// function removeDuplicate(names){
//   const unique = [];
//   for(let i=0; i < names.length; i++ ){
//     const name = names[i];
//     if(unique.includes(name)=== false){
//       unique.push(name);
//     }
//   }
//   return unique;
// }

// const uniqueNames = removeDuplicate(names);
// console.log(uniqueNames);



// function triangleArea(a, b, c) {
//   let s = (a + b + c) / 2;
//   let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//   return area;
// }

// let result = triangleArea(10,15,20);
// console.log(result);




// function isPrime(num) {
//   // if (num <= 1) {
//   //   return false
//   // };

//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// let result = isPrime(14);
// console.log(result);


function mindGame(positiveNumber){

  // this is the calculation of multiplication,addition, division, subtruction 
    let mul = positiveNumber * 3;
  
    let add = mul + 10;
  
    let div = add / 2;
  
    let sub = div - 5;
  
    return sub;
  
  }
 

let result = mindGame(5);
console.log(result);