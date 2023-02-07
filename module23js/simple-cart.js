

const shopingCart = [
  { name: 'Shoe', price: 2000 },
  { name: 'Pant', price: 2500 },
  { name: 'Shirt', price: 1500 },
  { name: 'Watch', price: 3000 }
];

function totalCost(products){
  let sum = 0;
  for(let i = 0; i<products.length; i++){
    const product = products[i];
    sum = sum + product.price;
    console.log(product);
  }
  return sum;
}
const expense = totalCost(shopingCart);
console.log('Total expense toady', expense);