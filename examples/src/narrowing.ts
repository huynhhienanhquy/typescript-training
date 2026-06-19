// 1. typeof Type guard
function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}

// 2. Truthiness narrowing (checking for null/undefined)
function printAll(strs: string[] | null) {
  if (strs && typeof strs === "object") {
    // remove null and ensure it's an array
    for (const s of strs) {
      console.log(s);
    }
  }
}

// 3. Equality narrowing
function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // Only when x and y are both strings can they be equal.
    x.toUpperCase();
    y.toLowerCase();
  }
}

// 4. Operator 'in'
type Fish = { swim: () => void };
type Bird = { fly: () => void };
function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim(); // ✅ TS understands this is Fish
  }
  return animal.fly(); // ✅ TS understands this is Bird
}

// 5. instanceof
function logDate(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString()); // ✅ Systems understand x is Date class
  }
}

// 6. Discriminated Unions (Unions are distinguished based on the common attribute 'kind'.)
interface Circle {
  kind: "circle";
  radius: number;
}
interface Square {
  kind: "square";
  sideLength: number;
}
type Shape = Circle | Square;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength * shape.sideLength;
    default:
      // 7. The 'never' approach: Ensure all cases have been thoroughly checked.
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
