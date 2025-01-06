class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    productWithDiscourd(discount) {
        return this.price * ((100 - discount) / 100);
    }
}

const shirt = new Product("Camisa Azul", 20);
console.log(shirt.productWithDiscourd(10));