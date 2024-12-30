class ContaBancaria {
    constructor() {
        this.saldo = 0;
        this.saldoContaPoupanca = 0;
        this.jurosDaPoupanca = 5;
    }

    depositar(valor) {
        this.saldo += valor;
        console.log("Deposito feito com sucesso! Valor da saldo: R$" + this.saldo)
    }

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente para essa retirada, valor do saldo: R$" + this.saldo);
        }
    }

    transferirParaPoupanca(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            this.saldoContaPoupanca += valor;
            console.log("Transferencia feita com sucesso! Valor da CP: R$" + this.saldoContaPoupanca)
        } else {
            console.log("Saldo insuficiente para essa transferencia, valor do saldo: R$" + this.saldo);
        }
    }
}

class ContaEspecial extends ContaBancaria {
    constructor(saldo, saldoContaPoupanca, jurosDaPoupanca) {
        super(saldo, saldoContaPoupanca, jurosDaPoupanca)
        this.jurosDaPoupanca = 10;
    }
}

let conta1 = new ContaBancaria();
let conta2 = new ContaEspecial();

conta1.depositar(30);
conta1.depositar(50);
conta1.sacar(50);
conta1.transferirParaPoupanca(25)
console.log(conta1.saldoContaPoupanca)
console.log(conta1.saldo)

