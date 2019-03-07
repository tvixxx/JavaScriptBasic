// To find a sum of min elems in array


function reductionCost(num) {
  let costs = 0;

  while(num.length > 1) {
    const min1 = Math.min(...num);
    num.splice(num.indexOf(min1), 1);
    
    const min2 = Math.min(...num);
    num.splice(num.indexOf(min2), 1);
    
    const sumOfMinElems = min1 + min2;
    num.push(sumOfMinElems);
    costs += sumOfMinElems;
  }
  
  return costs;
}

console.log(reductionCost([3, 1, 2, 3])); // 18
console.log(reductionCost([1, 1, 1, 1])); // 8
