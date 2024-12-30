class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }

    latir() {
        console.log("Auauuuuuu")
    }

    get getRaca() {
        return this.raca;
    }

    set setRaca(raca) {
        this.raca = raca;
    }
}

let patas = Symbol();
Cachorro.prototype[patas] = 4;
console.log(Cachorro.prototype[patas]);

let cachorro = new Cachorro("", "Preto");

console.log(cachorro.getRaca)

cachorro.setRaca = "Doberman";

console.log(cachorro.getRaca)