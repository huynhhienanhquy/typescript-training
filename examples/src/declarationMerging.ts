// Interface Merging
interface book {
  name: string;
}

interface book {
  price: number;
}

const book1: book = {
  name: "SGK",
  price: 10,
};

console.log(book1);

// Interface Merging with Function Overload
interface printer {
  print(text: string): void;
}

interface printer {
  print(num: number): void;
}

const printerMer: printer = {
  print(value: string | number) {
    console.log(value);
  },
};

printerMer.print("Hi");
printerMer.print(111);

// Namespace Merging
namespace animals {
  export class dog {
    bark() {
      console.log("woof");
    }
  }
}

namespace animals {
  export class cat {
    meow() {
      console.log("Meow!");
    }
  }
}

const dog = new animals.dog();
const cat = new animals.cat();

dog.bark();
cat.meow();
export {};

// Namespace + Class
class album {
  title = "my album";
}

namespace album {
  export class lable {
    name = "music";
  }
}

const albumex = new album();
const labelex = new album.lable();

console.log(albumex.title);
console.log(labelex.name);

// Namespace + Function
function greet(name: string) {
  return greet.prefix + name;
}

namespace greet {
  export const prefix = "hii ";
}

console.log(greet("Quy"));

// Namespace + Enum
enum color {
  Red = 1,
  Green = 2,
  Blue = 3,
}

namespace color {
  export function mix() {
    return color.Red + color.Green;
  }
}

console.log(color.mix());

// Module Augmentation
import { calculator } from "./export";
import "./import";

const cal = new calculator();

console.log(cal.add(4, 2));
console.log(cal.multiply(2, 2));

// Global Augmentation
export {};
declare global {
  interface Array<T> {
    first(): T | undefined;
  }
}

Array.prototype.first = function () {
  return this[0];
};

const nums = [10, 20, 30];

console.log(nums.first());
