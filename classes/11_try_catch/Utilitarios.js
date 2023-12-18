export default class Utilitarios {
    static checkNumber(n) {
        const result = Number(n);
        if (Number.isNaN(result)) {
            return 'Valor não numérico';
        }
        return 'Valor numérico';
    }

    /**
     * Exception: são erros que são gerados durante a execução dos códigos.
     */

    static checkNumber2(x) {
        if (x != 11) {
            // throw new Error('O valor de x não pode ser diferente de 11');
        }
    }



    static checkNumber3(x) {
        try {
            if (x != 11) {
                throw new Error('O valor de x não pode ser diferente de 11');
            }
        } catch (error) {
            return error;
        }
    }

    static soma(a, b) {
        return a + b;
    }

    static soma2(x, y) {
        try {
            const result = x + y;
            return result;
        } catch (error) {
            return `Erro: ${error}`;
        }
    }
}