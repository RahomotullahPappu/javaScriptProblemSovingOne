function isLGSeven(number){
  
  // input number subtruction of 7
  let sub = number - 7;

  // this condition is subtruction If it is smaller than 7, it will return directly
  if(sub >= sub*2){
    return sub;
  }
  
  // this condition input value 7 greterthan then return the double of input value
  else if(sub<number){
    let doubleN = number*2;
    return doubleN
  }

  else{
    return sub;
  }
}


let result = isLGSeven(-15);
console.log(result)