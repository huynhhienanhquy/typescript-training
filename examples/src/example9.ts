enum status_ex9 {
    Active,
    Inactive
}

interface account {
    id: number;
    name: string;
    status: status_ex9;
}

class baseUser {
    constructor(public user: account){}
}

function canLogin<TBase extends new (...args: any[]) => {}>(Base: TBase) {
    return class extends Base {
        login() {
            console.log("login success")
        }
    }
}

class userService extends canLogin(baseUser){}

const service = new userService({
    id: 1,
    name: "Quy",
    status: status_ex9.Active
})

service.login();
console.log(service);