type greeting = `Hello, ${string}!`;

let a: greeting = "Hello, TypeScript!";
let b: greeting = "Hello, World!";
//let c: greeting = "Hi, TypeScript!"; //  Error

//Combining Multiple Literal Types
type color = "red" | "green" | "blue";
type size = "small" | "medium" | "large";

type shirt = `${color} ${size}`;

let p1: shirt = "red small";
let p2: shirt = "green medium";
//let p3: shirt = "yellow large"; // Error      

//Combined with keyof
interface user6 {
  name: string;
  age: number;
}

type user6Keys = keyof user6; // "name" | "age"

type getterName = `get${Capitalize<user6Keys>}`; // "getName" | "getAge"
// results type getterName = "getName" | "getAge"

//API Endpoint
type endpoint = "users" | "products" | "orders";
type method = "GET" | "POST" | "PUT" | "DELETE";

type apiEndpoint = `/${endpoint}/${method}`;

let api1: apiEndpoint = "/users/GET";
let api2: apiEndpoint = "/products/POST";
//let api3: apiEndpoint = "/customers/GET"; // Error

//Uppercase
type a = Uppercase<"hello">; // "HELLO"
// results type A = "HELLO"

//Lowercase
type b = Lowercase<"WORLD">; // "world"
// results type B = "world"

//Capitalize
type c = Capitalize<"typescript">; // "Typescript"
// results type C = "Typescript"

//Uncapitalize
type d = Uncapitalize<"Hello">; // "hello"
// results type D = "hello"