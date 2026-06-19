class Person3 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`${this.name} ${this.age} years .`);
  }
}

const person3 = new Person3("Quy", 22);
person3.greet();

// Access Modifiers
class animal {
  // private means that the property can only be accessed within the class itself
  private species: string;
  // protected means that the property can be accessed within the class and its subclasses
  protected age: number;
  // public is the default access modifier
  public name: string;

  constructor(species: string, age: number, name: string) {
    this.species = species;
    this.age = age;
    this.name = name;
  }
}

//Inheritance
class dog extends animal {
  //Call the constructor of the parent class.
  constructor(name: string) {
    super("Dog", 3, name);
  }
  bark(): void {
    console.log(` ${this.name} ${this.age} years old.`);
  }
}

const dog1 = new dog("Buddy");
dog1.bark();

//Readonly Properties
class car1 {
  readonly brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }
}

const car2 = new car1("Toyota");

// Getter and Setter
class employee {
  private _salary: number;

  constructor(salary: number) {
    this._salary = salary;
  }

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    if (value < 0) {
      throw new Error("Salary cannot be negative");
    }
    this._salary = value;
  }
}

const emp = new employee(50000);
emp.salary = 60000;
console.log(emp.salary);

//Method Override
class bird {
  makeSound(): void {
    console.log("Chirp");
  }
}

class parrot extends bird {
  override makeSound(): void {
    console.log("Squawk");
  }
}

//abstract Classes
abstract class shape {
  abstract area(): number;
}

class circle extends shape {
  constructor(public radius: number) {
    super();
  }
  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

const circle1 = new circle(5);

// implementing Interfaces
interface printable {
  print(): void;
}

class mydocument implements printable {
  print(): void {
    console.log("Printing document...");
  }
}

// generic Classes
class container<T> {
  constructor(public value: T) {}
  getValue(): T {
    return this.value;
  }
}

const numberContainer = new container<number>(42);
console.log(numberContainer.getValue()); // Output: 42
const stringContainer = new container<string>("Hello");
console.log(stringContainer.getValue()); // Output: Hello
