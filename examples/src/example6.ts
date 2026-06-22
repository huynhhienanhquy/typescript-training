// type + enum
export enum role {
  Admin = "Admin",
  User = "User"
}

export type ID = string | number;

// interface
export interface iEntity {
  id : ID;
}

export interface iUser extends iEntity {
  name: string;
  role: role;
}

// generic repository
export interface Repository<T extends iEntity> {
  create(item: T): void;
  findById(id: ID): T | undefined;
}

// mixin
type Constructor<T = {}> = new (...args: any[]) => T;

export function timestamped<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    createdAt = new Date();
  }
}

export function loggingMixin<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    log(message: string) {
      console.log('[Log]: ${message}');
    }
  }
}

//class + generic + mixin +decorator
function logger(target: Function) {
  console.log("class loaded:", target.name);
}

@logger
class BaseRepository<T extends iEntity> implements Repository<T> {
  protected data: T[] =[];

  create(item: T): void {
    this.data.push(item);
  }

  findById(id: ID): T | undefined {
    return this.data.find(i => i.id === id);
  }
}

//apply mixin
class empty{}

const mixedBase = loggingMixin(timestamped(empty));

//userRepository
class userRepository extends BaseRepository<iUser> {
  findByRole(role: role): iUser[] {
    return this.data.filter(u => u.role === role);
  }
}

// function + type narrowing
export function printUser(user: iUser | null): void {
  if(!user) {
    console.log("no user found");
    return;
  }

  console.log(user.name);

  if (user.role === role.Admin) {
    console.log("admin access")
  }
}

// service layer
export class userService extends mixedBase {
  constructor(private repo: userRepository) {
    super();
  }

  addUser(user: iUser) {
    this.repo.create(user);
    this.log('user created: ${user.name}');
  }

  getAdminUsers(): iUser[]{
    return this.repo.findByRole(role.Admin);
  }
}

//usage
const repo = new userRepository();
const service = new userService(repo);

service.addUser({
  id: 1,
  name: "Quy",
  role: role.Admin
});

service.addUser({
  id: 2,
  name: "Huynh",
  role: role.User
})

const admins = service.getAdminUsers();
const users = service.getAdminUsers();

printUser(admins[0]);
