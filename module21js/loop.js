// for(var i=0; i<=100; i++){
//   console.log(i, 'You are legend');
// }


// var friend = ['mim', 'dim', 'alu', 'tomato'];
// // console.log(friend[0]);
// // console.log(friend[1]);
// // console.log(friend[2]);
// // console.log(friend[3]);
// // console.log(friend[4]);

// for(var i=0; i <= friend.length; i++ ){
//   var element = friend[i];
//   console.log(element,'index',i);
// }



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
 





