interface user4 {
  name: string;
  age: number;
}

type nameType = user4["name"]; // string
// result type nameType = string
type ageType = user4["age"]; // number
// result type ageType = number

//Get multiple attributes
type user4Properties = user4["name" | "age"]; // string | number
// result type user4Properties = string | number

// with array
const users = [
  { name: "Quy", age: 22 },
  { name: "An", age: 20 },
];

type user4Type = (typeof users)[number];
// result type user4Type = {
//     name: string;
//     age: number;
// }

//Multi-level access
interface user4Nested {
  id: number;
  profile: {
    name: string;
    age: number;
  };
}

type user4NestedNameType = user4Nested["profile"]["name"]; // string
// result type user4NestedNameType = string
