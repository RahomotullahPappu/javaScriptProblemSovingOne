//ARRAY//........


// 5. Find the value of an element by index.

// var phoneBrand=['Samsung', 'Nokia', 'Iphone'];
// console.log(phoneBrand[1]);


// 6. How to change the element by index?


// var phoneBrand=['Samsung', 'Nokia', 'Iphone'];
// phoneBrand[2]='Vivo'
// console.log(phoneBrand);


//7. How to get the index of an element by the value?

// var phoneBrand=['Samsung', 'Nokia', 'Iphone'];
// var foundIndex = phoneBrand.indexOf('Nokia')
// console.log(foundIndex);

//9. How can you add an element an array?

// var phoneBrand = ['Iphone', 'xiomi', 'Sumsung', 'Tesla' ];
// phoneBrand.push('Vivo');
// console.log(phoneBrand);


// 10. How can you remove an element from array?

// var phoneBrand = ['Iphone', 'xiomi', 'Sumsung', 'Tesla' ];
// phoneBrand.pop();
// console.log(phoneBrand);

// 11. Add the element at the first position of an array.

// var phoneBrand = ['Iphone', 'xiomi', 'Sumsung', 'Tesla' ];
// phoneBrand.unshift('Best Phone');
// console.log(phoneBrand);

// 12. Remove the first element of an array.

// var phoneBrand = ['Iphone', 'xiomi', 'Sumsung', 'Tesla' ];
// phoneBrand.shift();
// console.log(phoneBrand);


//Conditionals//..........................................................................

// 1. Meaning of : >, <, >=, ==, !=, ===, !==
// > --- les then.
// < --- grater then.
// >= -- les then or equal.
// == -- Two operands are equal.
// != -- Two operands are not equal.
// === -- Two operands are equal.
// !== -- Two operands are not equal.

// 2. Meaning of: &&

// var myTk = 500;
// var apple = 500;
// var bikeService = 400;
// var water = 100;

// if(apple <= myTk && bikeService <=myTk){
// console.log('Giv me one kg apple')
// }
// else{
// console.log('Giv me a water bottle!')
// }


// 3. Meaning of: ||.

// var apple = 280;
// var bikeService = 400;
// var water = 100;
// var myTk = 290;
// if(apple <= myTk || bikeService <=myTk){
// console.log('Giv me one kg apple')
// }
// else{
// console.log('Giv me a water bottle!')
// }


// 4. Lest's say have x amount of money. if you have more then 80,000, then you will buy a mac. if your money more then 60,000 then you will buy a gaming laptop. if your money more then 40,000 then you will buy lenovo Yoga. if your money more then 20,000 then you will buy an used laptop. otherwise, you will use your mobile phone.

// var mac = 80000;
// var gammingLaptop = 60000;
// var lenovoYoga = 40000;
// var myMony = 20000;

// if(myMony>mac){
//   console.log('I am richman i have a mac')
// }

// else if(myMony>gammingLaptop){
//   console.log('I buy the gamming laptop')
// }

// else if(lenovoYoga<myMony){
//   console.log('I am buy the lenovoYoga yesssssss');
// }

// else{
//   console.log('I have simple phone buy be happy')
// }


// Loop///....................................................................................

// 1. Display "Ajka amer moon valo nei" for 39 times.

// var moonValoNei=0;
// while(moonValoNei <39){
// console.log('Ajka amer moon valo nei')
// moonValoNei++;
// }


// var amivatKhaobo = 0;
// while(amivatKhaobo < 15){
//   console.log('ami vat khaboi khabo');
//   amivatKhaobo ++;
// }

// 2. Display numbers between 58 to 98.


// var number = 58;
// while(number <= 98){
// console.log(number);
// number++
// }


// 3.Show all even numbers from 412 to 456.

// var numbers = 410;
// while(numbers < 456){
// numbers+=2
// console.log(numbers)
// }


// 4. Show all odd numbers 581 to 623

// var numbers =  581;
// while(numbers < 623){
// numbers+=2
// console.log(numbers)
// }


// 5. Difference between while loop and for loop
// ans:
// for loop- Use a for loop when you know the loop should execute n times,
// while loop - Use a while loop when asking for user input. Use a while loop when the increment value is nonstandard.


// 6. Declare an array for all the topics that you have learned last few days.


// var topics = ['HTML', 'CSS', 'BOOTSTRAP', 'TAILWIND', 'JAVASCRIPT' ];
// for(i=0; i <5; i++){
// var sub = topics[i];
// console.log(sub);
// }


// 7. Create an array for all the mobile phones. Display all element of the array by using while loop.

// var phoneBrand = ['SAMSUNG', 'NOKIA', 'VIVO', 'IPHONE', 'SYMPHONY'];
// var i =0;
// while(i<phoneBrand.length){
// console.log(phoneBrand[i]);
// i++;
// }


// 8. Run a loop from 30 to 86. This loop will stop if the values get higher 44.

// for(var i =30; i <= 86; i++){
//   console.log(i)
//   if(i> 43){
//   break
//   }
//   }

// 9. Write the price of the books that you have. Display the prices if the prices is lower than 200.
  
var bookPrice =[452, 544, 100, 654, 80, 90, 120,56,78,44,88];
for (var i = 0; i <bookPrice.length; i++){
var price = bookPrice[i];
if(price > 200){
continue
}
console.log(price);
}










