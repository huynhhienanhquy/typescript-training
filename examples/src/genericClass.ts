class GenericNumber<NumType> {
  zeroValue!: NumType;
  add!: (x: NumType, y: NumType) => NumType;
}
const myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = (x, y) => x + y;
