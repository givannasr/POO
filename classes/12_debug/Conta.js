export default class Conta {
    #agencia;
    #conta;
    #saldo;

    constructor(ag, ct, saldo) {
        if (new.target === Conta) {
            throw new Error('Não é possivel instanciar uma classe abstrata');
        }
        this.#agencia = ag;
        this.#conta = ct;
        this.#saldo = saldo || 0;
    }

    get Saldo() { return this.#saldo }
    set Saldo(value) {
        if (value > 0) {
            this.#saldo += value;
        } else {
            return 'Valor inválido!';
        }
    }
    get Agencia() { return this.#agencia }
    get Conta() { return this.#conta }

    Sacar(value) {
        if (value <= this.#saldo) {
            this.#saldo -= value;
            return `Saque realizado com sucesso!`;
        } else {
            return `Saldo insuficiente!`;
        }
    }
    Depositar(value) {
        if (value > 0) {
            this.#saldo += value;
            return `Depósito realizado com sucesso!`;
        } else {
            return `Valor inválido!`;
        }
    }

    
}