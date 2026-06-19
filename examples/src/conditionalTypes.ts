type isString<T> = T extends string ? true : false;

type myString = isString<string>; // true
type myNumber = isString<number>; // false

type message<T> = T extends string
  ? "This is a string"
  : "This is not a string";

type message1 = message<string>; // "This is a string"
type message2 = message<number>; // "This is not a string"

type isArray<T> = T extends any[] ? true : false;

type myArray = isArray<number[]>; // true
type myNotArray = isArray<number>; // false

//Get the type of an element in an Array
//If T is an array, extract the element type and name it U.
type elementType<T> = T extends (infer U)[] ? U : never;

type numberArray = elementType<number[]>; // number
type stringArray = elementType<string[]>; // string
