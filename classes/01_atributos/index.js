/**
 * Criando uma classe?
 * O nome de classe deve começar com letra maiuscula
 */

class Pessoa {
    //propriedades => caracteristicas do nosso projeto
    _nome;
    _idade;
    _peso;
    _altura;

    /**
     * Metodo construtor
     * Um metodo construtor permite atribuir valores ao objeto criado no momento que ele é instanciado.
     * Aqui é possivel adicionar o tipo de dados que cada parãmetro deve receber.
     * @param {String} pNome 
     * @param {Number} pIdade 
     * @param {Number} pPeso 
     * @param {Number} pAltura 
     */

    constructor(pNome, pIdade, pPeso, pAltura) {
        this._nome = pNome;
        this._idade = pIdade;
        this._peso = pPeso;
        this._altura = pAltura;
    }
}

/**
 * Criando um novo objeto a partir de uma classe
 * A instancia é criada com valores iniciais indefinidos
 */

let pessoa1 = new Pessoa('Giovanna', 22, 70, 1.60);

console.log(pessoa1);
