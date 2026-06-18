// Common interface for database data manipulation classes
interface IRepository<T> {
    getAll(): T[];
    getById(id: number): T | undefined;
    create(item: T): void;
}

// Specifically applicable to User objects
interface User2 { id: number; username: string; }

class UserRepository implements IRepository<User> {
    private users: User[] = [];

    getAll(): User[] { return this.users; }
    getById(id: number): User | undefined { return this.users.find(u => u.id === id); }
    create(user: User): void { this.users.push(user); }
}