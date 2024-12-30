const Cachorro = {
    raca: "Sem raça definida",

    latir: function() {
        return "Au au au";
    },

    uivar: function() {
        return "Auuuuuuu";
    },

    rosnar: function() {
        return "Grrrrr";
    },

    setRaca: function(raca) {
        this.raca = raca;
    },

    getRaca: function() {
        return this.raca;
    }
}

console.log(Object.getPrototypeOf(Cachorro))

const Pitbull = Object.create(Cachorro);

Pitbull.setRaca("Pitbull")
console.log(Pitbull.getRaca())