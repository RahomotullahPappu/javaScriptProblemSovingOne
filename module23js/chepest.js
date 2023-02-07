const phones = [
  {name: 'Samsung', camera : 50, storage: '32gb', price: 35000, color: 'silver'},

  {name: 'Iphone', camera : 50, storage: '32gb', price: 91000, color: 'silver'},

  {name: 'Xiomai', camera : 50, storage: '32gb', price: 45000, color: 'silver'},

  {name: 'Sony', camera : 50, storage: '32gb', price: 65000, color: 'silver'},

  {name: 'Vivo', camera : 50, storage: '32gb', price: 25000, color: 'silver'},

  {name: 'Oppo', camera : 50, storage: '32gb', price: 15000, color: 'silver'},

  {name: 'OnePlus', camera : 50, storage: '32gb', price: 44000, color: 'silver'},
];

function chapestPhone(phones){
  let chapest = phones[0];
  for(let i=0; i < phones.length; i++){
    const phone = phones[i];
    if(phone.price < chapest.price){
      chapest = phone;
    }

  }
  return chapest;

}
const mySelection = chapestPhone(phones);
console.log(mySelection);