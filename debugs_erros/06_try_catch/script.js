let b = 1;


console.log("Iniciando Try Catch...")
try {
    let a = 2 + b;
} catch (error) {
    console.log("Algo deu errado: " + error)
    // throw new Error(e);
}
console.log("Fim do Try Catch")

console.log("O try catch tenta executar o bloco e se não der certo ele continua o código!")