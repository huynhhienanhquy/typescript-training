// 1. Function Type Expression
type GreetFunction = (a: string) => void;
const sayHi: GreetFunction = (name) => console.log(`Hi ${name}`);

// 2. Call Signatures (Hàm vừa gọi được vừa có thuộc tính đi kèm)
type DescribableFunction = {
    description: string;
    (someArg: number): boolean; // Cách gọi hàm
};
function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6));
}

// 3. Construct Signatures (Hàm khởi tạo bằng từ khóa 'new')
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
longest([1, 2], [1, 2, 3]); // ✅ OK vì mảng có .length
// longest(10, 20); // ❌ Lỗi vì 'number' không có thuộc tính .length

// 5. Optional & Default Parameters
function greetUser(name: string, title?: string, greeting: string = "Hello") {
    return `${greeting}, ${title ? title + " " : ""}${name}`;
}

// 6. Function Overloads (Khai báo nhiều cách gọi cho một hàm)
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
function logMessage(msg: string): void { console.log(msg); } // Trả về void (không return gì)
function fail(msg: string): never { throw new Error(msg); } // Hàm không bao giờ chạy hết (bắn lỗi/vòng lặp vô tận)

let value: unknown;
// value.toUpperCase(); // ❌ Lỗi, 'unknown' an toàn hơn 'any', bắt buộc phải check type trước khi dùng
if (typeof value === "string") { value.toUpperCase(); } // ✅ Hợp lệ sau khi check