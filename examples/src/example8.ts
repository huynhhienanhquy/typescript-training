//interface, enum, optional
enum role_ex8 {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

interface user_ex8 {
    id: number;
    name: string;
    role: role_ex8;
    email?: string;
}

const user1_ex8: user_ex8 = {
    id: 2,
    name: "Quy",
    role: role_ex8.Admin,

}

console.log(user1_ex8);
