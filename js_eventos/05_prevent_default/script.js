let body = document.querySelector('body');
let button1 = document.querySelector('#btn1');
let button2 = document.querySelector('#btn2');
let a = document.querySelector('a');

function alterarCor(e) {
    body.style.backgroundColor = 'blue';
    console.log(e);
    console.log("Cor alterada com sucesso!");
}

a.addEventListener('click', function(e) {
    e.preventDefault();
    console.log("Link: https://github.com/eduardofabrii")
});

button1.addEventListener('click', alterarCor);

button2.addEventListener('click', function(event) {
    console.log(event);
});
