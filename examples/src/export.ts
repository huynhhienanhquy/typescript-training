export const PI = 3.14;

export function add(a: number, b: number) {
  return a + b;
}
export default class user {}

export interface user1 {
  id: number;
}

//Module Augmentation
export class calculator {
  add(a: number, b: number) {
    return a + b;
  }
}
