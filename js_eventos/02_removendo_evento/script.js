let body = document.querySelector('body');
let button1 = document.querySelector('#btn1');
let button2 = document.querySelector('#btn2');

function alterarCor() {
    body.style.backgroundColor = 'blue';
    console.log("Cor alterada com sucesso!");
}

button1.addEventListener('click', alterarCor);

button2.addEventListener('click', () => {
    button1.removeEventListener('click', alterarCor);
})