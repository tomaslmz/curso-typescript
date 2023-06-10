class Pessoa {
    readonly id: number;
    protected name: string;
    private age: number;

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}

class Empregado extends Pessoa {
    constructor(id: number, name: string, age: number) {
        super(id, name, age);
    }

    getNome(): string {
        return this.name
    }
}

const empregado = new Empregado(1, "Tomás", 18);

console.log(empregado.getNome());


