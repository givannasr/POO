class Filme {
    #titulo;
    #duracaoEmMinutos;


    /**
     * 
     * @param {String} pTitulo 
     * @param {Number} pDuracaoEmMinutos 
     */

    constructor(pTitulo, pDuracaoEmMinutos) {
        this.#titulo = pTitulo;
        this.#duracaoEmMinutos = pDuracaoEmMinutos;
    }

    get titulo() {
        return this.#titulo;
    }
    get duracaoEmMinutos() {
        return this.#duracaoEmMinutos;
    }

    set titulo(novoTitulo) {
        this.#titulo = novoTitulo;
    }
    set duracaoEmMinutos(novoDuracaoEmMinutos) {
        this.#duracaoEmMinutos = novoDuracaoEmMinutos;
    }

    exibirDuracaoEmHoras() {
        return `O filme ${this.#titulo} possui ${Math.trunc(this.#duracaoEmMinutos / 60)}h e ${this.#duracaoEmMinutos % 60} minutos de duração`;
    }
}

let umFilmeQualquer = new Filme();
umFilmeQualquer.titulo = "Os Vingadores";
umFilmeQualquer.duracaoEmMinutos = 142;
console.log(umFilmeQualquer.exibirDuracaoEmHoras());

let meuFilmeFavorito = new Filme("Lilo&Stitch", 100);
meuFilmeFavorito.duracaoEmMinutos = 85;
console.log(meuFilmeFavorito.exibirDuracaoEmHoras());