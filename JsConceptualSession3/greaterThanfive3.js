// let number = [7, 4, -4, 6, -6, 5, -8, 9, -5, 10];

// for(let i=0; i< number.length; i++){
//   const element = number[i];
//   // console.log(element);

//   if(element>5){
//     console.log(i)
//   }
//   else{
//     console.log(i)
//   }
// }


function greterThanfive(numbers){
  let count = 0;

  for(let i=0; i< numbers.length; i++){
  const element = numbers[i];
  if(element > 5){
    count = count +1;
  }
}
  return count;
}

let result = greterThanfive([7, 4, -4, 6, -6, 5, -8, 9, -5, 10]);
console.log(result);