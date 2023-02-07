function woodcalculator(chairQuantaity,tableQuantaity,bedQuantatity){

const perchairWood = 3;
const pertableWood = 10;
const perbedWood = 50;

const chairWood = chairQuantaity * perchairWood;
const tableWood = tableQuantaity * pertableWood;
const bedWood = bedQuantatity * perbedWood;

const totalWood = chairWood + tableWood + bedWood;
return totalWood;

}


const totalWood = woodcalculator(1,1,1);
console.log('total wood requier', totalWood);