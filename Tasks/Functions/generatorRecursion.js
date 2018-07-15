function* factorial() {
  var start = 1;
  var res = start;

  while(true) {
    res = res * start++;
    yield res;
  }
}

for (const value of factorial()) {
  console.log(value);
  if (value > 2000) {
    break;
  }
}
