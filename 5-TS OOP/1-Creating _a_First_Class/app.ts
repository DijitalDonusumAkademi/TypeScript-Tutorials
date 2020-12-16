class Department{
    name: string;

    //nesne oluşma anında!!!
    constructor(n: string) {
        this.name = n;
    }
}

const accounting =  new Department('Accounting');

console.log(accounting);

