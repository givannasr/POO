import ContaCorrente from "./ContaCorrente.js"; 
import ContaPoupanca from "./ContaPoupança.js";

console.log('============ Conta Corrente =============');
const cc1 = new ContaCorrente('0001','1234',1000);
console.log(cc1.Depositar(500));
console.log(cc1.Saldo);

console.log('============ Conta Poupança =============');
const cp1 = new ContaPoupanca('0002','5678',1000);
console.log(cp1.Depositar(500));
console.log(cp1.Saldo);