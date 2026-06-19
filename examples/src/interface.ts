interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Quy", lastName: "Huynh" };

document.body.textContent = greeter(user);
export {};
