import { PI, add } from "./export";

import User from "./export";

import * as MathUtils from "./export";

MathUtils.PI;
MathUtils.add(1, 2);

import type { user1 } from "./export";

// Module Augmentation
import { calculator } from "./export";

declare module "./export" {
  interface calculator {
    multiply(a: number, b: number): number;
  }
}

calculator.prototype.multiply = function (a: number, b: number) {
  return a * b;
};
