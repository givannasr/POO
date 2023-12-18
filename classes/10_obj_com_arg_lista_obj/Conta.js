

export default class Conta {
    #agencia;
    #numConta;
    #saldo;

    constructor(ag, ct) {
        if (new.target === Conta) {
            throw new Error(`Não é possivel intanciar uma classe de tipo abstrata`);
        }
        this.#agencia = ag;
        this.#numConta = ct;
        this.#saldo = 0;
    }

    get Saldo() { return this.#saldo; }
    set Saldo(valor) { this.#saldo = valor; }

    get Agencia() { return this.#agencia; }
    get NumConta() { return this.#numConta; }

    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
            return `Depósito de R$${valor.toFixed(2)} realizado na conta ${this.#numConta}. Saldo: R$${this.#saldo.toFixed(2)}`
        } else {
            return 'Valor inválido';
        }
    }

    sacar(valor) {
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
            return `Saque de R$${valor.toFixed(2)} realizado na conta ${this.#numConta}. Saldo: R$${this.#saldo.toFixed(2)}`
        } else {
            return 'Saldo insuficiente';
        }
    }
}

