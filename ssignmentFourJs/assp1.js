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