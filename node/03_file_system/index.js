let {readFile, writeFile} = require('fs');

readFile("arquivo.txt", "utf8", (error, text) => {
    if (error) {
        throw error;
    } else {
        console.log(text);
    }
})

textoParaEscrever = "Inserindo texto por writeFile";
writeFile("arquivo.txt", textoParaEscrever, (error) => {
    if (error) {
        throw error;
    } else {
        console.log("Escreveu com sucesso!")
    }
})