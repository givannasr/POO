class Agenda {

    constructor() {
        this.contatos = new Map();

    }

    addContato(pNome, pNumTelefone) {
        if (!this.contatos.has(pNome)) {
            this.contatos.set(pNome, pNumTelefone)
        } else {
            if(!this.contatos.has(pNumTelefone)){
                this.contatos.set(pNome, pNumTelefone)
            }
        }
        return `Novo contato adicionado a agenda: ${pNome}, ${pNumTelefone}`;
    }
    editarContato(edtContato) {
        
    }
    removerContato(contatoExcluido) {
        return `${contatoExcluido} foi deletado`
    }

    procurarContato(contatoProcurado) {
        if (contatoProcurado == this.contatos) {
            return `Contato referente .`
        } else {
            `Contato não encontrado.`
        }
    }
}

let contato1 = new Agenda();

console.log(contato1.addContato('Gi', 938546610));
contato1.addContato('Gabi', 234455653);
console.log(contato1);
contato1.editarContato()