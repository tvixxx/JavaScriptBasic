const customReduce = (list, reducer, initialValue) => {
  if (list.length === 0) {
    return initialValue;
  }

  const [first, ...rest] = list;
  const updatedAcc = reducer(initialValue, first);
  return customReduce(rest, reducer, updatedAcc);
}

const list = [1,2,3];
const sumItems = customReduce(list, (acc, item) => {
  acc += item;
  return acc;
}, 0);

console.log(sumItems);

const reducerTwo = (list, reducer, initialValue) => {
  !list.length
    ? initialValue
    : reducerTwo(
        list.slice(1),
        reducer,
        reducer(initialValue, list.slice(0, 1)[0]),
      )
}

const sumItems2 = customReduce(list, (acc, item) => {
  acc += item;
  return acc;
}, 0);
console.log(sumItems2);
