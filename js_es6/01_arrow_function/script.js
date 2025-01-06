// Arrow Functions

const sum = function sum(a, b) {
    return a + b;
} 

const arrowSum = (a, b) => a + b;

console.log(sum(5, 5))
console.log(arrowSum(5, 5))

const greeting = (name) => {
    if (name) {
        return `Olá ${name}!`
    } else {
        return "Olá!"
    }
}

console.log(greeting("Matheus"))
console.log(greeting())

const testArrow = () => console.log("Testou!");

testArrow();

const user = {
    name: "Eduardo",
    sayUsername() {
        setTimeout(function() {
            // Esse this se perde, pq nao faz parte do escopo, só se tiver uma variavel bindada com o this
            console.log(this)
            console.log("Username: " + this.name)
        }, 500)
    },
    // A arrow function permite que o objeto seja o elemento pai de fato, ja uma função ja tem outro escopo individual
    sayUsernameArrow() {
        setTimeout(() => {
            console.log(this)
            console.log("Username: " + this.name)
        }, 700)
    }
}

user.sayUsername();
user.sayUsernameArrow();