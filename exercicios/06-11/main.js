class Pessoa {
    #nome;
    #idade;
    #peso;
    #altura;

    constructor(nome, idade, peso, altura) {
        if (new.target === Pessoa) {
            throw new Error('Não é possivel criar uma instância de uma classe abstrata');
        }
        this.#nome = nome;
        this.#idade = idade;
        this.#peso = peso;
        this.#altura = altura;
    }

    calculaImc() {
        return (this.#peso / (this.#altura * this.#altura)).toFixed(2);
    }

    falar() {
        throw new Error('Metodo abstrato deve ser implementedo nas subclasses');
    }
}

class Funcionario extends Pessoa {
    calculaImc() {
        return `O seu IMC é de:${super.calculaImc()}.`
    }

    /**
     * @param {String} cargo 
     * @returns 
     */
    falar(cargo) {
        return `Olá, meu cargo é ${cargo}.`
    }
}

let funcionario1 = new Funcionario('João', 25, 70, 1.70);
console.log(funcionario1);
console.log(funcionario1.calculaImc());
console.log(funcionario1.falar("Analista de sistemas"));

let funcionario2 = new Funcionario('Nicollas', 27, 60, 1.50);
console.log(funcionario2);
console.log(funcionario2.calculaImc());

class Aluno extends Pessoa {

    /**
     * 
     * @param {Number} nPeso 
     * @param {Number} nAltura 
     * @returns 
     */
    calculaImc(nPeso, nAltura) {
        return (nPeso / (nAltura * nAltura)).toFixed(4);
    }
}

let aluno1 = new Aluno('Thiago', 20, 65, 1.70)
console.log(aluno1);
console.log(aluno1.calculaImc(100, 1.8));
console.log(aluno1.falar());