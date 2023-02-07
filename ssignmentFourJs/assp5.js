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

let result = gemsToDiamond(20, 200, 50);
console.log(result);