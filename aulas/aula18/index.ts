//Unions
type User = {
    firstName : string,
    email : string,
    password : string,
    age ?: number//Por ter o ?:, acaba sendo opcional, podendo ser nula
}

type Author = {
    books : string
}

const author : Author & User = {// Herança?
    firstName: "Nome",
    email: "teste@gmail.com",
    password: "123",
    age: 1,
    books: "Teste"
}