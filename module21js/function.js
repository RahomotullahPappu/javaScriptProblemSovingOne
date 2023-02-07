function pappu(num1,num2){
  var result =num1+num2;
  return result;
}

function pa(num1,num2){
  var result =num1-num2;
  return result;
}

function aru(num1,num2){
  var result =num1*num2;
  return result;
}



var totalsum =pappu(10,20);
console.log(totalsum);
var totalsum =pappu(1000,4000);
console.log(totalsum);

var totalsub=pa(10,5);
console.log(totalsub);
var totalsub=pa(10,7);
console.log(totalsub);


var totalmulti=aru(10,5);
console.log(totalmulti);
var totalmulti=aru(10,10);
console.log(totalmulti);



var total = totalsum+totalsub;
console.log(total);

var total = totalsum+totalmulti;
console.log(total);





function wSorry(){
  for(var i=0; i<=100; i++){
    console.log(i,'Sorry');
  }
}

function love(){
  for(var i=0; i<=100; i++){
    console.log(i,'I love you');
  }
}

wSorry();
love();



