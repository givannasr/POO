/**
 * Getters e Setters
 * Em programação orientada a objetos existem dois nomes especificos para trabalhar com ações de definir e 
 recuperar dados de um atributo, para definir dados de atributos utiliza-se a palavra 'set' (setters) e para 
 recuperar dados de um atributo utiliza-se a palavra 'get' (getters)
 */

class Pessoa {
    //propriedades => caracteristicas do nosso projeto
    _nome;
    _idade;
    _peso;
    _altura;
    imc;

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

    falar() {
        return `Óla mundo!`;
    }

    /**
     * 
     * @returns Retorna o valor do calculo do indice de massa corporal
     */
    calcularIMC() {
        return (this._peso / (this._altura * this._altura));
    }

    get nome() {
        return this._nome;
    }
    get idade() {
        return this._idade;
    }
    get peso() {
        return this._peso;
    }
    get altura() {
        return this._altura;
    }

    /**
     * metodos -set- (definir/atribuir/alterar um dado/valor),
     * recebemos um parâmetro com o novo valor e atribuimos seu valor a uma propriedade
     */

    set nome(novoNome) {
        this._nome = novoNome;
    }
    set idade(novaIdade) {
        this._idade = novaIdade;
    }
    set peso(novoPeso) {
        this._peso = novoPeso;
    }
    set altura(novaAltura){
        this._altura = novaAltura;
    }
}

/**
 * Criando um novo objeto a partir de uma classe
 * A instancia é criada com valores iniciais indefinidos
 */

let pessoa1 = new Pessoa('Giovanna', 22, 70, 1.60);
let pessoa3 = new Pessoa(null, 22, 70, null);
let pessoa2 = new Pessoa();
pessoa2.nome = 'Maria';
pessoa2.idade = 25;
pessoa2.peso = 50;
pessoa2.altura= 1.50;

console.log(pessoa2);
console.log(pessoa3);

console.log(pessoa1);
console.log(pessoa1.falar());
console.log(verificaIMC());

function verificaIMC() {
    let imc = pessoa1.calcularIMC();

    if (imc < 20) {
        return `imc de ${imc.toFixed(2)} = Abaixo do peso`;
    }
    else if (imc > 20 && imc <= 25) {
        return `imc de ${imc.toFixed(2)} = Peso ideal`;
    }
    else if (imc > 25 && imc <= 30) {
        return `imc de ${imc.toFixed(2)} = Sobrepeso`;
    }
    else if (imc > 30 && imc <= 35) {
        return `imc de ${imc.toFixed(2)} = Obesidade moderada`;
    }
    else if (imc > 35 && imc <= 40) {
        return `imc de ${imc.toFixed(2)} = Obesidade Severa`;
    }
    else if (imc > 40 && imc <= 50) {
        return `imc de ${imc.toFixed(2)} = Obesidade Morbida`;
    }
    else {
        return `imc de ${imc} = Não foi possivel definir`;
    }
}