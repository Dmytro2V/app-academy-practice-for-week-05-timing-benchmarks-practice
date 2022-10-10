const [addNums, addManyNums] = require("./phase-1");

function addNums100Timing(increment) {
  // Copy your `addNums10` code here
  // Then, add timing code

  // Your code here
  let arr =[];
  let beg = Date.now()
  console.time() 
  for ( let i = 1; i <= 100; i++){
   // let n +=
     arr.push(addNums(i * increment))
     //console.timeLog()     
     console.log(Date.now()- beg);
  };
  console.timeEnd()
  return arr;

}


function addManyNums10Timing(increment) {
// Copy your `addManyNums10` code here
// Then, add timing code

  // Your code here
  let arr =[];
  console.time() 
  let beg = Date.now()
  for ( let i = 1; i <= 10; i++){
     arr.push(addManyNums(i * increment))
     //console.timeLog()   
     console.log(Date.now()- beg);  
  }
  console.timeEnd()
  return arr;
}


n = 1000000
console.log(`addNums(${n}): `);
addNums100Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);