const reg1 = /[12345]/;
const reg2 = /[0-9]/;

console.log(reg1.test("Temos o número 2")) // true
console.log(reg1.test("Temos o número 25")) // true
console.log(reg2.test("Temos o número 60")) // true