// How to write arrays
let nums: Array<number> = [1, 2, 3];
let nums2: number[] = [1, 2, 3];

// ReadonlyArray (The array cannot be modified/added/removed.)
const constArr: readonly string[] = ["a", "b"];

// Tuple (An array has a fixed number of elements and a fixed data type for each position.)
let user1: [string, number] = ["Quy", 22];

// Optional Tuple
type Point3D = [number, number, number?];
const p: Point3D = [10, 20]; // ✅ Valid despite missing the third element.

// Rest Tuple (The first element is fixed, the subsequent elements are flexible.)
type PaySlip = [string, ...number[]];
const salary: PaySlip = ["Tháng 1", 500, 200, 100];

// Readonly Tuple
const originPoint: readonly [number, number] = [0, 0];
