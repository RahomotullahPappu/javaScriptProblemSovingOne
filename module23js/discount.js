function ticketPrice(ticketQuantaity){
  const first100Rate = 100;
  const second100Rate = 90;
  const restTicketRate = 70;
  if(ticketQuantaity <= 100){
    const price = ticketQuantaity * first100Rate;
    return price;
  }

  else if(ticketQuantaity <= 200){
    const first100Price = 100 * first100Rate;
    const restTicketQuantaity = ticketQuantaity - 100;
    const restTicketPrice = restTicketQuantaity * second100Rate;
    const totalPrice = first100Price + restTicketPrice;
    return totalPrice;

  }

  else{
    const first100Price = 100 * first100Rate;
    const second100Price = 100 * second100Rate;
    const restTicketQuantaity = ticketQuantaity - 200;
    const restTicketPrice = restTicketQuantaity * restTicketRate;
    const totalCost = first100Price + second100Price + restTicketPrice;
    return totalCost;
  }
}

const price= ticketPrice(200);
console.log('price:',price);