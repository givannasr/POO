import Conta from "./Conta.js"

export default class ContaPoupanca extends Conta {
    RendimentoJuros() {
        const taxaJuros = 0.03;
        const juros = this.Saldo * taxaJuros;
        this.Saldo += juros;
        return `Rendimento de juros de R$${juros.toFixed(2)}. Saldo da conta: R$${this.Saldo.toFixed(2)}`;
    }
}