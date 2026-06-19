interface user3 {
  id: number;
  username: string;
}

type UserKeys = keyof user3; // "id" | "username" | "email"

//Combine with Generic
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user3: user3 = {
  id: 1,
  username: "quy",
};

console.log(getProperty(user3, "id")); // Output: 1
console.log(getProperty(user3, "username")); // Output: "quy"

//Keyof with Type Alias
type product = {
  id: number;
  name: string;
  price: number;
};
type productKeys = keyof product; // "id" | "name" | "price"

//keyof typeof
const car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
};
type carKeys = keyof typeof car; // "make" | "model" | "year"
