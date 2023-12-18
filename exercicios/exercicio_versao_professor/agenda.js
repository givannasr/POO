class Agenda {
    constructor() {
        this.contatos = new Array();
    }
    #verificarContato(nome) {
        this.count = 0;
        if (this.contatos.forEach(c => {
            if (c.nome === nome) {
                this.count++;
            }
        }));
        return this.count === 0 ? false : true;
    }
    #verificarIndiceporNome(nome) {
        this.index = -1;
        if (this.contatos.forEach(c => {
            if (c.nome === nome) {
                this.index = this.contatos.findIndex(i => i.nome === nome);
            }
        }));
    }

    #verificarIndiceporTelefone(telefone) {
        this.index = -1;
        if (this.contatos.forEach(c => {
            if (c.telefone === telefone) {
                this.index = this.contatos.findIndex(i => i.telefone === telefone);
            }
        }));
    }

    adicionar(nome, telefone) {
        if (this.contatos.length === 0) {
            this.contatos.push({ nome, telefone });
            return `Contato adicionado com sucesso!`;
        } else {
            if (!this.#verificarContato(nome)) {
                this.contatos.push({ nome, telefone });
                return `Contato adicionado com sucesso!`;
            } else {
                return `Contato já existente!`;
            }
        }
    }

    editar(nomeAtual, novoNome, novoTel) {
        this.#verificarIndiceporNome(nomeAtual);
        if (this.index !== -1) {
            this.contatos[this.index] = { nome: novoNome, telefone: novoTel };
            return `Contato ${nomeAtual} alterado para ${novoNome}.`;
        } else {
            return `Contato não encontrado`
        }
    }

    remover(nome) {
        this.#verificarIndiceporNome(nome);
        if (this.index !== -1) {
            this.contatos.splice(this.index, 1);
            return `Contato ${nome} excluido com sucesso.`;
        } else {
            return `Contato não encontrado`
        }
    }

    pesquisaPorNome(nome) {
        this.#verificarIndiceporNome(nome);
        if (this.index !== -1) {
            return `Contato encontrado como: ${this.contatos[this.index].nome}, com o telefone: ${this.contatos[this.index].telefone}.`
        } else {
            return `Contato não encontrado`
        }
    }

    pesquisaPorTelefone(telefone) {
        this.#verificarIndiceporTelefone(telefone);
        if (this.index !== -1) {
            return `Telefone encontrado como: ${this.contatos[this.index].telefone}, com o nome: ${this.contatos[this.index].nome}.`
        } else {
            return `Contato não encontrado`
        }
    }

    listarContatos(){
        this.res ='======== Resultado da lista ========\n';
        this.contatos.forEach(c =>{
            this.res += ` ${c.nome}-${c.telefone}\n`;
        });
        return this.res;
    }
}

let contato1 = new Agenda()
console.log(contato1.adicionar('Maria', 2345423));
console.log(contato1.adicionar('Gi', 38546610));
console.log(contato1.adicionar('Gabi', 2345678));
console.log(contato1.adicionar('Maria', 2345423));
console.log(contato1);

console.log(contato1.editar('Gi', 'José', 23412564));
console.log(contato1.remover('José'));
console.log(contato1.pesquisaPorNome('Gabi'));
console.log(contato1.pesquisaPorTelefone(2345423));
console.log(contato1.listarContatos());