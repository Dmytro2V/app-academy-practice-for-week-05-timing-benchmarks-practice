const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in
  let arr =[];
  let n = 0  
  for ( let i = 1; i <= 10; i++){
   // let n +=
     arr.push(addNums(i * increment))
     
  }
  return arr;
}

// Runs `addManyNums` in 10 increasing increments

function addManyNums10(increment) {
  // Fill this in
  
  let arr =[];
  for ( let i = 1; i <= 10; i++){
     arr.push(addManyNums(i * increment))
  }
  return arr;
}
console.log(addNums10(1));
module.exports = [addNums10, addManyNums10];