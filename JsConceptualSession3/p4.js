

// fibonacci seriss


// const fibo = [0,1];

// for(let i = 2; i<=20; i++){
//   fibo[i]= fibo[i-1] + fibo[i-2];
// }
// console.log(fibo);


function largestNumber(number){
     let largest = number[0];

     for(let i=0; i< number.length; i++){
      const index = i;
      const element = number[index];
      if(element > largest){
        largest = element;
      }
     }
      return largest;



}
const largestValu = largestNumber([23,45,455,45,435,9999,222223]) ;
console.log(largestValu);