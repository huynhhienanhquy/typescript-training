// 1. Readonly
interface Book {
  readonly title: string;
}
const myBook: Book = { title: "Học TypeScript" };

// 2. Index Signature (When you don't know what the key consists of beforehand.)
interface StringArray {
  [index: number]: string; // Key is a number, Value is a letter.
}
const myArray: StringArray = ["Cường", "Quy"];

// 3. Extending Types (extends) and Intersection Types (&)
interface Colorful {
  color: string;
}
interface CircleInterface {
  radius: number;
}

// Extends via Interface
interface ColorfulCircle extends Colorful, CircleInterface {}

// Representation using Intersection (Type)
type ColorfulCircleType = Colorful & CircleInterface;

const cc: ColorfulCircleType = { color: "red", radius: 42 };
