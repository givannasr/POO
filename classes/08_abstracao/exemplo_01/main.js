/**
 * Abstração - 
 * Uma classe abstrata não pode ser instanciada, ela é
 * desenvolvida para representar entidades e conceitos
 * abstratos.
 * 
 * Em JavaScript não temos uma palavra reservada para
 * definir uma classe abstrata, realizamos uma verificação no
 * construtor da class através do 'new.target'.
 */

class Animal {
    constructor() {
        /**
         * Verifica se a instancia criada refere-se a classe abstrata Animal, caso seja, lança um erro.
         */
        if (new.target === Animal) {
            throw new Error('Não é possivel criar uma instância de uma classe abstrata.');
        }
    }

    falar() {
        throw new Error('Esta função deve ser implementada!');
    }
}

class Cachorro extends Animal {
    falar() {
        return 'Au Au'
    }

}

class Gato extends Animal {
    falar(){
        return 'Miau miau'
    }
}

let cachorro1 = new Cachorro();
console.log(cachorro1.falar());