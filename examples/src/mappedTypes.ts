interface user5 {
  id: number;
  name: string;
}

type user5copy = {
  [K in keyof user5]: user5[K];
};

// results type user5copy = {
//   id: number;
//   name: string;
// }

//Make all attributes optional.
type user5Optional = {
  [K in keyof user5]?: user5[K];
};

const user5OptionalExample: user5Optional = {
  id: 1,
};

console.log(user5OptionalExample);

//Make all properties read-only.
type user5ReadOnly = {
  readonly [K in keyof user5]: user5[K];
};

const user5ReadOnlyExample: user5ReadOnly = {
  id: 1,
  name: "Quy",
};

console.log(user5ReadOnlyExample);

//In collaboration with Generics
type nullable<T> = {
  [K in keyof T]: T[K] | null;
};

interface product1 {
  id: number;
  name: string;
}

type nullableProduct = nullable<product1>;
// results type nullableProduct = {
//     id: number | null;
//     name: string | null;
// }
