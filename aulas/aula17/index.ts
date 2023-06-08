//Type -> basicamente um objeto
type Order = {
    productId : number,
    price : number
}

type User = {
    firstName : string,
    email : string,
    password ?: string,
    age ?: number//Por ter o ?:, acaba sendo opcional, podendo ser nula
    orders : Order[]
}

const user : User = {
    firstName: "Tomás",
    email: "tomas@gmail.com",
    password: "123",
    age: 18,
    orders: [{productId: 1, price: 2}],
}

const log = (message ?: string) => {
    console.log(message)
}

log(user.password!);