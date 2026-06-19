// Parameter or variable declarations can be iterated over using an iterator.
function toArray<T>(xs: Iterable<T>): T[] {
  return [...xs];
}

//for..of vs for..in statements
let list = [5, 6, 7];
for (let i in list) {
  console.log(i); // "0", "1", "2",
}

for (let i of list) {
  console.log(i); // 4, 5, 6
}

//Generator
function* numbers() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numbers();

gen.next();
gen.next();
