let promessa = Promise.resolve(5);
let promessaErrada = Promise.resolve(new Error("Alguma coisa não está certa hein!"))

console.log("Qualquer coisaaaaaaaaaaaaaa")

console.log(promessa)

promessa.then((value) => { return value + 5})
.then((value) => {console.log(value)});

console.log("Qualquer coisaaaaaaaaaaaaaa")

promessaErrada
    .then(value => {
        if (value instanceof Error) {
            throw value; // Lança o erro para que o .catch() o capture
        }
        console.log(value);
    })
    .catch(reason => console.log("Erro: " + reason));


function verificarNumero(num) {
    return new Promise((resolve, reject) => {
        if (num == 2) {
            resolve(`O número é ${2}`);
        } else {
            reject(new Error("Falhou"))
        }
    });
}

console.log(verificarNumero(2))
console.log(verificarNumero(3))
