// keyof + mapped types + utility types

interface user_ex3  {
  id: number;
  name:  string;
  age: number;
}

type readonlyuser_ex3 = {
  readonly [K in keyof user_ex3]:  user_ex3[K];
}

const user_ex3: readonlyuser_ex3  = {
  id: 2,
  name: "Quy",
  age:  21
}
