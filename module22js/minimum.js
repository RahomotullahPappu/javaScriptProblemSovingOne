console.log(Math.min(2, 3, 1));
// Expected output: 1

console.log(Math.min(-2, -3, -1));
// Expected output: -3

const array1 = [2, 3, 1];

console.log(Math.min(...array1));
// Expected output: 1



const num1 = 2;
const num2 = 4;
const num3 = 3;


if(num1 < num2 && num1 < num3){
  console.log('num1 is minimum number');
}
else if(num2 < num1 && num2 < num3){
  console.log('num2 is minimum number');
}
else{
  console.log('num3 is minimum number');
}