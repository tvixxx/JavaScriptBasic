function printGraph (x){
  console.log('Hello. I started...');

  for (var i = 0; i < 100; i++) {
    console.log('Printed ' + x(i));
  } 
}

function myFunc(x) {
 return x * x;
}

function otherFunc(x) {
  return x + 1;
}

printGraph(myFunc);
printGraph(otherFunc);
