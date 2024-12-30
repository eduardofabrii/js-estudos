class ContaBancaria {
    constructor() {
        this.saldo = 0;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente!");
        }
    }
}

let conta1 = new ContaBancaria();

console.log(conta1)

conta1.depositar(300);

console.log(conta1)

conta1.sacar(4)

console.log(conta1)
