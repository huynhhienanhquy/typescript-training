// Numeric Enum
enum direction {
  up,
  down,
  left,
  right,
}

// String Enum
enum direction {
  up1 = "UP",
  down1 = "DOWN",
}

// Heterogeneous Enum
enum resultenum {
  no = 0,
  yes = "YES",
}

// Constant and computed members
enum fileAccess {
  read = 1 << 1,
  write = 1 << 2,
  readwrite = read | write,
  length = "abc".length,
}

// Union Enum
enum ShapeKind {
  circle,
  square,
}

// Enum in Runtime
console.log(direction.up);

//keyof typeof Enum
type directionKeys = keyof typeof direction;

// Reverse Mapping
enum colorenum {
  red,
}

colorenum[0];

// Const Enum
const enum directionenum {
  up,
  down,
}

// Ambient Enum
declare enum statusenum {
  success,
  failed,
}

// Object vs Enums
const directions = {
  up: 0,
  down: 1,
} as const;
