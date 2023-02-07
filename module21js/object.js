var human = {
  name : 'Pappu',
  age : 24,
  nationality: 'bangladesh',
  friend : ['mim', 'Anu', 'alo', 'toma'],
  father: {
             name:'Azad',
             product:  ['pant', 'shirt', 't-shirt', 'jacket']
         },
  
  
};


// console.log(human.father.name);


// console.log(human.friend[3]);
console.log(human);

for(var i=0; i<human.father.product.length; i++){
var element = human.father.product[i];
console.log(i,element);
}

for(var i=0; i<human.friend.length; i++){
var element = human.friend[i];
console.log(i,element);
}
