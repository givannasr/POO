/**
 * Criando uma classe?
 * O nome de classe deve começar com letra maiuscula
 */

class Pessoa {
    //propriedades => caracteristicas do nosso projeto
    nome;
    idade;
    peso;
    altura
}

/**
 * Criando um novo objeto a partir de uma classe
 * A instancia é criada com valores iniciais indefinidos
 */

let pessoa1 = new Pessoa();

pessoa1.nome = 'Giovanna';
pessoa1.idade = 22;
pessoa1.peso = 70;
pessoa1.altura = 1.60;

console.log(pessoa1);
