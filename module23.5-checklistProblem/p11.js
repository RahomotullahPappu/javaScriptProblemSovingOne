function mulofNumber (number){
  let mul = 1;
  for(let i=1; i<=3; i++){
    mul = mul*i;
  }
  return mul;

}
const mul = mulofNumber(3);
console.log(mul);