// let number = [22, 54, 76, 92, 43, 33, 56, 89, -88, -43];


// if(number<80){
//   console.log(number);
// }

const array = [-1,0,3,100, 99, 2, 99];

function biggestNumberInArray(arr) {
  var m = -Infinity,
    i = 0,
    n = arr.length;
  for (; i != n; ++i) {
    if (arr[i] > m) {
      m = arr[i];
    }
  }
  return m;
}

console.log(biggestNumberInArray(array));
