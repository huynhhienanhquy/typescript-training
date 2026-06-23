// //use generic

// class table<T> {
//   data: T[];

//   constructor(data: T[]) {
//     this.data = data;
//     console.log(this.data);
//     }
// }

// //user

// interface user_ex7 {
//   id: number;
//   name: string;
//   age: number;
// }

// const users_ex7 = [
//   {
//     id: 1,
//     name: "Quy",
//     age: 21,
//   }
// ]

// const userTable = new table<user_ex7>(users_ex7);

// //product 
// interface product_ex7 {
//   id: number;
//   price: number;
//   name: string;
// }

// const products = [
//   {
//     id: 2,
//     price: 200,
//     name: "baker"
//   }
// ]

// const productTable = new table<product_ex7>(products);

//generic table

interface Column<T> {
  key: keyof T;
  title: string;
}

class Table<T> {
  constructor(
    public data: T[],
    public columns: Column<T>[]
  ) {}

  render() {
    this.data.forEach(row => {
      this.columns.forEach(col => {
        console.log(col.title + ": "+ row[col.key]);
      });
    });
  }
}

interface User_ex7 {
  id: number;
  name: string;
  age: number;
}

const users_ex7: User_ex7[] = [
  {
    id: 1,
    name: "Quy",
    age: 22,
  },
];

const users_ex71: User_ex7[] = [
  {
    id: 2,
    name: "Huynh",
    age: 21,
  },
];

const columns: Column<User_ex7>[] =[
  {
    key: "id",
    title: "ID"
  },
  {
    key: "name",
    title: "Name"
  },
  {
    key: "age",
    title: "Age"
  }
]

const table = new Table(users_ex7, columns);
const table1 = new Table(users_ex71, columns);
table.render();
table1.render();