function publicBusFare(participants){
  if(typeof participants != 'number' || participants < 50){
    return 'provides the valid pertipiticants';
  }
  let busSeatCapacity = 50;
  let microSeatCapacity = 11;
  let remaining =0;

  remaining = participants % busSeatCapacity;
 
  remaining = remaining % microSeatCapacity;
 
  let costOfPublicBus = remaining * 250;
  return costOfPublicBus;

}

console.log(publicBusFare(365));