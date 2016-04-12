var one = 1, two = 2, three = 3, four = 4; //Обьявили переменные
var rocketPsh = 'roooockeeet...!';

function launchRocket() {
  console.log(rocketPsh);
}

function doOne(){
  console.log(1);
}

function doTwo(){
  console.log(2);
}

function doThree(){
  console.log(3);
}

function doFour(){
  console.log(4);
}

//our conditions
if (2 == one) {
  doOne();
} else if (1 == two) {
  doTwo();
} else if (3 == three) {
  ;                     // all that after this condition will not considered, only conditions before!
} else if (4 == four) {
  doFour();
} else {
  launchRocket();
}

