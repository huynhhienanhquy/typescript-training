//Decorator Factory
//The Decorator has parameters.
function role(role: string) {
  return function (target: Function) {
    console.log(role);
  };
}

@role("admin")
class admin {}

//Decorator execution order
function first() {
  console.log("first factory");

  return (target: Function) => {
    console.log("first");
  };
}

function second() {
  console.log("second factory");

  return (target: Function) => {
    console.log("second");
  };
}

@first()
@second()
class admin1 {}

//Class Decorator
function logger(target: Function) {
  console.log(target.name);
}

@logger
class admin2 {}

//Method Decorator
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log(propertyKey);
}

class users1 {
  @log
  login() {}
}

//Accessor Decorator
function configurable(value: boolean) {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    descriptor.configurable = value;
  };
}

class users2 {
  private _name = "Quy";

  @configurable(false)
  get name() {
    return this._name;
  }
}

//Property Decorator
function logProperty(target: any, propertyKey: string) {
  console.log(propertyKey);
}

class user2 {
  @logProperty
  name: string = "";
}

//Parameter Decorator
function required(target: any, propertyKey: string, parameterIndex: number) {
  console.log(parameterIndex);
}

class users3 {
  login(@required username: string) {}
}
