const user4 = {
  name: "Quy",
  age: 22,
};

type userType = typeof user4;
// type UserType = {
//     name: string;
//     age: number;
// }

//Reuse object types
const laptop = {
  brand: "Dell",
  model: "XPS 13",
  price: 999,
};

type laptopType = typeof laptop;

const anotherLaptop: laptopType = {
  brand: "Apple",
  model: "MacBook Air",
  price: 1199,
};

console.log(anotherLaptop);
