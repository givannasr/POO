/**
 * Herança:
 * O reaproveitamento de código e a possibilidade de se evitar o código 
 * duplicado são os objetivos das linguagens orientadas a objetos.
 */

class Veiculo {
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
}

class Bicicleta extends Veiculo {
    pedalar() {
        return `a bicicleta foi pedalada.`
    }
}

const bicicleta1 = new Bicicleta('Ceci', 'Caloi')
console.log(bicicleta1);
console.log(bicicleta1.pedalar());
console.log(bicicleta1.modelo);

class Carro extends Veiculo {
    #ligado = false;

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
console.log(carro1.marca);
console.log(carro1.ligar());
// console.log(carro1.desligar());
console.log(carro1.acelerar());