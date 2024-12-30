const cachorro = {
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

cachorro.setRaca("Border Collie");
console.log(cachorro.getRaca());