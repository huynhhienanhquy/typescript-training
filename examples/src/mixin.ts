type Constructor<T = {}> = new (...args: any[]) => T;

function canRun<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    run() {
      console.log("running");
    }
  };
}

function canEat<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    eat() {
      console.log("eating");
    }
  };
}

class Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class A extends canRun(Animal) {}
class B extends canEat(A) {}

const obj = new B("dog", 6);

console.log(obj.name);
console.log(obj.age);
obj.run();
obj.eat();
