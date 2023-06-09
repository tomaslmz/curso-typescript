interface IPerson {
    id: number;
    name: string;
    age: number;
    sayMyName(): string;
}

class Pessoa {
    id: number;
    name: string;
    age: number;

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    getName(): string {
        return this.name;
    }
}

const pessoa = new Pessoa(1, "Felipe", 2);