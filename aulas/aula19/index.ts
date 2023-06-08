// Interfaces

interface UserInterface {
    readonly firstName : string,
    email: string
}

interface AuthorInterface {
    books: string[]
}

const user : UserInterface = {
    firstName: "Felipe",
    email: "felipe@gmail.com"
}

const Author: UserInterface & AuthorInterface = {
    firstName: "Nome",
    email: "teste@gmail.com",
    books: ["Olá"]
}

//Uma coisa que não é possível com interface
type Grade = number | string;
const grade: Grade = 1;
