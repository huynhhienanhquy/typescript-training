// Generic + Interface + keyof + Indexed Access Types

interface user_ex1 {
  id: number;
  name: string;
  age: number;
}

function getProperty_ex1<T, K extends keyof T>(
  obj: T,
  key: K
): T[K]  {
  return obj[key];
}

const userex: user_ex1  = {
  id: 1,
  name: "Quy",
  age: 21
}

const name1 = getProperty(user, "name");
const age = getProperty(user, "age");
