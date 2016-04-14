var die1 = Math.floor(Math.random() * 6 + 1);
var die2 = Math.floor(Math.random() * 6 + 1);

var score;

if ( (die1 === 1) || (die2 === 1) ) {
  score = 0;
} else {
  if( (die1 === die2) ) {
    score = (die1 + die2) * 2;
  } else {
    score = die1 + die2;
  }
}

alert('Вам выпало '+die1 + ' и ' + die2 + ' и вы получили очков: ' + score);
