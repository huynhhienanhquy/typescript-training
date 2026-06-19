const user = {
  id: 1,
  name: "Quy",
  age: 22,
};

// typeof
type User = typeof user;

// keyof
type UserKey = keyof User;

// Generic
function updateUser<K extends UserKey>(key: K, value: User[K]) {
  user[key] = value;
}

updateUser("name", "Quy Huynh");
updateUser("age", 25);

console.log(user);
