let body = document.querySelector('body');
let button1 = document.querySelector('#btn1');
let button2 = document.querySelector('#btn2');

function alterarCor(e) {
    body.style.backgroundColor = 'blue';
    console.log(e);
    console.log("Cor alterada com sucesso!");
}

button1.addEventListener('click', alterarCor);

button2.addEventListener('click', function(event) {
    console.log(event);
});
