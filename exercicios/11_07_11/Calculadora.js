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

console.log(Calculadora.soma1(4, 5, 2, 5));
console.log(Calculadora.subtracao(6, 45, 9, 6, 8));
console.log(Calculadora.multiplicacao(8, 8, 9, 6));