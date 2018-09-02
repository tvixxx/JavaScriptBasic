Реализуйте рекурсивную функцию findPrimitiveBox, которая принимает на вход пару,
находит внутри нее пару без вложенных пар (как описано выше) и возвращает наружу.

const findPrimitiveBox = (pair) => {
  
  if (!isPair(car(pair)) && !isPair(cdr(pair))) {
      return pair;
  }

  const newPair = isPair(car(pair)) ? car(pair) : cdr(pair); 
  return findPrimitiveBox(newPair);
}
