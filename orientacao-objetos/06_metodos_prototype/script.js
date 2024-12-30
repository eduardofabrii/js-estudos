function Cachorro(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    uivar = function() {
        console.log("Auuu")
    }
}

Cachorro.prototype.uivar = function() {
    console.log("Auuu")
}

let doberman = new Cachorro('Doberman', 4, 'Preto');

console.log(doberman);

doberman.uivar()