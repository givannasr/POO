/**
 * POLIMORFISMO
 * Um dos conseitos mais utilizados no paradigma de programação orientada a objetos
 * é o polimorfismo, que promove a reutilização de codigo, ou seja, possibilita algo 
 * assumir várias formas. No contexto da POO, ele nos mostra como um método pode assumir 
 * formas diferentes das quais foram implementadas inicialmento e agir de modo que possa 
 * ser utilizado por outra classe.
 * O polimorfismo é implementado atravês do uso da herança.
 * 
 * Polimorfismo: qualidade o estado de ser capaz de assumir diferentes formas.
 */

class Pessoa {
    #nome;
    #idade;
    #peso;
    #altura;

    constructor(nome, idade, peso, altura) {
        this.#nome = nome;
        this.#idade = idade;
        this.#peso = peso;
        this.#altura = altura;
    }

    calculaImc() {
        return (this.#peso / (this.#altura * this.#altura)).toFixed(2);
    }

    falar() {
        return `Olá mundo!!!`;
    }
}

class Funcionario extends Pessoa {
    /**
     * Polimorfismo - Sobrescrita
     * Modifica o escopo do método/função de acordo com o desejado.
     */
    calculaImc() {
        return `O seu IMC é de:${super.calculaImc()}.`
    }

    /**
     * Polimorfismo - Sobrecarga
     * Permite que um determinado método/função tenha um comportamento distinto em função dos diferentes 
     * parametros que ele receba.
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