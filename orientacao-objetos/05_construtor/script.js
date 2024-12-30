function Cachorro(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
}

let doberman = new Cachorro('Doberman', 4, 'Preto');

console.log(doberman);
// Saída: { raca: 'Doberman', patas: 4, cor: 'Preto' }
