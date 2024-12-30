class Carrinho {
    constructor() {
        this.itens = [];
        this.quantidade = 0;
        this.valorTotal = 0;
    }

    adicionarAoCarrinho(item, quantidade, valor) {
        this.itens.push({item, quantidade, valor});
        this.quantidade += quantidade;
        this.valorTotal += quantidade * valor;
    }

    removerDoCarrinho(item, quantidade) {
        // Localiza o indice do item passado dentro do this.itens[]
        const index = this.itens.findIndex(i => i.item === item);

        if (index !== -1) {
            const itemCarrinho = this.itens[index];

            if (quantidade >= itemCarrinho.quantidade) {
                this.quantidade -= itemCarrinho.quantidade;
                this.valorTotal -= itemCarrinho.quantidade * itemCarrinho.valor;
                this.itens.splice(index, 1);
            } else {
                itemCarrinho.quantidade -= quantidade;
                this.quantidade -= quantidade;
                this.valorTotal -= quantidade * itemCarrinho.valor;
            }
            
        } else {
            console.log(`Item "${item}" não encontrado no carrinho.`);
        }
    }
}

let carrinho1 = new Carrinho([]);

carrinho1.adicionarAoCarrinho("Pelé Miniatura", 1, 500)
carrinho1.adicionarAoCarrinho("Vestido da Farm", 4, 100)

console.log(carrinho1.itens)
console.log(carrinho1.quantidade)
console.log(carrinho1.valorTotal)

carrinho1.removerDoCarrinho("Vestido da Farm", 3)
console.log(carrinho1.itens)
console.log(carrinho1.quantidade)
console.log(carrinho1.valorTotal)

console.log(carrinho1)
carrinho1.adicionarAoCarrinho("Carrinho Carros 2", 2, 300)
console.log(carrinho1)