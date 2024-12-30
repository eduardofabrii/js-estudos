function checarNumero(num) {
    let number = Number(num);
    if (Number.isNaN(number)) {
        console.log("Por favor, insira somente números!")
    } else {
        return number;
    }
}

let number = prompt("Escreva um número: ")
checarNumero(number)