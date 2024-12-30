const dia = /\d\d/;

console.log(dia.test("2019") && "2019".length == 2)
console.log(dia.test("asd"))
console.log(dia.test("10") && "10".length == 2)