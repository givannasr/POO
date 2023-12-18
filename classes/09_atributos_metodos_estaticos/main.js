/**
 * Métodos e atribudos estáticos
 */

class Paciente {
    #nome;
    #idade;
    static contador = 0;

    constructor(nome, idade) {
        this.#nome = nome;
        this.#idade = idade;
        Paciente.contador++;
    }

    static calcularImc(peso, altura) {
        return (peso / (altura * altura)).toFixed(2);
    }
}

class Utils {
    static atributoEstatico = 'Olá, sou um atributo estático';

    static metodoEstatico() {
        return this.atributoEstatico;
    }
}

// class Calculadora {
//     static soma(n1, n2) {
//         if (!isNaN(n1) && !isNaN(n2)) {
//             return n1 + n2;
//         }else{
//             console.warn('Valor invalido.');
//         }
//     }

//     static subtracao(n1, n2) {
//         if (!isNaN(n1) && !isNaN(n2)) {
//             return n1 - n2;
//         }else{
//             console.warn('Valor invalido.');
//         }
//     }

//     static divisao(n1, n2) {
//         if (!isNaN(n1) && !isNaN(n2)) {
//             return n1 / n2;
//         }else{
//             console.warn('Valor invalido.');
//         }
//     }

//     static multiplicacao(n1, n2) {
//         if (!isNaN(n1) && !isNaN(n2)) {
//             return n1 * n2;
//         }else{
//             console.warn('Valor invalido.');
//         }
//     }
// }

class Calculadora {

    static soma1(...args) {
        let total = 0
        let i = 0;
        if (!isNaN(...args)) {
            for (let i = 0; i < args.length; i++) {
                total += args[i];
            }
            return total
        } else {
            console.warn('Valor invalido.');
        }
    }

    static subtracao(...args) {
        if (!isNaN(...args)) {
            let num = args.reduce(function (n1, n2) {
                return n1 - n2;
            }); return num;
        }
        else {
            console.warn('Valor invalido.');
        }
    }

    static multiplicacao(...args) {
        let total = 1
        let i = 1;
        if (!isNaN(...args)) {
            for (let i = 0; i < args.length; i++) {
                total *= args[i];
            }
            return total
        } else {
            console.warn('Valor invalido.');
        }
    }
}



let p1 = new Paciente('Giovanna', 22);
let p2 = new Paciente('Ellen', 19);
let p3 = new Paciente('Mirian', 18);

console.log(p1);
console.log(p2);
console.log(p3);

console.log(Paciente.contador);
console.log(Paciente.calcularImc(85, 1.76));

console.log(Utils.atributoEstatico);
console.log(Utils.metodoEstatico());

console.log(Calculadora.soma1(2, 5, 2, 5));
console.log(Calculadora.subtracao(10, 6, 8));
console.log(Calculadora.multiplicacao(3, 5, 8));