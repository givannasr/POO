/**
 * Mais Metodo
 * A palavra - this - refere-se ao item em questão dentro do escopo
 */

let pessoa = {
    nome: 'Gi',
    exibirNome() {
        return `Olá, meu nome é ${this.nome}`;
    },
    alterarNome(novoNome) {
        return this.nome = novoNome;
    }
}

console.log(pessoa.exibirNome());

pessoa.alterarNome('Bruce')

console.log(pessoa.exibirNome());