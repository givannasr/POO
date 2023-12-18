class Conta {
    #agencia;
    #numConta;
    #saldo;

    constructor(agencia, numConta, saldo) {
        if (new.target === Conta) {
            throw new Error('Não é possivel criar uma instância de uma classe abstrata');
        }
        this.#agencia = agencia;
        this.#numConta = numConta;
        this.#saldo = saldo || 0;
    }

    get saldo() { return this.#saldo }
    set saldo(saldo) { this.#saldo = saldo }

    get numConta() { return this.#numConta }

    depositar(valor) {
        this.#saldo += valor;
        return `Deposito de R$${valor} realizado na conta ${this.#numConta}. Saldo: ${this.#saldo}`;
    }

    sacar(valor) {
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
            return `Saldo de ${valor} realizado na conta ${this.#numConta}. Saldo: ${this.#saldo}`;
        } else {
            return `Saldo insuficiente`;
        }
    }

    rendimentoJuros() {
        throw new Error('Metodo abstrato deve ser implementedo nas subclasses');
    }
}

class ContaPoupanca extends Conta {
    rendimentoJuros() {
        const taxaJuros = 0.03;
        const juros = this.saldo * taxaJuros;
        this.saldo += juros;
        return `Rendimento de juros de R$${juros.toFixed(2)} na conta poupança ${this.numConta}. Saldo: ${this.saldo}`;
    }
}

class ContaCorrente extends Conta{
    
}

const cp1 = new ContaPoupanca(7895, 1234, 1000);
console.log(cp1);
console.log(cp1.depositar(500));
console.log(cp1.rendimentoJuros());
console.log(cp1.sacar(50));

const cp2 = new ContaCorrente(3245, 3456, 1000);
console.log(cp2);
console.log(cp2.depositar(5000));
console.log(cp2.sacar(500));