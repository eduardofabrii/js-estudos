const produtos = [
    { name: "Camisa", price: 29.99, category: "Roupas" },
    { name: "Geladeira Eletrolux", price: 2999.99, category: "Eletro" },
    { name: "Microondas", price: 359.99, category: "Eletro" },
    { name: "Calça Jeans", price: 129.99, category: "Roupas" }
]

produtos.map((product) => {
    if (product.category === "Roupas") {
        product.onSale = true;
    }
})

console.log(produtos)