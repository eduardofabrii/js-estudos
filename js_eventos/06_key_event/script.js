let body = document.querySelector('body');
let button1 = document.querySelector('#btn1');
let cor_atual = document.querySelector('#cor-atual');

function alterarCor() {
    if (body.style.backgroundColor == 'blue') {
        body.style.backgroundColor = 'yellow';
        if (cor_atual) { cor_atual.textContent = "Amarela"; }
        console.log("Background amarelo");
    } else {
        body.style.backgroundColor = 'blue'
        if (cor_atual) { cor_atual.textContent = "Azul"; }
        console.log("Background azul");
    }
}

window.addEventListener('keyup', function(e) {
    if (e.key == "a") {
        button1.addEventListener('click', alterarCor());
    }
});