type User = {
    firstName: string,
    age: number,
    email: string,
    register(): string
}

const user: User = {
    firstName: "Jane",
    age: 20,
    email: "jane@doe.com",
    register() {
        return 'a'
    },
}