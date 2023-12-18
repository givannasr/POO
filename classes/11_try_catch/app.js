import Utils from "./Utilitarios.js";

console.log('================ Tratamento de dados =======================');

console.log(Utils.checkNumber(2));
console.log(Utils.checkNumber("4"));
console.log(Utils.checkNumber("oi"));


console.log('================ Exception =======================');
console.log(Utils.checkNumber2(2));

console.log(Utils.checkNumber3(2));

console.log(Utils.soma(1,2));

console.log(Utils.soma2(3,2));