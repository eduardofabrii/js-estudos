class Endereco {
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    set setRua(ruaNova) {
        this.rua = ruaNova;
    }

    set setBairro(bairroNovo) {
        this.bairro = bairroNovo;
    }

    set setCidade(cidadeNova) {
        this.cidade = cidadeNova;
    }

    set setEstado(estadoNovo) {
        this.estado = estadoNovo;
    }
}

let endereco1 = new Endereco("Rua Roberto Vichineski", "Abranches", "Curitiba", "PR")
let endereco2 = new Endereco("Rua Pablo Ergonomico", "Batel", "Curitiba", "PR")

console.log(endereco1)
console.log(endereco2)

endereco1.setRua = "Rua Roberto Gava"
endereco2.setEstado = "SC"
endereco2.setCidade = "Garopaba"
endereco2.setBairro = "Nações"

console.log(endereco1)
console.log(endereco2)