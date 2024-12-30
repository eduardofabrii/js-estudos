class Cachorro {
    constructor(raca, patas, cor) {
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
    }

    latir() {
        console.log("Auauuuuuu")
    }
}

Cachorro.prototype.racao = "Não informada";

let bulldog = new Cachorro("Bulldog", 4, "Pardo")
let pincher = new Cachorro("Pincher", 4, "Preto")

bulldog.latir()