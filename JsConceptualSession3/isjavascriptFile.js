function isjavascriptFile(fileName){
  if(fileName.endsWith('.js')){
    return true
  }
  else{
    return false
  }
}
 
let result = isjavascriptFile('index.js');
console.log(result);