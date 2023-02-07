// let num = 1;
// while(num<=10){
//   console.log(num,'Pappu');
//   num++
// }
// console.log('...................................')

// let num1 = 0;
// for(let i=1; i<=10; i++){
//   console.log(i,'Aru');
// }

// function addNumber(num1,num2){
//   console.log(num1,num2);

//   let sum = num1%num2;
//   return sum;
// }

// let result = addNumber(50,30);
// console.log(result);




// function mileTokilo(mile){
//   // const mile = (0);
//   const km = (mile*1.609).toFixed(2);
//   return km
// }

// let result = mileTokilo(10);
// console.log(result);


function kiloTomilo(kilo){
  // console.log(kilo);
  const ml = (kilo/1.609).toFixed(2);
  return ml;
}

let result = kiloTomilo(4);
console.log(result);
