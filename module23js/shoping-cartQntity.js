

const shopingCart = [
  { name: 'Shoe', price: 2000, quantaity: 2 },
  { name: 'Pant', price: 2500, quantaity: 5},
  { name: 'Shirt', price: 1500, quantaity: 3 },
  { name: 'Watch', price: 3000,quantaity: 2 }
];

function totalCost(products){
  let sum = 0;
  for(let i = 0; i<products.length; i++){
    const product = products[i];
    const productTotal = product.price * product.quantaity;
    sum = sum + productTotal;
    console.log(product);
  }
  return sum;
}
const expense = totalCost(shopingCart);
console.log('Total expense toady', expense);