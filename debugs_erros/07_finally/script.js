let b = 1;


console.log("Iniciando Try Catch Finally...")
try {
    let a = 2 + b;
} catch (error) {
    console.log("Algo deu errado: " + error)
    // throw new Error(e);
} finally {
    console.log("Sempre executa o finally mesmo caindo no catch")
}
console.log("Fim do Try Catch Finally")

console.log("O try catch finally tenta executar o bloco e se não der certo ele continua o código e SEMPRE executa o finally!")