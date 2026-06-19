interface user4 {
  name: string;
  age: number;
}

//Partial<T>
type user4Partial = Partial<user4>;
4;

const user4PartialExample: user4Partial = {
  name: "Quy",
};

//Required<T>
type user4Required = Required<user4>;

const user4RequiredExample: user4Required = {
  name: "Quy",
  age: 22,
};

//Readonly<T>
type user4ReadOnly = Readonly<user4>;
const user4ReadOnlyExample: user4ReadOnly = {
  name: "Quy",
  age: 22,
};

//Pick<T, K>
type user4Pick = Pick<user4, "name">;
const user4PickExample: user4Pick = {
  name: "Quy",
};

//Omit<T, K>
type user4Omit = Omit<user4, "age">;
const user4OmitExample: user4Omit = {
  name: "Quy",
};
//results type user4Omit = {
//    name: string;
//}

//Record<K, T>
type user4Record = Record<"id" | "name", string>;
const user4RecordExample: user4Record = {
  id: "1",
  name: "Quy",
};

//Exclude<T, U>
type status = "pending" | "success" | "error";

type result = Exclude<status, "pending">;
// results type Result = "success" | "error";

//Extract<T, U>
type status1 = "pending" | "success" | "error";

type result1 = Extract<status, "success" | "error">;

//NonNullable<T>
type userName = NonNullable<string | null | undefined>;
// results type userName = string;

//Parameters<T>
function login(username: string, password: string) {}

type loginParams = Parameters<typeof login>;
// results type loginParams = [string, string];

//ReturnType<T>
function getUser() {
  return {
    id: 1,
    name: "John",
  };
}

type user7 = ReturnType<typeof getUser>;
// results type user7 = {
//     id: number;
//     name: string;
// }

//ConstructorParameters<T>
class user8 {
  constructor(
    public name: string,
    public age: number,
  ) {}
}

type params = ConstructorParameters<typeof user8>;
// results type params = {
//     name: string;
//     age: number;
// }

//InstanceType<T>
class user9 {
  name = "John";
}

type userInstance = InstanceType<typeof user9>;

//Awaited<T>
type data = Awaited<Promise<string>>;
