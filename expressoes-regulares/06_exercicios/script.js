const regexMaiusculas = /\w[?A-Z]/;

console.log(regexMaiusculas.test("OI"))
console.log(regexMaiusculas.test("oi"))

const regexTerminaComId = /\d+[id|ID]/;

console.log(regexTerminaComId.test("ola id"))
console.log(regexTerminaComId.test("OLAID"))
console.log(regexTerminaComId.test("OLAd12ID"))

const regexNomeENomeMarca = /\w+: (Puma|Adidas|Nike|Asics)/;

console.log(regexNomeENomeMarca.test("Marca: Puma"))
console.log(regexNomeENomeMarca.test("Marca: Aa"))
console.log(regexNomeENomeMarca.test("1232"))
console.log(regexNomeENomeMarca.test(123312))

const validaEnderecoIP = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(validaEnderecoIP.test("127.0.0.1"));
console.log(validaEnderecoIP.test("192.168.584.5"));

const validaNomeUsuario = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(validaNomeUsuario.test("eduardo_fabri12"))