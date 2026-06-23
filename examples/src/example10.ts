//enum, interface
enum role_ex10 {
  Admin,
  User,
}

interface user_ex10 {
  id: number;
  name: string;
  role: role_ex10;
  age?: number;
}

// generic, union type

type ID = number | string ;

function prinId(id: ID) {
  console.log("ID: ", id);
}

function getFirst<T>(arr: T[]): T {
  return arr[0];
}

//mixin 
type Constructor_ex10<T = {}> = new (...args: any[]) => T;

function canLog<TBase extends Constructor_ex10>(Base: TBase) {
  return class extends Base {
    log(message: string) {
      console.log("Log: ", message);
    }
  }
}

//class base, service
class userService_ex10 {
  protected users: user_ex10[] = [];

  addUser(user: user_ex10) {
    this.users.push(user);
  }

  getUsers() {
    return this.users;
  }
}

//class with mixin
class enhancedUserService extends canLog(userService_ex10) {}

const services = new enhancedUserService ();

services.addUser({
  id: 1,
  name: "Quy Huynh",
  role: role_ex10.Admin,
  age: 20
});

services.addUser({
  id: 3,
  name: "Anh Quy",
  role: role_ex10.User,
  age: 20
});

console.log(services.getUsers());

const first_ex10 = getFirst(services.getUsers());
console.log(first_ex10.name);

services.log("User added");

prinId(123);
prinId("abc");