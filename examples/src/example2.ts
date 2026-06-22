//Generic Repository Pattern + Interface + Generic Class

interface entity {
  id: number;
}

class repository<T extends entity> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getById(id: number): T | undefined  {
    return  this.items.find(item =>  item.id === id);
  }
}

interface user_ex2  extends entity {
  name: string;
}

const repo = new repository<user_ex2>();

repo.add({
  id: 1,
  name: "Quy"
})

console.log(repo.getById(1))
