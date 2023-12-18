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
}

/**
 * Criando um novo objeto a partir de uma classe
 * A instancia é criada com valores iniciais indefinidos
 */

let pessoa1 = new Pessoa('Giovanna', 22, 70, 1.60);

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