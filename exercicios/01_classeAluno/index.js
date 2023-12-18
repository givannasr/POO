class Aluno {
    _nome;
    _matricula;
    _email;
    _nota1;
    _nota2;
    _nota3;
    _nota4;

    /**
     * 
     * @param {String} pNome
     * @param {Number} pMatricula 
     * @param {String} pEmail 
     * @param {Number} pNota1 
     * @param {Number} pNota2 
     * @param {Number} pNota3 
     * @param {Number} pNota4 
     */

    constructor(pNome, pMatricula, pEmail, pNota1, pNota2, pNota3, pNota4) {
        this._nome = pNome;
        this._matricula = pMatricula;
        this._email = pEmail;
        this._nota1 = pNota1;
        this._nota2 = pNota2;
        this._nota3 = pNota3;
        this._nota4 = pNota4;
    }

    exibirNome() {
        return `${this._nome}`
    }

    calcularMedia() {
        return ((this._nota1 + this._nota2 + this._nota3 + this._nota4) / 4)
    }
}

let aluno1 = new Aluno('Giovanna', 2200018, 'silvarochagiovanna@gmail.com', 8, 7, 6, 10);

console.log(aluno1);
console.log(aluno1.exibirNome());
console.log(aluno1.calcularMedia());

console.log('A aluna ' + aluno1.exibirNome() + ", tem a media de: " + aluno1.calcularMedia());