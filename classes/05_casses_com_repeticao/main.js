/**
 * Exemplo de classes com itributo e métodos semelhantes
 * 
 * Criar uma classe Carro com 3 atributos: #modelo, #marca, e #ligado.
 * Criar um construtor que receba os argumentos modelo e marca e inicialize como false o atributo ligado. 
 * Criar get e set para modelo e marca.
 * Criar uma função ligar(), que marque o atributo ligado como true e retorne uma mensagem que o veiculo ligou.
 * Criar uma função desligar() que marque o atributo ligado para false e returne uma mensagem que o veículo foi desligado
 * Criar uma função acelerar() que verifique o status do atributo ligado, caso for false gere um erro com: - throm new Error(
 * 'O carro não pode ser acelerado, pois está desligado'), caso contrario retorne que o carro foi acelerado.
 * Criar uma função estaLigado(), que retorne o status do atributo ligado.
 */

class Carro {
    #modelo;
    #marca;
    #ligado;

    /**
     * 
     * @param {String} pModelo 
     * @param {String} pMarca 
     */

    constructor(pModelo, pMarca,) {
        this.#modelo = pModelo;
        this.#marca = pMarca;
        this.#ligado = false;
    }

    get modelo() {
        return this.#modelo
    }
    get marca() {
        return this.#marca
    }
    set modelo(pModelo) {
        this.#modelo = pModelo
    }
    set marca(pMarca) {
        this.#marca = pMarca
    }

    ligar() {
        this.#ligado = true;
        return `O carro está ligado`
    }
    desligar() {
        this.#ligado = false;
        return `O carro está desligado`
    }
    acelerar() {
        if (!this.#ligado) {
            throw new Error(`O carro não pode ser acelerado, pois está desligado!`)
        }
        return `O carro foi acelerado`;
    }
    estaLigado() {
        return this.#ligado;
    }
}

let carro1 = new Carro('Civic', 'Honda');
console.log(carro1);
console.log(carro1.ligar());
// console.log(carro1.desligar());
console.log(carro1.acelerar());

/**
 * Criar uma classe chamada Bicicleta, que possua 2 atributos: #modelo, #marca
 * Criar um construtor que receba os argumentos modelo e marca.
 * Criar get e set para modelo e marca.
 * Criar uma função pedalar(), que retorne uma mensagem que a bicicleta foi pedalada.
 */

class Bicicleta {
    #modelo;
    #marca;

    /**
     * 
     * @param {String} pModelo 
     * @param {String} pMarca 
     */

    constructor(pModelo, pMarca) {
        this.#modelo = pModelo;
        this.#marca = pMarca;
    }

    get modelo() {
        return this.#modelo;
    }
    get marca() {
        return this.#marca;
    }

    set modelo(pModelo) {
        this.#modelo = pModelo;
    }
    set marca(pMarca) {
        this.#marca = pMarca;
    }

    pedalar(){
        return `a bicicleta foi pedalada.`
    }
}

let bicicleta1 = new Bicicleta('seilá', 'nsei')
console.log(bicicleta1);
console.log(bicicleta1.pedalar());