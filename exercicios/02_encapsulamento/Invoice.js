class Invoice {
    #numItem;
    #descItem;
    #quantItem;
    #precoUnitario;

    /**
     * @param {Number} pNumItem 
     * @param {String} pDescItem 
     * @param {Number} pQuantItem 
     * @param {Number} pPrecoUnitario 
     */

    constructor(pNumItem, pDescItem, pQuantItem, pPrecoUnitario) {
        this.#numItem = pNumItem;
        this.#descItem = pDescItem;
        if (pQuantItem < 0 ? this.#quantItem = 0 : this.#quantItem = pQuantItem);
        if (pPrecoUnitario < 0 ? this.#precoUnitario = 0.0 : this.#precoUnitario = pPrecoUnitario);
    }

    get numItem() {
        return this.#numItem;
    }
    get descItem() {
        return this.#descItem;
    }
    get quantItem() {
        return this.#quantItem;
    }
    get precoUnitario() {
        return this.#precoUnitario;
    }

    set numItem(novoNumItem) {
        this.#numItem = novoNumItem
    }
    set descItem(novoDescItem) {
        this.#descItem = novoDescItem;
    }
    set quantItem(novoQuantItem) {
        this.#quantItem = novoQuantItem;
    }
    set precoUnitario(novoPrecoUnitario) {
        this.#precoUnitario = novoPrecoUnitario;
    }

    getInvoiceAmount() {
        return this.#quantItem * this.#precoUnitario;
    }
}

let valorFinal = new Invoice();
valorFinal.numItem = 345;
valorFinal.descItem = 'barquinhos';
valorFinal.quantItem = 5;
valorFinal.precoUnitario = 7676;

console.log(valorFinal);
console.log("O valor final da sua compra sera de: R$"+valorFinal.getInvoiceAmount());