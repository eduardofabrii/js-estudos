const validaDominio = /[?www].\w+\.com.br|.com/;

console.log(validaDominio.test("www.google.com"))
console.log(validaDominio.test("google.com"))
console.log(validaDominio.test("www.google"))

const validaEmail = /\w+@\w+\.\w+/;

console.log(validaEmail.test("eduardo@gmail.com"))
console.log(validaEmail.test("@gmail.com"))
console.log(validaEmail.test("edu@gmail"))

const validaDataNascimento = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/

console.log(validaDataNascimento.test("23/08/2006"))
console.log(validaDataNascimento.test("23/08/06"))
console.log(validaDataNascimento.test("6/10/06"))