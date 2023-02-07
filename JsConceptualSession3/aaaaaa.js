
function mindGame(positiveNumber){
// this is the calculation of multiplication,addition, division, subtruction
let mul = positiveNumber * 3;
let add = mul + 10;
let div = add / 2;
let sub = div - 5;
return sub;
}


function evenOdd(str){
// this condition is If the result of str.length % 2 is 0, the string length is even, and the function returns 'Even'.
if(str.length % 2 === 0){
return 'even';
}
// this condition is If the result is non-zero, the string length is odd, and the function returns 'Odd'.
else{
return 'odd'
}



}
function isLGSeven(inputnNumber){
// input number subtruction of 7
let sub = inputnNumber - 7;
// this condition is subtruction If it is smaller than 7, it will return directly
if(sub >= sub * 2){
return sub;
}
// this condition input value 7 greterthan then return the double of input value
else if(sub < inputnNumber){
let inputnNumberDouble = inputnNumber * 2;
return inputnNumberDouble
}
else{
return sub;
}


}
function findingBadData(number) {
let count = 0;
for (let i = 0; i < number.length; i++) {
//this condition is If the value is less than 0 then the negative value will count
if (number[i] < 0) {
count = count+1;
}
}
return count;
}



function gemsToDiamond(frOne, frTwo, frThree) {
// three friends dimon multiplication then let the total diamond count
let frOneGems = frOne * 21;
let frTwoGems = frTwo * 32;
let frThreeGems = frThree * 43;
let totalDiamod = frOneGems + frTwoGems + frThreeGems;
// this condition is 2000 is subtracted for total diamond double of 1000
if (totalDiamod > 1000 * 2) {
let dimond = totalDiamod - 2000;
return dimond
}
// this condition is total dimond direcet show
else if (totalDiamod < 1000 * 2) {
let dimond = totalDiamod
return dimond
}
else {
return dimond
}
}