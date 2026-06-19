// 1. Function Type Expression
type GreetFunction = (a: string) => void;
const sayHi: GreetFunction = (name) => console.log(`Hi ${name}`);

// 2. Call Signatures
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}

// 3. Construct Signatures
type SomeConstructor = {
  new (s: string): Date;
};
function fn(ctor: SomeConstructor) {
  return new ctor("2026-01-01");
}

// 4. Generic Functions & Constraints (extends)
function longest<T extends { length: number }>(a: T, b: T): T {
  return a.length >= b.length ? a : b;
}
longest([1, 2], [1, 2, 3]);

// 5. Optional & Default Parameters
function greetUser(name: string, title?: string, greeting: string = "Hello") {
  return `${greeting}, ${title ? title + " " : ""}${name}`;
}

// 6. Function Overloads
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}

// 7. void, never, unknown
function logMessage(msg: string): void {
  console.log(msg);
} // Returns void (does not return anything)
function fail(msg: string): never {
  throw new Error(msg);
} // Function never returns (throws error/infinite loop)

let value: unknown;
// value.toUpperCase(); // ❌ Error, 'unknown' is safer than 'any', requires type check before use
if (typeof value === "string") {
  value.toUpperCase();
} // ✅ Valid after type check
