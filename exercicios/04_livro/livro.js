class Livro {
    #titulo;
    #qtdPaginas;
    #paginasLidas;
    #porcentagem;

    /**
     * 
     * @param {String} pTitulo 
     * @param {Number} pQtdPaginas 
     * @param {Number} PPaginasLidas 
     */

    constructor(pTitulo, pQtdPaginas, PPaginasLidas) {
        this.#titulo = pTitulo;
        this.#qtdPaginas = pQtdPaginas;
        this.#paginasLidas = PPaginasLidas;
    }

    get titulo() {
        return this.#titulo;
    }
    get qtdPaginas() {
        return this.#qtdPaginas
    }
    get paginasLidas() {
        return this.#paginasLidas;
    }

    set titulo(novoTitulo) {
        this.#titulo = novoTitulo;
    }
    set qtdPaginas(novoQtdPaginas) {
        this.#qtdPaginas = novoQtdPaginas;
    }
    set paginasLidas(novoPaginasLidas) {
        this.#paginasLidas = novoPaginasLidas;
    }

    verificarProgresso() {
        return `Você já leu ${this.#porcentagem = ((this.#paginasLidas * 100) / this.#qtdPaginas).toFixed(2)}% do livro.`
    }
}

let pequenoPrincipe = new Livro("O pequeno Principe", null, null);
pequenoPrincipe.qtdPaginas = 98
console.log(`O livro ${pequenoPrincipe.titulo} possui ${pequenoPrincipe.qtdPaginas} páginas`);

pequenoPrincipe.paginasLidas = 20;
console.log(pequenoPrincipe.verificarProgresso());

pequenoPrincipe.paginasLidas = 50;
console.log(pequenoPrincipe.verificarProgresso());

let meuLivro = new Livro("A guerra das duas Rainhas", 714, 70);
console.log(`O livro ${meuLivro.titulo} possui ${meuLivro.qtdPaginas} páginas.`);
console.log(meuLivro.verificarProgresso());
