/**
 * 
 */

console.log("========Teste - Conta Corrente==========");
import ContaCorrente from "./ContaCorrente.js";
let cc1 = new ContaCorrente(321, 987);
console.log(cc1);
console.log(cc1.depositar(32));
console.log(cc1.depositar(65));
console.log(cc1.sacar(50));
console.log(cc1.sacar(5000));

console.log("========Teste - Conta Poupança==========");
import ContaPoupanca from "./ContaPoupanca.js";
let cp1 = new ContaPoupanca(567, 654);
console.log(cp1);
console.log(cp1.depositar(43));
console.log(cp1.depositar(98));
console.log(cp1.sacar(50));
// console.log(cp1.sacar(5000));
console.log(cp1.rendimentodeJuros());

/**
 * Passando objetos como argumento
 */

console.log('========= Passando Objetos como argumento =============');

function salvaCliente(ContaCorrente) {
    console.log(ContaCorrente);
}

salvaCliente(cc1);

function salvaCliente2(ContaCorrente, ContaPoupanca) {
    console.log(ContaCorrente, ContaPoupanca);
}

salvaCliente2(cc1, cp1);

/**
 * Lista de Objetos
 */

console.log('========= Lista de objetos =============');

let ListaContas = [];
ListaContas.push(cc1, cp1);
console.log(ListaContas); 