export default class Pessoa {
    #nome;
    #dataNasc;
    #funcao;

    constructor(pNome, pDataNasc, pFuncao) {
        if (new.target === Pessoa) {
            throw new Error(`Não é possivel intanciar uma classe de tipo abstrata`);
        }
        this.#nome = pNome;
        this.#dataNasc = new Date(pDataNasc);
        this.#funcao = pFuncao;
        this.idade = this.calcularIdade();
    }

    get nome() {
        return this.#nome;
    }
    set nome(pNome) {
        if (typeof pNome === 'string') {
            this.#nome = pNome;
        } else {
            throw new Error('O valor precisa ser uma string');
        }
    }

    get dataNasc() {
        return this.#dataNasc;
    }
    set dataNasc(pDataNasc) {
        this.#dataNasc = pDataNasc;
    }

    calcularIdade() {
        let hoje = new Date().getFullYear();
        let anoNasc = new Date(this.#dataNasc).getFullYear();
        let idade = hoje - anoNasc;
        return idade;
    }

    tabela() {
        return `
            <tr>
                <td>${this.#nome}</td>
                <td>${this.#dataNasc.toLocaleDateString()}</td>
                <td>${this.#funcao}</td>
                <td>${this.idade}</td>
            </tr>`;
    }
}
